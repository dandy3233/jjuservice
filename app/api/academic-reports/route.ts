import { NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/generated/prisma'; // make sure this path matches your Prisma output

const prisma = new PrismaClient();

export async function GET() {
  try {
    const reports = await prisma.academic.findMany({
      orderBy: {
        submission_date: 'desc',
      },
    });

    return NextResponse.json(reports);
  } catch (error) {
    console.error('Failed to fetch academic reports:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Failed to fetch academic reports' }),
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
