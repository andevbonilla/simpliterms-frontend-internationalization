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

  switch (request.nextUrl.pathname) {

        case "/account": {

            const cookieToken = request.cookies.get('x-token');
            const redirectUrl = new URL('/auth/login', request.nextUrl);

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
                        
                        const response = NextResponse.next();
                        response.headers.set('X-Frame-Options', 'DENY');

                        
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
            }
            
        }
        case "/auth/login": {
            const redirectUrl = new URL('/account', request.url);
            const res = await validateIfAuthenticated(request);
            if (res) {
                const response = NextResponse.next();
                response.headers.set('X-Frame-Options', 'DENY');
                return response;
            }else{
                return NextResponse.redirect(redirectUrl);
            }
        }
        case "/auth/register": {
            const redirectUrl = new URL('/account', request.url);
            const res = await validateIfAuthenticated(request);
            if (res) {
                const response = NextResponse.next();
                response.headers.set('X-Frame-Options', 'DENY');
                return response;
            }else{
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
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en)/:path*']
};