import { db } from '@/lib/db';

export default async function ComplaintDashboard() {
  const [results] = await db.query(`
    SELECT 
      c.subject, c.complaint_text, c.submission_date,
      s.id_no, s.first_name, s.last_name, s.department
    FROM complaints c
    LEFT JOIN student_data s ON c.student_id = s.id
    ORDER BY c.submission_date DESC
  `);

  const complaints = results as any[];

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
                  <td className="p-2 border">{`${c.first_name}  ${c.last_name}`}</td>
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
