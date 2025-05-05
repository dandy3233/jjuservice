'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [currentBg, setCurrentBg] = useState(0); // ✅ fix added

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
      setError(data.error);
    }
  };

  const backgroundImages = [
    '/images/bg1.jpg',
    '/images/bg2.jpg',
    '/images/bg3.jpg',
    '/images/bg4.jpg',
    '/images/bg5.jpg',
    '/images/bg6.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${backgroundImages[currentBg]})`,
          opacity: 0.6,
          zIndex: -1,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="z-10 w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border-2 border-green-600 backdrop-blur-md">
        <div className="flex justify-center mb-6">
          <img src="/images/logo.png" alt="Report System Logo" className="h-20 object-contain" />
        </div>

        <h2 className="text-3xl font-extrabold text-green-700 text-center mb-6">
          Login to Your Account
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 border border-red-400 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-3 rounded-lg border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 rounded-lg border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <Link href="/signup" className="text-green-700 hover:underline">Sign up here</Link>
        </div>
      </div>
    </div>
  );
}
