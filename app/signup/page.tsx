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
        username: formData.first_name, // use first_name as login username
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      alert('Sign up successful! Redirecting to login...');
      router.push('/login');
    } else {
      const data = await res.json();
      alert(data.error || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center text-green-700">Student Sign Up</h1>

        <input name="first_name" onChange={handleChange} placeholder="First Name" className="w-full p-2 border rounded" required />
        <input name="last_name" onChange={handleChange} placeholder="Last Name" className="w-full p-2 border rounded" required />
        <input name="id_no" onChange={handleChange} placeholder="ID Number" className="w-full p-2 border rounded" required />
        <input name="department" onChange={handleChange} placeholder="Department" className="w-full p-2 border rounded" required />
        <input name="password" onChange={handleChange} placeholder="Password" type="password" className="w-full p-2 border rounded" required />

        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
}
