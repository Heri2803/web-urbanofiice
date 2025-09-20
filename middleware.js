import { NextResponse } from 'next/server';

export function middleware(req) {
  console.log('MIDDLEWARE JS VERSION:', req.nextUrl.pathname);
  
  if (req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};