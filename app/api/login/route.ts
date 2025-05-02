// app/api/login/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/generated/prisma';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user || user.password !== password) {
      return NextResponse.json(
        { success: false, error: 'Invalid username or password' },
        { status: 401 }
      );
    }

    let redirectPath = '/';
    if (user.username === 'dorm_admin') redirectPath = '/dashboard/dormitory';
    else if (user.username === 'admin') redirectPath = '/dashboard/complain';
    else if (user.username === 'academic_admin') redirectPath = '/dashboard/academic';
    else if (user.username === 'super_admin') redirectPath = '/dashboard/all';
    else redirectPath = '/home';

    return NextResponse.json({
      success: true,
      redirectPath,
      user: {
        name: user.username,
        
        isAdmin: user.username === 'admin' || user.username === 'super_admin',
      },
    });
  } catch (error) {
    console.error('Login failed:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
