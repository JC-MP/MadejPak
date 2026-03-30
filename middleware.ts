import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware — ustawia nagłówek x-pathname używany przez root layout
 * do dynamicznego ustawienia atrybutu lang="pl" / lang="en".
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set('x-pathname', request.nextUrl.pathname);
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|.*\\..*).*)'],
};
