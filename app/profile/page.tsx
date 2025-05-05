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
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem('userInfo');
      }
    } else {
      setTimeout(() => router.push('/login'), 500); // Delay before redirect
    }
  }, [router]);

  if (!mounted || !user) return null;

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4 py-10">
      <div className="bg-white overflow-hidden shadow rounded-lg border w-full max-w-3xl">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">User Profile</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">This is your profile information.</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full Name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.first_name} {user.last_name}
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">ID Number</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.id_no}</dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Department</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.department}</dd>
            </div>
            {user.isAdmin && (
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Role</dt>
                <dd className="mt-1 text-sm text-yellow-700 sm:mt-0 sm:col-span-2">Admin</dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </div>
  );
}
