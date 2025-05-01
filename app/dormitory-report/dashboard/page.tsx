import { db } from '@/lib/db';
import Link from 'next/link';

export default async function ReportsDashboard() {
  const [results] = await db.query('SELECT * FROM reports ORDER BY submission_date DESC');
  const reports = results as any[];

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl font-bold mb-4 sm:mb-0">dormitory Dashboard</h1>
          <Link href="/logout">
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300">
              Logout
            </button>
          </Link>
        </div>

        <div className="mb-4">
          <a href="/download_pdf" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300">
            Download PDF
          </a>
        </div>

        {reports.length > 0 ? (
          <div className="bg-white shadow-md rounded-lg overflow-x-auto">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="bg-green-500 text-white border-b-2 border-green-700">
                  <th className="p-3">Block</th>
                  <th className="p-3">Dorm</th>
                  <th className="p-3">Problem Type</th>
                  <th className="p-3">Description</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((r) => (
                  <tr key={r.id} className="hover:bg-gray-50 border-b-2 border-gray-300">
                    <td className="p-3">{r.block_no}</td>
                    <td className="p-3">{r.dorm_no}</td>
                    <td className="p-3">{r.problem_type}</td>
                    <td className="p-3 whitespace-pre-wrap">{r.problem_description}</td>
                    <td className="p-3">{new Date(r.submission_date).toLocaleDateString()}</td>
                    <td className="p-3">
                      <form action="/reports/api/delete" method="POST">
                        <input type="hidden" name="report_id" value={r.id} />
                        <button
                          type="submit"
                          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300"
                          onClick={(e) => {
                            if (!confirm('Are you sure?')) e.preventDefault();
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
