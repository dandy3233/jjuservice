import { db } from '@/lib/db';
import Link from 'next/link';

export default async function AcademicReportsDashboard() {
  const [rows] = await db.query('SELECT * FROM areports ORDER BY submission_date DESC');
  const reports = rows as any[];

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Academic Reports Dashboard</h1>
          <Link href="/logout">
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300">
              Logout
            </button>
          </Link>
        </div>

        {reports.length > 0 ? (
          <div className="bg-white shadow-md rounded-lg overflow-x-auto">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="bg-green-500 text-white border-b-2 border-green-700">
                  <th className="p-3">Full Name</th>
                  <th className="p-3">ID No</th>
                  <th className="p-3">Department</th>
                  <th className="p-3">Problem Description</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((r) => (
                  <tr key={r.id} className="hover:bg-gray-50 border-b-2 border-gray-300">
                    <td className="p-3">{r.full_name}</td>
                    <td className="p-3">{r.id_no}</td>
                    <td className="p-3">{r.department}</td>
                    <td className="p-3 whitespace-pre-wrap">{r.problem_description}</td>
                    <td className="p-3">{new Date(r.submission_date).toLocaleDateString()}</td>
                    <td className="p-3">
                      <form action="/academic/api/delete" method="POST">
                        <input type="hidden" name="report_id" value={r.id} />
                        <button
                          type="submit"
                          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300"
                          onClick={(e) => {
                            if (!confirm('Are you sure you want to delete this report?')) e.preventDefault();
                          }}
                        >
                          Delete
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-4 bg-yellow-500 text-white text-center font-semibold rounded-lg">
            No reports found!
          </div>
        )}
      </div>
    </div>
  );
}
