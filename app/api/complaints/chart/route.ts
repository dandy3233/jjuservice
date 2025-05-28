import { NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/generated/prisma'; // Adjust if different

const prisma = new PrismaClient();
export async function GET() {
  try {
    const complaints = await prisma.complaint.groupBy({
      by: ['submission_date'],
      _count: true,
    });

    // Aggregate by month
    const countsByMonth: Record<string, number> = {};

    complaints.forEach((entry) => {
      const month = new Date(entry.submission_date).toLocaleString('default', {
        month: 'short',
        year: 'numeric',
      });

      if (!countsByMonth[month]) {
        countsByMonth[month] = 0;
      }

      countsByMonth[month] += entry._count;
    });

    return NextResponse.json(countsByMonth);
  } catch (error) {
    console.error('Error fetching complaint chart data:', error);
    return NextResponse.json({ error: 'Error fetching chart data' }, { status: 500 });
  }
}
