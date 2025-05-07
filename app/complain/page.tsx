'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

export default function ComplaintFormPage() {
  const [idNo, setIdNo] = useState('');
  const [subject, setSubject] = useState('');
  const [complaintText, setComplaintText] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSuccess('');
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-complaint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_no: idNo, subject, complaint_text: complaintText }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess('Complaint submitted successfully!');
        setIdNo('');
        setSubject('');
        setComplaintText('');
        setTimeout(() => setSuccess(''), 5000);
      } else {
        setError(data.error || 'Error submitting complaint');
        setTimeout(() => setError(''), 5000);
      }
    } catch {
      setError('An unexpected error occurred.');
      setTimeout(() => setError(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 md:p-8 border-2 border-green-500 mt-16">
        <div className="mb-6 text-center">
          <Link href="/home" className="text-green-500 text-2xl font-bold hover:text-green-600">
            &larr; Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 mt-4">Complaint Form</h1>
          <p className="text-gray-600 mt-2">Let us know your concerns. Fill out the form below.</p>
        </div>

        {success && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
            {success}
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Student ID */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Student ID Number<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              value={idNo}
              onChange={(e) => setIdNo(e.target.value)}
              required
              placeholder="Example:  R/0000/00"
              className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Complaint Subject<span className="text-red-500 ml-1">*</span>
            </label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
            >
              <option value="">-- Select Subject --</option>
              <option value="Discipline">Discipline</option>
              <option value="Clinic">Clinic</option>
              <option value="Student Union">Student Union</option>
              <option value="Peace Form">Peace Form</option>
              <option value="Cafe">Cafe</option>
              <option value="Police">Police</option>
              <option value="Sport">Sport</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Complaint Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Complaint Details<span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              value={complaintText}
              onChange={(e) => setComplaintText(e.target.value)}
              rows={5}
              required
              placeholder="Describe your complaint in detail..."
              className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition ${
              isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Complaint'}
          </button>
        </form>
      </div>
    </div>
  );
}
