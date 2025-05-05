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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        username: formData.first_name.toLowerCase(), // example
      }),
    });

    const data = await res.json();

    if (res.ok) {
      // Save user info to localStorage
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
      alert('Sign up successful!');
      router.push('/');
    } else {
      alert(data.error || 'Signup failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4 py-12">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-5 border border-green-600">
        <h1 className="text-2xl font-bold text-green-700 text-center">Student Sign Up</h1>
        <input name="first_name" onChange={handleChange} placeholder="First Name" className="input" required />
        <input name="last_name" onChange={handleChange} placeholder="Last Name" className="input" required />
        <input name="id_no" onChange={handleChange} placeholder="ID Number" className="input" required />
        <input name="department" onChange={handleChange} placeholder="Department" className="input" required />
        <input name="password" onChange={handleChange} placeholder="Password" type="password" className="input" required />

        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded transition">
          Sign Up
        </button>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{' '}
          <a href="/ " className="text-green-700 hover:underline">Log in</a>
        </p>
      </form>
    </div>
  );
}
