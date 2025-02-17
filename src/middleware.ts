import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { backendUri } from './helpers/url';
import { validateIfAuthenticated } from './helpers/middlewareFunctions';

const locales = ['en', 'de', 'es', 'fr', 'zh', 'hi', 'ja', 'ru', 'pt'];
const defaultLocale = 'en';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
});

export async function middleware(request: NextRequest) {
  // Ejecutar primero el middleware de internacionalización
  let response = intlMiddleware(request);

  const pathnameOficial = request.nextUrl.pathname;

  const accountRegex = new RegExp(`^/(${locales.join('|')})/account$`);
  const loginRegex = new RegExp(`^/(${locales.join('|')})/auth/login$`);
  const registerRegex = new RegExp(`^/(${locales.join('|')})/auth/register$`);

  if (accountRegex.test(pathnameOficial)) {
    // Ruta: /account
    const cookieToken = request.cookies.get('x-token');
    const loginRedirectURL = new URL(`/auth/login`, request.url);

    if (!cookieToken) {
      response = NextResponse.redirect(loginRedirectURL);
      clearCookies(response);
      return response;
    }

    try {
      const responseToken = await fetch(`${backendUri}/api/auth/renew-token`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${cookieToken.value}`,
        },
      });

      if (!responseToken.ok) {
        response = NextResponse.redirect(loginRedirectURL);
        clearCookies(response);
        return response;
      }

      const jsonresponse = await responseToken.json();

      if (!jsonresponse.token) {
        response = NextResponse.redirect(loginRedirectURL);
        clearCookies(response);
        return response;
      } else {
        // Establecer las cookies en la respuesta existente
        setAuthCookies(response, jsonresponse);
        return response;
      }
    } catch (_error) {
      response = NextResponse.redirect(loginRedirectURL);
      clearCookies(response);
      return response;
    }
  }

  if (loginRegex.test(pathnameOficial) || registerRegex.test(pathnameOficial)) {
    // Rutas: /auth/login o /auth/register
    const accountRedirectURL = new URL(`/account`, request.url);
    const isAuth = await validateIfAuthenticated(request);

    if (isAuth === true) {
      // Si el usuario está autenticado, redirige a /account
      response = NextResponse.redirect(accountRedirectURL);
      return response;
    } else {
      // Si no está autenticado, permite el acceso y devuelve la respuesta existente
      return response;
    }
  }

  // Para otras rutas, devuelve la respuesta existente
  return response;
}

function clearCookies(response: NextResponse) {
  response.cookies.delete({ name: 'x-token', path: '/' });
  response.cookies.delete({ name: 'uid', path: '/' });
  response.cookies.delete({ name: 'email', path: '/' });
  response.cookies.delete({ name: 'username', path: '/' });
  response.cookies.delete({ name: 'access-date', path: '/' });
  response.cookies.delete({ name: 'credits', path: '/' });
  response.cookies.delete({ name: 'summaries-language', path: '/' });
}

function setAuthCookies(response: NextResponse, jsonresponse: any) {
  // Verificar y establecer 'x-token'
  if (jsonresponse.token) {
    response.cookies.set('x-token', jsonresponse.token, {
      path: '/',
      maxAge: 60 * 60 * 12,
      httpOnly: false,
    });
  }

  // Asegurarse de que 'user' existe
  if (jsonresponse.user) {
    const user = jsonresponse.user;

    // Verificar y establecer 'credits'
    if (user.credits !== undefined && user.credits !== null) {
      response.cookies.set('credits', user.credits, {
        path: '/',
        maxAge: 60 * 60 * 12,
        httpOnly: false,
      });
    }

    // Verificar y establecer 'access-date'
    if (user.accessType) {
      response.cookies.set('access-date', user.accessType.toISOString(), {
        path: '/',
        maxAge: 60 * 60 * 12,
        httpOnly: false,
      });
    }

    // Verificar y establecer 'summaries-language'
    if (user.summariesLanguage) {
      response.cookies.set('summaries-language', user.summariesLanguage, {
        path: '/',
        maxAge: 60 * 60 * 12,
        httpOnly: false,
      });
    }

    // Verificar y establecer 'email'
    if (user.email) {
      response.cookies.set('email', user.email, {
        path: '/',
        maxAge: 60 * 60 * 12,
        httpOnly: false,
      });
    }

    // Verificar y establecer 'username'
    if (user.username) {
      response.cookies.set('username', user.username, {
        path: '/',
        maxAge: 60 * 60 * 12,
        httpOnly: false,
      });
    }

    // Verificar y establecer 'uid'
    if (user.uid) {
      response.cookies.set('uid', user.uid, {
        path: '/',
        maxAge: 60 * 60 * 12,
        httpOnly: false,
      });
    }
  }
};

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
