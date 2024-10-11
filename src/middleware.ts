// import createMiddleware from "next-intl/middleware";
// import { NextRequest, NextResponse } from "next/server";
// import { validateIfAuthenticated } from "./helpers/middlewareFunctions";
// import { backendUri } from "./helpers/url";

// const intlMiddleware = createMiddleware({
//   locales: ['en', 'de', "es", "fr", "zh", "hi", "ja", "ru", "pt"],
//   defaultLocale: "en"
// });

// export default async function middleware(req: NextRequest) {

//     const officialPath = req.nextUrl.pathname;
//     const privatePages = ["/account", "/login", "/register"];

//     if (!privatePages.includes(officialPath)) {

//         // is a public page
//         // =================================================================================================
//         return intlMiddleware(req);
//         // =================================================================================================

//     } else {

//         // is a private page
//         // =================================================================================================
//         const clearCookies = (req:NextRequest) => {
//             req.cookies.delete("x-token");
//             req.cookies.delete("uid");
//             req.cookies.delete("email");
//             req.cookies.delete("username");
//             req.cookies.delete("plan-type");
//             req.cookies.delete("credits");
//             req.cookies.delete("summaries-language");
//         }

//         // -> /account
//         // ---------------------------------------------------------------------------
//         if (officialPath.startsWith("/account")) {

//             // in: /account route
//             // -----------------------------------------------------------------------
//             const cookieToken = req.cookies.get('x-token');
//             const loginRedirectUrl = new URL('/auth/login', req.nextUrl);

//             if (!cookieToken) {
//                 return NextResponse.redirect(loginRedirectUrl);
//             }

//             try {
            
//                 const response = await fetch(`${backendUri}/api/auth/renew-token`, {
//                                                 method: 'GET',
//                                                 headers: {
//                                                     'Authorization': `Bearer ${cookieToken.value}`
//                                                 },
//                                             })
//                 if (!response.ok) {
//                     clearCookies(req);
//                     return NextResponse.redirect(loginRedirectUrl);
//                 }

//                 try {

//                     const jsonresponse = await response.json();

//                     if (!jsonresponse.token) {

//                         clearCookies(req);
//                         return NextResponse.redirect(loginRedirectUrl);

//                     }else{
                                    
//                         const response = NextResponse.next();
//                         response.cookies.set('x-token', jsonresponse.token, {path: '/', maxAge: 60 * 60 * 12});
//                         response.cookies.set('uid', jsonresponse.user.uid.toString(), {path: '/', maxAge: 60 * 60 * 12});
//                         response.cookies.set('email', jsonresponse.user.email.toString(), {path: '/', maxAge: 60 * 60 * 12});
//                         response.cookies.set('username', jsonresponse.user.username.toString(), {path: '/', maxAge: 60 * 60 * 12});
//                         response.cookies.set('plan-type', jsonresponse.user.planType.toString(), {path: '/', maxAge: 60 * 60 * 12});
//                         response.cookies.set('credits', jsonresponse.user.credits.toString(), {path: '/', maxAge: 60 * 60 * 12});
//                         response.cookies.set('summaries-language', jsonresponse.user.summariesLanguage.toString(), {path: '/', maxAge: 60 * 60 * 12});
//                         return response;

//                     }
                            
//                 } catch (error) {
//                     clearCookies(req);
//                     return NextResponse.redirect(loginRedirectUrl);
//                 }    
                        
                        
//             } catch (error) {
//                 clearCookies(req);
//                 return NextResponse.redirect(loginRedirectUrl);
//             };
//         };

//         // -> /login
//         // ---------------------------------------------------------------------------
//         if (officialPath.startsWith("/login")) {
//             const accountRedirectUrl = new URL('/account', req.url);
//             const isAuthenticated = await validateIfAuthenticated(req);
//             if (!isAuthenticated) {
//                 return NextResponse.next();
//             }else{
//                 return NextResponse.redirect(accountRedirectUrl);
//             };
//         };

//         // -> /register
//         // ---------------------------------------------------------------------------
//         if (officialPath.startsWith("/register")) {
//             const accountRedirectUrl = new URL('/account', req.url);
//             const isAuthenticated = await validateIfAuthenticated(req);
//             if (!isAuthenticated) {
//                 return NextResponse.next();
//             }else{
//                 return NextResponse.redirect(accountRedirectUrl);
//             };
//         };
//         // =================================================================================================    
//     }
// }

// export const config = {
//   matcher: ["/((?!api|_next|.*\\..*).*)"],
// };


// temp middleware implementation
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

  // Extraer el idioma de la ruta
  const localeRegex = /^\/(en|de|es|fr|zh|hi|ja|ru|pt)/;
  const match = pathnameOficial.match(localeRegex);
  const locale = match ? match[1] : defaultLocale;

  const accountRegex = new RegExp(`^/(${locales.join('|')})/account$`);
  const loginRegex = new RegExp(`^/(${locales.join('|')})/auth/login$`);
  const registerRegex = new RegExp(`^/(${locales.join('|')})/auth/register$`);

  if (accountRegex.test(pathnameOficial)) {
    // Ruta: /account
    const cookieToken = request.cookies.get('x-token');
    const loginRedirectURL = new URL(`/${locale}/auth/login`, request.url);

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
    } catch (error) {
      response = NextResponse.redirect(loginRedirectURL);
      clearCookies(response);
      return response;
    }
  }

  if (loginRegex.test(pathnameOficial) || registerRegex.test(pathnameOficial)) {
    // Rutas: /auth/login o /auth/register
    const accountRedirectURL = new URL(`/${locale}/account`, request.url);
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
  response.cookies.delete({ name: 'plan-type', path: '/' });
  response.cookies.delete({ name: 'credits', path: '/' });
  response.cookies.delete({ name: 'summaries-language', path: '/' });
}

function setAuthCookies(response: NextResponse, jsonresponse: any) {
  response.cookies.set('x-token', jsonresponse.token, {
    path: '/',
    maxAge: 60 * 60 * 12,
    httpOnly: false, // Permitir acceso desde JavaScript del cliente
  });
  // ... resto de las cookies
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
