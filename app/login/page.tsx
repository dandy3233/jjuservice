'use client'; // Enables hooks like useState and useRouter in this file

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect,  } from 'react';

export default function LoginPage() {
  const [currentBg, setCurrentBg] = useState(0);
  const router = useRouter();

  // State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');

  // Form submit handler
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.success && data.redirectPath) {
        router.push(data.redirectPath);
      } else {
        setError(data.error || 'Invalid credentials');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An unexpected error occurred');
    }
  };

  // Background images array (update paths to match your actual images)
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
      }, 5000); // Change background every 5 seconds
  
      return () => clearInterval(interval);
    }, [backgroundImages.length]);
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Background Images Container */}
      <div 
        className="fixed inset-0 -z-10 transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImages[currentBg]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.7,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="w-full max-w-md p-6 bg-white border-2 border-green-500 rounded-lg shadow-lg">
        {/* Logo Section */}
        <div className="flex justify-center mb-4">
          <img 
            src="/images/logo.png"
            alt="Report System Logo"
            className="h-30"
          />
        </div>

        <h1 className="text-4xl font-bold text-center text-green-700 mb-6">Login</h1>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-gray-700 mb-1">
              Username:
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-2 border-2 border-green-500 rounded focus:outline-none focus:border-green-700"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Password:
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border-2 border-green-500 rounded focus:outline-none focus:border-green-700"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition"
          >
            Login
          </button>
          <Link href="/signup" className="text-green-600 underline">
  Don’t have an account? Sign up here
</Link>

        </form>
      </div>
    </div>
  );
}
