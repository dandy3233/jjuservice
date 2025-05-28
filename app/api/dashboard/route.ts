import { NextResponse } from 'next/server';
import { PrismaClient } from '@/lib/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const totalDormitory = await prisma.dormitory.count();
    const totalAcademic = await prisma.academic.count();
    const totalComplaints = await prisma.complaint.count();

    return NextResponse.json({ totalDormitory, totalAcademic, totalComplaints });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch counts' }, { status: 500 });
  }
}
