'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    id_no: '',
    department: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          username: formData.first_name.toLowerCase(),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem(
          'userInfo',
          JSON.stringify({
            first_name: formData.first_name,
            last_name: formData.last_name,
            id_no: formData.id_no,
            department: formData.department,
            isAdmin: false,
          })
        );
        router.push('/');
      } else {
        setError(data.error || 'Signup failed');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-6">
      <div className="w-full max-w-lg bg-white border-2 border-green-500 shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-6">Student Sign Up</h1>

        {error && (
          <div className="mb-4 p-4 text-red-700 bg-red-100 border border-red-400 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-medium text-gray-700 mb-1">First Name</label>
            <input
              name="first_name"
              type="text"
              onChange={handleChange}
              value={formData.first_name}
              required
              placeholder="e.g. John"
              className="w-full border-2 border-green-200 rounded-lg p-2 focus:ring-2 focus:ring-green-300 focus:border-green-500 outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Last Name</label>
            <input
              name="last_name"
              type="text"
              onChange={handleChange}
              value={formData.last_name}
              required
              placeholder="e.g. Doe"
              className="w-full border-2 border-green-200 rounded-lg p-2 focus:ring-2 focus:ring-green-300 focus:border-green-500 outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">ID Number</label>
            <input
              name="id_no"
              type="text"
              onChange={handleChange}
              value={formData.id_no}
              required
              placeholder="e.g. R/0000/00"
              className="w-full border-2 border-green-200 rounded-lg p-2 focus:ring-2 focus:ring-green-300 focus:border-green-500 outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Department</label>
            <input
              name="department"
              type="text"
              onChange={handleChange}
              value={formData.department}
              required
              placeholder="e.g. Computer Science"
              className="w-full border-2 border-green-200 rounded-lg p-2 focus:ring-2 focus:ring-green-300 focus:border-green-500 outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Password</label>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              value={formData.password}
              required
              placeholder="Choose a  password"
              className="w-full border-2 border-green-200 rounded-lg p-2 focus:ring-2 focus:ring-green-300 focus:border-green-500 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-lg font-semibold text-white transition ${
              isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {isSubmitting ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <a href="/ " className="text-green-700 font-semibold hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
}
