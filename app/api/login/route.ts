// app/api/login/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/generated/prisma';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    // Fetch the user from the database
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user || user.password !== password) {
      return NextResponse.json(
        { success: false, error: 'Invalid username or password' },
        { status: 401 }
      );
    }

    // Role and redirection (for demo, based on hardcoded usernames)
    let redirectPath = '/';
    if (user.username === 'dorm_admin') redirectPath = '/dashboard/dormitory';
    else if (user.username === 'complain_admin') redirectPath = '/dashboard/complain';
    else if (user.username === 'academic_admin') redirectPath = '/dashboard/academic';
    else if (user.username === 'super_admin') redirectPath = '/dashboard/all';
    else redirectPath = '/';
 // fallback/student

    // Optionally: set a session cookie here if needed

    return NextResponse.json({ success: true, redirectPath });
  } catch (error) {
    console.error('Login failed:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
