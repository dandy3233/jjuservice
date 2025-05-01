'use client';

import { useState, FormEvent } from 'react';

export default function ComplaintFormPage() {
  const [idNo, setIdNo] = useState('');
  const [subject, setSubject] = useState('');
  const [complaintText, setComplaintText] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/submit-complaint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_no: idNo, subject, complaint_text: complaintText }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess('Complaint submitted successfully!');
        setError('');
        setIdNo('');
        setSubject('');
        setComplaintText('');
      } else {
        setError(data.error || 'Error submitting complaint');
        setSuccess('');
      }
    } catch (err) {
      console.error(err);
      setError('An unexpected error occurred.');
      setSuccess('');
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 border border-green-500">
        <h1 className="text-2xl font-semibold text-center text-green-700">Submit Your Complaint</h1>

        {success && (
          <div className="bg-green-100 text-green-700 p-3 border border-green-500 rounded-md mt-4 text-center">
            {success}
          </div>
        )}
        {error && (
          <div className="bg-red-100 text-red-700 p-3 border border-red-500 rounded-md mt-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          {/* Student ID Input */}
          <div>
            <label className="block text-green-700 font-medium">Student ID Number:</label>
            <input
              type="text"
              value={idNo}
              onChange={(e) => setIdNo(e.target.value)}
              required
              placeholder="Enter your Student ID"
              className="w-full px-4 py-2 border border-green-500 rounded focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Subject Dropdown */}
          <div>
            <label className="block text-green-700 font-medium">Subject:</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full px-4 py-2 border border-green-500 rounded focus:ring-2 focus:ring-green-500"
            >
              <option value="">-- Select Subject --</option>
              <option value="Discipline">Discipline</option>
              <option value="Clinic">Clinic</option>
              <option value="Student Union">Student Union</option>
              <option value="Peace Form">Peace Form</option>
              <option value="Cafe">Cafe</option>
              <option value="Police">Police</option>
              <option value="Sport">Sport</option>
            </select>
          </div>

          {/* Complaint Textarea */}
          <div>
            <label className="block text-green-700 font-medium">Your Complaint:</label>
            <textarea
              value={complaintText}
              onChange={(e) => setComplaintText(e.target.value)}
              rows={5}
              required
              className="w-full px-4 py-2 border border-green-500 rounded focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition duration-300 border border-green-700"
          >
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
}
