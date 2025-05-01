import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/generated/prisma';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { full_name, id_no, department, problem } = body;

    // Validation
    if (!full_name || !id_no || !department || !problem) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    // Save to database
    await prisma.academic.create({
      data: {
        full_name,
        id_no,
        department,
        problem_description: problem,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving academic report:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
