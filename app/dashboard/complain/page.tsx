'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

type Complaint = {
  id_no: string;
  department: string;
  subject: string;
  complaint_text: string;
  submission_date: string;
  first_name: string;
  last_name: string;
};

export default function ComplaintDashboard() {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [filteredComplaints, setFilteredComplaints] = useState<Complaint[]>([]);
  const [loading, setLoading] = useState(true);
  const [notLoggedIn, setNotLoggedIn] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const reportRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchComplaints() {
      try {
        const res = await fetch('/api/complaints');
        if (res.status === 401) {
          setNotLoggedIn(true);
          return;
        }

        const data = await res.json();
        setComplaints(data);
        setFilteredComplaints(data);
      } catch (err) {
        console.error('Error fetching complaints:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchComplaints();
  }, []);

  const handleFilter = () => {
    if (!fromDate || !toDate) {
      alert('Please select both From and To dates.');
      return;
    }

    const from = new Date(fromDate);
    const to = new Date(toDate);
    to.setHours(23, 59, 59, 999);

    const filtered = complaints.filter((c) => {
      const date = new Date(c.submission_date);
      return date >= from && date <= to;
    });

    setFilteredComplaints(filtered);
  };

  const handleDownloadPDF = async () => {
    if (!reportRef.current) return;

    const canvas = await html2canvas(reportRef.current, {
      backgroundColor: '#ffffff',
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, imgHeight);
    pdf.save('Complaints_Report.pdf');
  };

  if (loading) return <div className="p-6">Loading...</div>;

  if (notLoggedIn) {
    return (
      <div className="p-6 text-center">
        <h1>You need to be logged in to view this page</h1>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-300">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
          Complaints Dashboard
        </h1>

        {/* Filter Section */}
        <div className="flex flex-wrap gap-3 items-center justify-center mb-6">
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="border border-green-400 px-3 py-2 rounded-md"
          />
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="border border-green-400 px-3 py-2 rounded-md"
          />
          <button
            onClick={handleFilter}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
          >
            Filter
          </button>
          <button
            onClick={handleDownloadPDF}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Download PDF
          </button>
        </div>

        {/* Go Back Button */}
        <div style={{ display: 'flex', justifyContent: 'end', marginTop: '1rem' }}>
          <button
            onClick={() => router.back()}
            style={{
              padding: '0.5rem 1.5rem',
              backgroundColor: '#059669',
              color: '#fff',
              fontWeight: 600,
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s',
            }}
          >
            ← Go Back
          </button>
        </div>

        {/* Table Section */}
        <div ref={reportRef} className="overflow-x-auto">
          {filteredComplaints.length === 0 ? (
            <p className="text-center text-yellow-600 font-semibold">
              No complaints found for selected dates.
            </p>
          ) : (
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
                {filteredComplaints.map((c, idx) => (
                  <tr key={idx} className="border hover:bg-gray-50">
                    <td className="p-2 border">{c.id_no}</td>
                    <td className="p-2 border">{`${c.first_name} ${c.last_name}`}</td>
                    <td className="p-2 border">{c.department}</td>
                    <td className="p-2 border">{c.subject}</td>
                    <td className="p-2 border">{c.complaint_text}</td>
                    <td className="p-2 border">
                      {new Date(c.submission_date).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
