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

export async function middleware(req: NextRequest): Promise<NextResponse> {
  // Run the intl middleware first
  const intlResponse:any = intlMiddleware(req);

  // If the intl middleware returns a response (e.g., a redirect), update the request
  if (intlResponse) {
    req = intlResponse.request as NextRequest;
  }

  // Extract the pathname and handle locale prefixes
  const { pathname } = req.nextUrl;
  const segments = pathname.split('/').filter(Boolean); 
  // The filter(Boolean) method removes any elements from the array that are falsy values.
  //In JavaScript, falsy values include: false, 0, '' (empty string), null, undefined, and NaN

  let locale = '';
  const localesList = ['en', 'de', "es", "fr", "zh", "hi", "ja", "ru", "pt"];
  if (segments.length > 0 && localesList.includes(segments[0])) {
    locale = segments[0];
    segments.shift();
  }

  const pathWithoutLocale = '/' + segments.join('/');

  if (pathWithoutLocale.startsWith('/buy-credits/')) {
    const redirectUrl = new URL(`/${locale}/auth/login`, req.url);
    const isAuthenticated = await validateIfAuthenticated(req);

    if (!isAuthenticated) {
      const response = NextResponse.next();
      response.headers.set('X-Frame-Options', 'DENY');
      return response;
    } else {
      return NextResponse.redirect(redirectUrl);
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
        const response = NextResponse.next();
        response.headers.set('X-Frame-Options', 'DENY');
        return response;
      } else {
        return NextResponse.redirect(redirectUrl);
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

