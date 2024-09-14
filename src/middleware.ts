import { NextResponse } from 'next/server';
import {NextRequest} from 'next/server';
import createMiddleware from 'next-intl/middleware';
import {pathnames, locales, localePrefix} from './config';


export function middleware(request: NextRequest) {


    // Store current request url in a custom header, which you can read later
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-url', request.url);
  
    let ip =  request.headers.get('x-real-ip')
    const forwardedFor = request.headers.get('x-forwarded-for')
    if(!ip && forwardedFor){
      ip = forwardedFor.split(',').at(0) ?? 'Unknown'
    }
  
  
  

      
  const res= NextResponse.next({
    request: {
      // Apply new request headers
      headers: requestHeaders,
    },
     });
 

  //return response;



  if(ip){
    res.cookies.set("user-ip", ip, {
     // httpOnly: false,
  });
}

//console.log(res);

return res;
//console.log(" ip address :"+ip);
}







export default createMiddleware({
  defaultLocale: 'en',
  locales:locales,
  pathnames,
  localePrefix
});

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(en|fr)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    //'/((?!_next|_vercel|.*\\..*).*)'

     // Skip all paths that should not be internationalized
  
    '/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest).*)',
  ],
  
};