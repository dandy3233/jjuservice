// app/api/complaints/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const complaints = await prisma.complaint.findMany({
      orderBy: {
        submission_date: 'desc',
      },
      include: {
        user: {
          select: {
            first_name: true,
            last_name: true,
          },
        },
      },
    });

    const formatted = complaints.map(c => ({
      id_no: c.id_no,
      department: c.department,
      subject: c.subject,
      complaint_text: c.complaint_text,
      submission_date: c.submission_date,
      first_name: c.user?.first_name || '',
      last_name: c.user?.last_name || '',
    }));

    return NextResponse.json(formatted, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch complaints:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Failed to fetch complaints' }),
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
