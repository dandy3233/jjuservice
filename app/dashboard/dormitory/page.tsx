'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DormitoryDashboard() {
  const [reports, setReports] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch reports on component mount
  useEffect(() => {
    async function fetchReports() {
      try {
        const response = await fetch('/api/reports');
        if (!response.ok) {
          throw new Error(`Failed to fetch reports: ${response.statusText}`);
        }
        const data = await response.json();
        setReports(data);
      } catch (error) {
        console.error(error);
        alert("Error fetching reports: " + error.message);  // Display more specific error
      } finally {
        setLoading(false);
      }
    }
  
    fetchReports();
  }, []);
  

  const handleDelete = (id: number) => {
    if (!confirm('Are you sure?')) return;
    // Implement delete logic
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl font-bold mb-4 sm:mb-0">Dormitory Dashboard</h1>
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
                      <button
                        type="button"
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300"
                        onClick={() => handleDelete(r.id)}
                      >
                        Delete
                      </button>
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
