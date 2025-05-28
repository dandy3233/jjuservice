'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function DormitoryDashboard() {
  const [reports, setReports] = useState<any[]>([]);
  const [filteredReports, setFilteredReports] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const reportRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchReports() {
      try {
        const res = await fetch('/api/reports');
        if (!res.ok) throw new Error('Failed to fetch reports');
        const data = await res.json();
        setReports(data);
        setFilteredReports(data);
      } catch (err) {
        console.error(err);
        alert('Failed to load reports.');
      } finally {
        setLoading(false);
      }
    }

    fetchReports();
  }, []);

  // Automatically filter when dates or data change
  useEffect(() => {
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;

    if (to) {
      to.setHours(23, 59, 59, 999); // Include full end day
    }

    const filtered = reports.filter((r) => {
      const submissionDate = new Date(r.submission_date);
      if (from && submissionDate < from) return false;
      if (to && submissionDate > to) return false;
      return true;
    });

    setFilteredReports(filtered);
  }, [fromDate, toDate, reports]);

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
    pdf.save('Dormitory_Reports.pdf');
  };
   
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

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        {/* Header */}
        <div style={headerSectionStyle}>
          <h1 style={titleStyle}>Dormitory Reports Dashboard</h1>
          <div style={filtersContainerStyle}>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              style={inputStyle}
            />
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              style={inputStyle}
            />
            <button onClick={handleDownloadPDF} style={pdfButtonStyle}>
              Download PDF
            </button>
          </div>
        </div>

        {/* Table */}
        <div ref={reportRef} style={reportBoxStyle}>
          {loading ? (
            <p style={loadingTextStyle}>Loading...</p>
          ) : filteredReports.length === 0 ? (
            <p style={noDataTextStyle}>No reports found for the selected dates.</p>
          ) : (
            <table style={tableStyle}>
              <thead>
                <tr style={tableHeaderRowStyle}>
                  <th style={tableHeaderStyle}>Block No</th>
                  <th style={tableHeaderStyle}>Dorm No</th>
                  <th style={tableHeaderStyle}>Problem Type</th>
                  <th style={tableHeaderStyle}>Description</th>
                  <th style={tableHeaderStyle}>Submission Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredReports.map((r) => (
                  <tr key={r.id} style={tableRowStyle}>
                    <td style={tableCellStyle}>{r.block_no}</td>
                    <td style={tableCellStyle}>{r.dorm_no}</td>
                    <td style={tableCellStyle}>{r.problem_type}</td>
                    <td style={tableCellStyle}>{r.problem_description}</td>
                    <td style={tableCellStyle}>
                      {new Date(r.submission_date).toLocaleDateString()}
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

// === Styles ===
const pageStyle: React.CSSProperties = {
  minHeight: '100vh',
  background: 'linear-gradient(to bottom right, #f0fdf4, #ffffff)',
  padding: '2rem',
  fontFamily: 'sans-serif',
  color: '#1f2937',
};

const containerStyle: React.CSSProperties = {
  maxWidth: '1100px',
  margin: '0 auto',
};

const headerSectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '2rem',
};

const titleStyle: React.CSSProperties = {
  fontSize: '2.5rem',
  fontWeight: 800,
  color: '#10B981',
  marginBottom: '1rem',
  textAlign: 'center',
};

const filtersContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.75rem',
  justifyContent: 'center',
};

const inputStyle: React.CSSProperties = {
  border: '1px solid #34d399',
  padding: '0.5rem 0.75rem',
  borderRadius: '8px',
  fontSize: '1rem',
};

const filterButtonStyle: React.CSSProperties = {
  backgroundColor: '#10B981',
  color: '#ffffff',
  padding: '0.5rem 1.25rem',
  borderRadius: '8px',
  fontWeight: 600,
  border: 'none',
  cursor: 'pointer',
};

const pdfButtonStyle: React.CSSProperties = {
  backgroundColor: '#059669',
  color: '#ffffff',
  padding: '0.5rem 1.25rem',
  borderRadius: '8px',
  fontWeight: 600,
  border: 'none',
  cursor: 'pointer',
};

const reportBoxStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  padding: '24px',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
  border: '1px solid #34d399',
  overflowX: 'auto',
};

const tableStyle: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
};

const tableHeaderRowStyle: React.CSSProperties = {
  backgroundColor: '#10B981',
  color: '#ffffff',
};

const tableHeaderStyle: React.CSSProperties = {
  padding: '14px 16px',
  textAlign: 'left',
  fontWeight: 700,
  borderBottom: '2px solid #059669',
};

const tableRowStyle: React.CSSProperties = {
  borderBottom: '1px solid #e5e7eb',
};

const tableCellStyle: React.CSSProperties = {
  padding: '12px 16px',
  textAlign: 'left',
  verticalAlign: 'top',
  fontSize: '1rem',
};

const loadingTextStyle: React.CSSProperties = {
  fontWeight: 600,
  color: '#6b7280',
  textAlign: 'center',
};

const noDataTextStyle: React.CSSProperties = {
  fontWeight: 600,
  color: '#b45309',
  textAlign: 'center',
};
