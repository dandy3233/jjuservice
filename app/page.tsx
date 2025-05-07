'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// ✅ Move this array outside the component
const backgroundImages = [
  '/images/bg1.jpg',
  '/images/bg2.jpg',
  '/images/bg3.jpg',
  '/images/bg4.jpg',
  '/images/bg5.jpg',
  '/images/bg6.jpg',
];

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [currentBg, setCurrentBg] = useState(0);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem('userInfo', JSON.stringify(data.user));
      router.push(data.redirectPath);
    } else {
      setError(data.error || 'Login failed');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []); // ✅ No warning now!

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${backgroundImages[currentBg]})`,
          opacity: 0.4,
          zIndex: -2,
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-[-1]" />

      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border-2 border-green-600">
        <div className="flex justify-center mb-6">
          <img src="/images/logo.png" alt="Report System Logo" className="h-20" />
        </div>

        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Login to Your Account
        </h2>

        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 border border-red-400 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-3 border-2 border-green-500 rounded-lg focus:ring-2 focus:ring-green-300 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border-2 border-green-500 rounded-lg focus:ring-2 focus:ring-green-300 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-700">
          Don’t have an account?{' '}
          <Link href="/signup" className="text-green-700 font-semibold hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}
