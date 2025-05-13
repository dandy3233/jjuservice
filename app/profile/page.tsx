'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type UserInfo = {
  first_name: string;
  last_name: string;
  id_no: string;
  department: string;
  isAdmin?: boolean;
};

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<UserInfo | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('userInfo');

    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setUser(parsed);
      } catch {
        localStorage.removeItem('userInfo');
      }
    } else {
      setTimeout(() => router.push('/login'), 500);
    }
  }, [router]);

  if (!mounted) return null;

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-100 to-green-200 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-xl shadow-2xl border border-green-300 w-full max-w-3xl relative">
        {/* Circular Image */}
        <img
          src="/images/logo.png" // <-- Replace with actual image path if needed
          alt="User"
          className="absolute top-6 right-6 w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
        />

        <div className="px-6 py-8 sm:px-8">
          <h2 className="text-2xl font-bold text-green-700 mb-2">User Profile</h2>
          <p className="text-sm text-gray-500 mb-6">Here are your profile details:</p>

          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-gray-500 font-medium">Full Name</div>
              <div className="col-span-2 text-gray-900">
                {user.first_name} {user.last_name}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-gray-500 font-medium">ID Number</div>
              <div className="col-span-2 text-gray-900">{user.id_no}</div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-gray-500 font-medium">Department</div>
              <div className="col-span-2 text-gray-900">{user.department}</div>
            </div>

            {user.isAdmin && (
              <div className="grid grid-cols-3 gap-4">
                <div className="text-gray-500 font-medium">Role</div>
                <div className="col-span-2 text-yellow-700 font-semibold">Admin</div>
              </div>
            )}
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={() => router.push('/home')}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-sm transition duration-300"
            >
              ← Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
