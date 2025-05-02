// app/page.tsx or app/home/page.tsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Home, Building2, BookOpenText, Megaphone } from 'lucide-react';

export default function HomePage() {
  const [currentBg, setCurrentBg] = useState(0);

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
    <div className="relative flex items-center justify-center min-h-screen">
      {/* Background */}
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

      {/* Main Card */}
      <div className="w-full max-w-3xl bg-white/90 backdrop-blur-md border-2 border-green-600 rounded-2xl shadow-2xl p-8 z-10">
        <div className="flex justify-center mb-6">
          <img src="/images/logo.png" alt="Report System Logo" className="h-28" />
        </div>

        <div className="flex items-center justify-center gap-2 mb-6">
          <Home className="text-green-700 w-8 h-8" />
          <h1 className="text-4xl font-extrabold text-green-700 text-center">
            Report System
          </h1>
        </div>

        <p className="text-center text-gray-600 mb-10 text-lg">
          Welcome to the Report System. Please choose an action below:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/dormitory-report" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-4 rounded-xl text-center transition duration-300 flex flex-col items-center">
            <Building2 className="w-6 h-6 mb-1" />
            Block Report
          </Link>

          <Link href="/academic-report" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-4 rounded-xl text-center transition duration-300 flex flex-col items-center">
            <BookOpenText className="w-6 h-6 mb-1" />
            Academic Reports
          </Link>

          <Link href="/complain" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-4 rounded-xl text-center transition duration-300 flex flex-col items-center">
            <Megaphone className="w-6 h-6 mb-1" />
            Complain Reports
          </Link>
        </div>
      </div>
    </div>
  );
}
