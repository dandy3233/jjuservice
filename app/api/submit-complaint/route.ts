import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/generated/prisma';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { id_no, subject, complaint_text } = body;

    // Validate input
    if (!id_no || !subject || !complaint_text) {
      return NextResponse.json({ success: false, error: 'All fields are required.' }, { status: 400 });
    }

    // Save to database
    await prisma.complaint.create({
      data: {
        id_no,
        subject,
        complaint_text,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error submitting complaint:', error);
    return NextResponse.json({ success: false, error: 'Server error occurred.' }, { status: 500 });
  }
}
