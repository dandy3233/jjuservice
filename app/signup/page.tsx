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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({
        ...formData,
        username: formData.first_name, // using first_name as username
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      alert('Sign up successful! Redirecting to login...');
      router.push('/ ');
    } else {
      const data = await res.json();
      alert(data.error || 'Something went wrong');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-green-50 overflow-hidden">
      {/* Optional: Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/images/bg1.jpg')`,
          opacity: 0.5,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border-2 border-green-600 backdrop-blur-md space-y-5"
      >
        <h1 className="text-3xl font-bold text-center text-green-700 mb-2">Student Sign Up</h1>
        <p className="text-sm text-gray-600 text-center mb-4">
          Create an account to submit reports and track progress
        </p>

        <input
          name="first_name"
          onChange={handleChange}
          placeholder="First Name"
          className="w-full p-3 rounded border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-600"
          required
        />
        <input
          name="last_name"
          onChange={handleChange}
          placeholder="Last Name"
          className="w-full p-3 rounded border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-600"
          required
        />
        <input
          name="id_no"
          onChange={handleChange}
          placeholder="ID Number"
          className="w-full p-3 rounded border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-600"
          required
        />
        <input
          name="department"
          onChange={handleChange}
          placeholder="Department"
          className="w-full p-3 rounded border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-600"
          required
        />
        <input
          name="password"
          onChange={handleChange}
          placeholder="Password"
          type="password"
          className="w-full p-3 rounded border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-600"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded transition duration-300"
        >
          Sign Up
        </button>

        <p className="text-sm text-center text-gray-600 mt-2">
          Already have an account?{' '}
          <a href="/ " className="text-green-700 hover:underline font-medium">
            Log in
          </a>
        </p>
      </form>
    </div>
  );
}
