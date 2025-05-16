
import { type NextRequest } from 'next/server';
import { updateSession } from './lib/middleware';

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/summaryAI/upload-pdf',
    '/summaryAI/:path*',
  ],
};
