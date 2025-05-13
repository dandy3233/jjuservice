'use client';

import { useEffect, useState, useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function AcademicReportsDashboard() {
  const [reports, setReports] = useState<any[]>([]);
  const [filteredReports, setFilteredReports] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const reportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchReports() {
      try {
        const res = await fetch('/api/academic-reports');
        if (!res.ok) throw new Error('Failed to fetch academic reports');
        const data = await res.json();
        setReports(data);
        setFilteredReports(data);
      } catch (err) {
        console.error(err);
        alert('Error loading reports');
      } finally {
        setLoading(false);
      }
    }
    fetchReports();
  }, []);

  useEffect(() => {
    const from = dateFrom ? new Date(dateFrom) : null;
    const to = dateTo ? new Date(dateTo) : null;

    const filtered = reports.filter((r) => {
      const submissionDate = new Date(r.submission_date);
      if (from && submissionDate < from) return false;
      if (to && submissionDate > to) return false;
      return true;
    });

    setFilteredReports(filtered);
  }, [dateFrom, dateTo, reports]);

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
    pdf.save('Academic_Reports.pdf');
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        {/* Header */}
        <div style={headerSectionStyle}>
          <h1 style={titleStyle}>Academic Reports Dashboard</h1>
          <div style={filtersContainerStyle}>
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              style={inputStyle}
            />
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              style={inputStyle}
            />
            <button onClick={handleDownloadPDF} style={pdfButtonStyle}>
              Download PDF
            </button>
          </div>
        </div>

        {/* Report Table */}
        <div ref={reportRef} style={reportBoxStyle}>
          {loading ? (
            <p style={loadingTextStyle}>Loading...</p>
          ) : filteredReports.length === 0 ? (
            <p style={noDataTextStyle}>No reports found for selected dates.</p>
          ) : (
            <table style={tableStyle}>
              <thead>
                <tr style={tableHeaderRowStyle}>
                  <th style={tableHeaderStyle}>Full Name</th>
                  <th style={tableHeaderStyle}>ID No</th>
                  <th style={tableHeaderStyle}>Department</th>
                  <th style={tableHeaderStyle}>Problem</th>
                  <th style={tableHeaderStyle}>Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredReports.map((r) => (
                  <tr key={r.id} style={tableRowStyle}>
                    <td style={tableCellStyle}>{r.full_name}</td>
                    <td style={tableCellStyle}>{r.id_no}</td>
                    <td style={tableCellStyle}>{r.department}</td>
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
