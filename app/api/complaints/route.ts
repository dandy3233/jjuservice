import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth'; // adjust path if needed
import { db } from '@/lib/db'; // Correct import of db

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response(JSON.stringify({ error: 'User not authenticated' }), { status: 401 });
    }

    const department = session.user?.department;

    if (!department) {
      return new Response(JSON.stringify({ error: 'Department not found in session' }), { status: 400 });
    }

    const complaints = await db.complaint.findMany({
      where: { department },
      orderBy: {
        submission_date: 'desc',
      },
    });

    return new Response(JSON.stringify(complaints), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to fetch complaints' }), { status: 500 });
  }
}
