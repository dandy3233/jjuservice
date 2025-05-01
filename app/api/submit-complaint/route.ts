import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth'; // Correct path to your authOptions
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    // Get the session from NextAuth.js
    const session = await getServerSession(authOptions);

    if (!session) {
      // If no session exists, return an error
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    // Extract data from the request body
    const { id_no, subject, complaint_text } = await req.json();

    // Get the user's department from the session
    const department = session.user?.department;

    if (!id_no || !subject || !complaint_text || !department) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create the complaint in the database
    const complaint = await db.complaint.create({
      data: {
        id_no,
        subject,
        complaint_text,
        department,
      },
    });

    return NextResponse.json(complaint, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to submit complaint' }, { status: 500 });
  }
}
