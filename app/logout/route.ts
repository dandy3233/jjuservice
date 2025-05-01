import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  return NextResponse.redirect(new URL('/', baseUrl), {
    headers: {
      'Set-Cookie': 'session=; Max-Age=0; Path=/; HttpOnly;',
    },
  });
}
