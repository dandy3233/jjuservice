"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [currentBg, setCurrentBg] = useState(0);
  
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
    <div className="relative flex items-center justify-center min-h-screen">
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

      {/* Main Content */}
      <div className="w-full max-w-3xl bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-8 border-2 border-green-500">
        {/* Logo Section */}
        <div className="flex justify-center mb-4">
          <img 
            src="/images/logo.png"
            alt="Report System Logo"
            className="h-40"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
          Report System
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Welcome to the Report System. Please choose an action below:
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          <Link
            href="/login"
            className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg transition duration-300 text-center"
          >
            Login
          </Link>

          <Link
            href="/dormitory-report"
            className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg transition duration-300 text-center"
          >
            Block Report
          </Link>

          <Link
            href="/academic-report"
            className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition duration-300 text-center"
          >
            Academic Reports
          </Link>

          <Link
            href="/complain"
            className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg transition duration-300 text-center"
          >
            Complain Reports
          </Link>
        </div>
      </div>
    </div>
  );
}