// app/complaints/dashboard.tsx
import { db } from '@/lib/db';
import { getSession } from 'next-auth/react';


interface Complaint {
  id_no: string;
  first_name: string;
  last_name: string;
  department: string;
  subject: string;
  complaint_text: string;
  submission_date: string;
}

export default async function ComplaintDashboard() {
  // Get the session (logged-in user data)
  const session = await getSession();

  if (!session) {
    // Redirect to login if user is not authenticated
    return (
      <div className="p-6 text-center">
        <h1>You need to be logged in to view this page</h1>
      </div>
    );
  }

  // Fetch complaints from the API for the logged-in user's department
  const response = await fetch('/api/complaints');
  const complaints: Complaint[] = await response.json();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-300">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-4">Complaints Dashboard</h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-green-500 text-white">
              <tr>
                <th className="p-2 border">ID.No</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Department</th>
                <th className="p-2 border">Subject</th>
                <th className="p-2 border">Complaint</th>
                <th className="p-2 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((c, idx) => (
                <tr key={idx} className="border hover:bg-gray-100">
                  <td className="p-2 border">{c.id_no}</td>
                  <td className="p-2 border">{`${c.first_name} ${c.last_name}`}</td>
                  <td className="p-2 border">{c.department}</td>
                  <td className="p-2 border">{c.subject}</td>
                  <td className="p-2 border">{c.complaint_text}</td>
                  <td className="p-2 border">{new Date(c.submission_date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
