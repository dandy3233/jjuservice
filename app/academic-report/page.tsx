'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

export default function AcademicReportPage() {
  const [fullName, setFullName] = useState('');
  const [idNo, setIdNo] = useState('');
  const [department, setDepartment] = useState('');
  const [problem, setProblem] = useState('');
  const [success, setSuccess] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSuccess('');
    setErrors([]);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-academic-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ full_name: fullName, id_no: idNo, department, problem }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit the report');
      }

      if (data.success) {
        setSuccess('Report submitted successfully!');
        setFullName('');
        setIdNo('');
        setDepartment('');
        setProblem('');
        setTimeout(() => setSuccess(''), 5000);
      }
    } catch (error: any) {
      setErrors([error.message || 'An unexpected error occurred']);
      setTimeout(() => setErrors([]), 5000);
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
          <h1 className="text-3xl font-bold text-gray-800 mt-4">Academic Issue Report</h1>
          <p className="text-gray-600 mt-2">Please fill in the details of your academic issue</p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {success}
          </div>
        )}
        {/* Error Messages */}
        {errors.length > 0 && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {errors.map((error, index) => (
              <p key={index} className="mb-1 last:mb-0">⚠️ {error}</p>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
                placeholder="e.g. John Doe"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Student ID <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={idNo}
                onChange={(e) => setIdNo(e.target.value)}
                required
                className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
                placeholder="e.g. R/0000/00"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Department <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
              className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
              placeholder="e.g. Computer Science"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Issue Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
              placeholder="Describe the issue in detail..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition ${
              isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Report'}
          </button>
        </form>
      </div>
    </div>
  );
}
