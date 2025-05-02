import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { id_no, subject, complaint_text } = await req.json();

    // Find user by ID number
    const user = await db.user.findUnique({
      where: { id_no },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Create complaint and include user data in the response
    const complaint = await db.complaint.create({
      data: {
        id_no,
        subject,
        complaint_text,
        department: user.department,
        userId: user.id,
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

    return NextResponse.json({ success: true, complaint }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to submit complaint' }, { status: 500 });
  }
}
