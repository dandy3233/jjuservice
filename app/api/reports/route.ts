// app/api/reports/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/generated/prisma'; // ✅ correct custom path


const prisma = new PrismaClient();

export async function GET() {
  try {
    const reports = await prisma.dormitory.findMany({
      orderBy: {
        submission_date: 'desc',
      },
    });
    return NextResponse.json(reports);
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: 'Failed to fetch reports' }), { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
