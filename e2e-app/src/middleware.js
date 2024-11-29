import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get('token');

  if (pathname.startsWith('/home')) {
    return NextResponse.redirect(new URL('/', req.url));
  }
  
  if (pathname.startsWith('/carts') && !token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  

  return NextResponse.next();
}

export const config = {
  matcher: ['/home:path*' ,'/carts:path*'],
};
