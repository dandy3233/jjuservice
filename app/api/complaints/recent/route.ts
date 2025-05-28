import { NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const recentComplaints = await prisma.complaint.findMany({
      orderBy: { submission_date: 'desc' },
      take: 5,
      include: {
        user: true,
      },
    });

    return NextResponse.json(recentComplaints);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch recent complaints' }, { status: 500 });
  }
}
