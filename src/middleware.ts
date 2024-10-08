import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from "next/server";
import { backendUri } from "./helpers/url";
import { validateIfAuthenticated } from "./helpers/middlewareFunctions";
 
export default async function middleware(request: NextRequest) {

  const clearCookies = (request:NextRequest) => {
    request.cookies.delete("x-token");
    request.cookies.delete("uid");
    request.cookies.delete("email");
    request.cookies.delete("username");
    request.cookies.delete("plan-type");
    request.cookies.delete("credits");
    request.cookies.delete("summaries-language");
  }

  const responseWithI18n = (request: NextRequest) => {

    const defaultLocale = 'en';  

    // Create and call the next-intl middleware (example)
    const handleI18nRouting = createMiddleware({
      locales: ['en', 'de', "es", "fr", "zh", "hi", "ja", "ru", "pt"],
      defaultLocale
    });

    const response = handleI18nRouting(request);

    // set custom headers
    response.headers.set('X-Frame-Options', 'DENY');
  
    return response;

  };

  const pathnameOficial = request.nextUrl.pathname;
  const accountRegex = /^\/(en|de|es|fr|zh|hi|ja|ru|pt)\/account$/;
  const loginRegex = /^\/(en|de|es|fr|zh|hi|ja|ru|pt)\/auth\/login$/;
  const registerRegex = /^\/(en|de|es|fr|zh|hi|ja|ru|pt)\/auth\/register$/;

  if (accountRegex.test(pathnameOficial)) {

    // in in: /account route
    const cookieToken = request.cookies.get('x-token');
    const redirectUrl = new URL('/es/auth/login', request.nextUrl);

    if (!cookieToken) {
        return NextResponse.redirect(redirectUrl);
    }

    try {
      
        const response = await fetch(`${backendUri}/api/auth/renew-token`, {
                                        method: 'GET',
                                        headers: {
                                            'Authorization': `Bearer ${cookieToken.value}`
                                        },
                                    })
        if (!response.ok) {
            clearCookies(request);
            return NextResponse.redirect(redirectUrl);
        }

        try {

          const jsonresponse = await response.json();

          if (!jsonresponse.token) {

              clearCookies(request);
              return NextResponse.redirect(redirectUrl);

          }else{
                        
              const response = responseWithI18n(request);
              response.cookies.set('x-token', jsonresponse.token, {path: '/', maxAge: 60 * 60 * 12});
              response.cookies.set('uid', jsonresponse.user.uid.toString(), {path: '/', maxAge: 60 * 60 * 12});
              response.cookies.set('email', jsonresponse.user.email.toString(), {path: '/', maxAge: 60 * 60 * 12});
              response.cookies.set('username', jsonresponse.user.username.toString(), {path: '/', maxAge: 60 * 60 * 12});
              response.cookies.set('plan-type', jsonresponse.user.planType.toString(), {path: '/', maxAge: 60 * 60 * 12});
              response.cookies.set('credits', jsonresponse.user.credits.toString(), {path: '/', maxAge: 60 * 60 * 12});
              response.cookies.set('summaries-language', jsonresponse.user.summariesLanguage.toString(), {path: '/', maxAge: 60 * 60 * 12});
              return response;

          }
                    
          } catch (error) {
              clearCookies(request);
              return NextResponse.redirect(redirectUrl);
          }    
                
                
      } catch (error) {
          clearCookies(request);
          return NextResponse.redirect(redirectUrl);
      };

  };

  if (loginRegex.test(pathnameOficial)) {
      // in in: /auth/login route
      const redirectUrl = new URL('/es/account', request.url);
      const res = await validateIfAuthenticated(request);
      if (res) {
          return responseWithI18n(request);
      }else{
          return NextResponse.redirect(redirectUrl);
      };
  };

  if (registerRegex.test(pathnameOficial)) {
      // in in: /auth/register route
      const redirectUrl = new URL('/es/account', request.url);
      const res = await validateIfAuthenticated(request);
      if (res) {
          return responseWithI18n(request);
      }else{
          return NextResponse.redirect(redirectUrl);
      };
  };

  return responseWithI18n(request);
  
}
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|.*\\..*).*)']
};