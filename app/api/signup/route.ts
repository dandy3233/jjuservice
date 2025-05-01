import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { first_name, last_name, id_no, department, password, username } = body;

    if (!first_name || !last_name || !id_no || !department || !password || !username) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const existingUser = await db.user.findUnique({
      where: { id_no },
    });

    if (existingUser) {
      return NextResponse.json({ error: 'User with this ID already exists' }, { status: 409 });
    }

    // Store plain password directly
    const newUser = await db.user.create({
      data: {
        first_name,
        last_name,
        id_no,
        department,
        username,
        password, // Store plain password directly here
      },
    });

    return NextResponse.json({ message: 'User created successfully', user: newUser }, { status: 201 });
  } catch (err) {
    console.error('Signup error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
