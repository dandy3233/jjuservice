import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/generated/prisma';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { block_no, dorm_no, problem_type, problem } = body;

    // Basic validation
    if (!block_no || !dorm_no || !problem_type || !problem) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    // Create new dormitory report
    await prisma.dormitory.create({
      data: {
        block_no,
        dorm_no,
        problem_type,
        problem_description: problem,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving report:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
