import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';
import { backendUri } from './helpers/url';
import { validateIfAuthenticated } from './helpers/middlewareFunctions';

const i18nMiddleware = createMiddleware(routing);

export default async function middleware(req:any) {
  // Tu lógica personalizada antes de llamar al middleware de internacionalización

  // Verificar rutas específicas
  if (req.nextUrl.pathname.startsWith('/buy-credits/')) {
    const redirectUrl = new URL('/auth/login', req.nextUrl);
    const res = await validateIfAuthenticated(req);
    if (!res) {
      const response = NextResponse.next();
      response.headers.set('X-Frame-Options', 'DENY');
      return response;
    } else {
      return NextResponse.redirect(redirectUrl);
    }
  }

  // Manejar rutas como '/account'
  if (req.nextUrl.pathname === '/account') {
    const cookieToken = req.cookies.get('x-token');
    const redirectUrl = new URL('/auth/login', req.nextUrl);

    if (!cookieToken) {
      return NextResponse.redirect(redirectUrl);
    }

    try {
      const response = await fetch(`${backendUri}/api/auth/renew-token`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${cookieToken.value}`,
        },
      });

      if (!response.ok) {
        // Eliminar cookies y redirigir
        const res = NextResponse.redirect(redirectUrl);
        res.cookies.delete('x-token');
        res.cookies.delete('uid');
        res.cookies.delete('email');
        res.cookies.delete('username');
        res.cookies.delete('plan-type');
        res.cookies.delete('credits');
        res.cookies.delete('summaries-language');
        return res;
      }

      const jsonResponse = await response.json();

      if (!jsonResponse.token) {
        // Eliminar cookies y redirigir
        const res = NextResponse.redirect(redirectUrl);
        res.cookies.delete('x-token');
        res.cookies.delete('uid');
        res.cookies.delete('email');
        res.cookies.delete('username');
        res.cookies.delete('plan-type');
        res.cookies.delete('credits');
        res.cookies.delete('summaries-language');
        return res;
      } else {
        // Actualizar cookies y continuar
        const res = NextResponse.next();
        res.headers.set('X-Frame-Options', 'DENY');

        res.cookies.set('x-token', jsonResponse.token, {
          path: '/',
          maxAge: 60 * 60 * 12,
        });
        res.cookies.set('uid', jsonResponse.user.uid.toString(), {
          path: '/',
          maxAge: 60 * 60 * 12,
        });
        res.cookies.set('email', jsonResponse.user.email.toString(), {
          path: '/',
          maxAge: 60 * 60 * 12,
        });
        res.cookies.set('username', jsonResponse.user.username.toString(), {
          path: '/',
          maxAge: 60 * 60 * 12,
        });
        res.cookies.set('plan-type', jsonResponse.user.planType.toString(), {
          path: '/',
          maxAge: 60 * 60 * 12,
        });
        res.cookies.set('credits', jsonResponse.user.credits.toString(), {
          path: '/',
          maxAge: 60 * 60 * 12,
        });
        res.cookies.set(
          'summaries-language',
          jsonResponse.user.summariesLanguage.toString(),
          {
            path: '/',
            maxAge: 60 * 60 * 12,
          }
        );

        return res;
      }
    } catch (error) {
      // Manejar errores y redirigir
      const res = NextResponse.redirect(redirectUrl);
      res.cookies.delete('x-token');
      res.cookies.delete('uid');
      res.cookies.delete('email');
      res.cookies.delete('username');
      res.cookies.delete('plan-type');
      res.cookies.delete('credits');
      res.cookies.delete('summaries-language');
      return res;
    }
  }

  // Manejar rutas de autenticación
  if (req.nextUrl.pathname === '/auth/login' || req.nextUrl.pathname === '/auth/register') {
    const redirectUrl = new URL('/account', req.url);
    const res = await validateIfAuthenticated(req);
    if (res) {
      const response = NextResponse.redirect(redirectUrl);
      response.headers.set('X-Frame-Options', 'DENY');
      return response;
    } else {
      return NextResponse.next();
    }
  }

  // Para otras rutas, llamar al middleware de internacionalización
  const i18nResponse = i18nMiddleware(req);

  // Clonar la respuesta para modificar los encabezados
  const response = NextResponse.from(i18nResponse);
  response.headers.set('X-Frame-Options', 'DENY');

  return response;
}

export const config = {
  matcher: ['/', '/(en|de|es|fr|zh|hi|ja|ru)/:path*', '/buy-credits/:path*', '/account', '/auth/:path*'],
};
