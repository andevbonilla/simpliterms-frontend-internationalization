import { NextRequest, NextResponse } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { backendUri } from './helpers/url';
import { validateIfAuthenticated } from './helpers/middlewareFunctions';

const intlMiddleware = createIntlMiddleware(routing);

interface AuthResponse {
  token: string;
  user: {
    uid: string | number;
    email: string;
    username: string;
    planType: string;
    credits: string | number;
    summariesLanguage: string;
  };
}

export async function middleware(req: NextRequest): Promise<NextResponse | undefined> {
  // Run the intl middleware first
  const intlResponse = intlMiddleware(req);

  // If intlMiddleware returns a response, return it immediately
  if (intlResponse) {
    return intlResponse;
  }

  // Proceed with your custom middleware logic
  const { pathname } = req.nextUrl;
  const segments = pathname.split('/').filter(Boolean);

  let locale = '';
  if (segments.length > 0 && ['en', 'de'].includes(segments[0])) {
    locale = segments[0];
    segments.shift();
  }

  const pathWithoutLocale = '/' + segments.join('/');

  // Now, apply your custom middleware logic with adjusted paths
  if (pathWithoutLocale.startsWith('/buy-credits/')) {
    const redirectUrl = new URL(`/${locale}/auth/login`, req.url);
    const isAuthenticated = await validateIfAuthenticated(req);

    if (!isAuthenticated) {
      // User is not authenticated, redirect to login
      return NextResponse.redirect(redirectUrl);
    } else {
      // User is authenticated, proceed
      const response = NextResponse.next();
      response.headers.set('X-Frame-Options', 'DENY');
      return response;
    }
  }

  switch (pathWithoutLocale) {
    case '/account': {
      const cookieToken = req.cookies.get('x-token');
      const redirectUrl = new URL(`/${locale}/auth/login`, req.url);

      if (!cookieToken) {
        return NextResponse.redirect(redirectUrl);
      }

      try {
        const response = await fetch(`${backendUri}/api/auth/renew-token`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${cookieToken.value}`,
          },
        });

        if (!response.ok) {
          const redirectResponse = NextResponse.redirect(redirectUrl);
          clearAuthCookies(redirectResponse);
          return redirectResponse;
        }

        const jsonResponse = (await response.json()) as AuthResponse;

        if (!jsonResponse.token) {
          const redirectResponse = NextResponse.redirect(redirectUrl);
          clearAuthCookies(redirectResponse);
          return redirectResponse;
        } else {
          const nextResponse = NextResponse.next();
          nextResponse.headers.set('X-Frame-Options', 'DENY');
          setAuthCookies(nextResponse, jsonResponse);
          return nextResponse;
        }
      } catch (error) {
        const redirectResponse = NextResponse.redirect(redirectUrl);
        clearAuthCookies(redirectResponse);
        return redirectResponse;
      }
    }

    case '/auth/login':
    case '/auth/register': {
      const redirectUrl = new URL(`/${locale}/account`, req.url);
      const isAuthenticated = await validateIfAuthenticated(req);

      if (isAuthenticated) {
        // User is authenticated, redirect to account page
        return NextResponse.redirect(redirectUrl);
      } else {
        // User is not authenticated, proceed to login or register page
        const response = NextResponse.next();
        response.headers.set('X-Frame-Options', 'DENY');
        return response;
      }
    }

    default: {
      const response = NextResponse.next();
      response.headers.set('X-Frame-Options', 'DENY');
      return response;
    }
  }
}

// Helper functions to manage cookies
function clearAuthCookies(response: NextResponse) {
  response.cookies.delete('x-token');
  response.cookies.delete('uid');
  response.cookies.delete('email');
  response.cookies.delete('username');
  response.cookies.delete('plan-type');
  response.cookies.delete('credits');
  response.cookies.delete('summaries-language');
}

function setAuthCookies(response: NextResponse, data: AuthResponse) {
  response.cookies.set('x-token', data.token, { path: '/', maxAge: 60 * 60 * 12 });
  response.cookies.set('uid', data.user.uid.toString(), { path: '/', maxAge: 60 * 60 * 12 });
  response.cookies.set('email', data.user.email.toString(), { path: '/', maxAge: 60 * 60 * 12 });
  response.cookies.set('username', data.user.username.toString(), { path: '/', maxAge: 60 * 60 * 12 });
  response.cookies.set('plan-type', data.user.planType.toString(), { path: '/', maxAge: 60 * 60 * 12 });
  response.cookies.set('credits', data.user.credits.toString(), { path: '/', maxAge: 60 * 60 * 12 });
  response.cookies.set('summaries-language', data.user.summariesLanguage.toString(), { path: '/', maxAge: 60 * 60 * 12 });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
