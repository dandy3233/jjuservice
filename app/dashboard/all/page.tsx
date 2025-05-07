'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Home, Building2, BookOpenText, Megaphone } from 'lucide-react';

export default function AllDashboardPage() {
  const backgroundImages = [
    '/images/bg1.jpg',
    '/images/bg2.jpg',
    '/images/bg3.jpg',
    '/images/bg4.jpg',
    '/images/bg5.jpg',
    '/images/bg6.jpg',
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-10 relative">
      {/* Background Layer */}
      <div
        className="absolute inset-0 -z-10 transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImages[currentBg]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.6,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Main Dashboard Container */}
      <div className="w-full max-w-6xl bg-white border-2 border-green-600 shadow-2xl rounded-2xl px-6 py-8 sm:px-10 sm:py-10 z-10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/logo.png"
            alt="University Logo"
            width={90}
            height={90}
            className="rounded-full object-contain"
          />
        </div>

        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-6 flex-wrap text-center">
          <Home className="text-green-700 w-8 h-8" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700">
            University Dashboard
          </h1>
        </div>

        <p className="text-center text-gray-600 mb-8 text-base sm:text-lg">
          Choose a report section to manage and review reports:
        </p>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Link
            href="/dashboard/dormitory"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-6 rounded-xl text-center transition duration-300 flex flex-col items-center"
          >
            <Building2 className="w-6 h-6 mb-2" />
            <span className="text-sm sm:text-base">Block Reports</span>
          </Link>
          <Link
            href="/dashboard/academic"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl text-center transition duration-300 flex flex-col items-center"
          >
            <BookOpenText className="w-6 h-6 mb-2" />
            <span className="text-sm sm:text-base">Academic Reports</span>
          </Link>

          <Link
            href="/dashboard/complain"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-xl text-center transition duration-300 flex flex-col items-center"
          >
            <Megaphone className="w-6 h-6 mb-2" />
            <span className="text-sm sm:text-base">Complain Reports</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
