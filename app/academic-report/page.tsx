'use client';

import { useState, FormEvent } from 'react';

export default function AcademicReportPage() {
  const [fullName, setFullName] = useState('');
  const [idNo, setIdNo] = useState('');
  const [department, setDepartment] = useState('');
  const [problem, setProblem] = useState('');
  const [success, setSuccess] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSuccess('');
    setErrors([]);

    try {
      const response = await fetch('/api/submit-academic-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ full_name: fullName, id_no: idNo, department, problem }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess('Report submitted successfully!');
        setFullName('');
        setIdNo('');
        setDepartment('');
        setProblem('');
      } else {
        setErrors([data.error || 'Failed to submit the report']);
      }
    } catch (error) {
      console.error(error);
      setErrors(['An unexpected error occurred.']);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6 border-2 border-green-500">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Submit Academic Report</h1>

        {success && (
          <div className="p-3 mb-4 text-white bg-green-500 border border-green-700 rounded-lg text-center">
            {success}
          </div>
        )}

        {errors.length > 0 && (
          <div className="p-3 mb-4 text-white bg-red-500 border border-red-700 rounded-lg">
            {errors.map((err, idx) => (
              <p key={idx}>{err}</p>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold">Full Name:</label>
            <input
              type="text"
              name="full_name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full border-2 border-green-500 rounded-lg p-2 focus:ring focus:ring-green-300 focus:border-green-700"
            />
          </div>
          <div>
            <label className="block font-semibold">ID No:</label>
            <input
              type="text"
              name="id_no"
              value={idNo}
              onChange={(e) => setIdNo(e.target.value)}
              required
              className="w-full border-2 border-green-500 rounded-lg p-2 focus:ring focus:ring-green-300 focus:border-green-700"
            />
          </div>
          <div>
            <label className="block font-semibold">Department:</label>
            <input
              type="text"
              name="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
              className="w-full border-2 border-green-500 rounded-lg p-2 focus:ring focus:ring-green-300 focus:border-green-700"
            />
          </div>
          <div>
            <label className="block font-semibold">Problem Description:</label>
            <textarea
              name="problem"
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              rows={4}
              required
              className="w-full border-2 border-green-500 rounded-lg p-2 focus:ring focus:ring-green-300 focus:border-green-700"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition duration-300"
          >
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
}
