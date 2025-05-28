'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faUser,
  faSignOutAlt,
  faSignInAlt,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

interface UserInfo {
  name: string;
  isAdmin: boolean;
}

export default function UserMenu() {
  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const loadUserInfo = () => {
      const stored = localStorage.getItem('userInfo');
      if (stored) {
        try {
          setUserInfo(JSON.parse(stored));
        } catch {
          localStorage.removeItem('userInfo');
          setUserInfo(null);
        }
      } else {
        setUserInfo(null);
      }
    };

    loadUserInfo();

    const handleStorage = (event: StorageEvent) => {
      if (event.key === 'userInfo') {
        loadUserInfo();
      }
    };

    const interval = setInterval(() => {
      loadUserInfo();
    }, 5000);

    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
      clearInterval(interval);
    };
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    setUserInfo(null);
    router.push('/');
  };

  if (!mounted) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        <button
          className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition"
          onClick={() => setMenuOpen(!isMenuOpen)}
          aria-label="User menu"
        >
          <FontAwesomeIcon icon={faUserCircle} className="text-3xl text-gray-800" />
          {userInfo?.isAdmin && (
            <span className="absolute top-0 right-0 bg-yellow-400 w-3 h-3 rounded-full border border-white" />
          )}
        </button>

        {isMenuOpen && (
          <div
            className="absolute right-0 mt-2 w-64 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl ring-1 ring-black/10 py-3 z-50 animate-fade-in"
            onMouseLeave={() => setMenuOpen(false)}
          >
            {userInfo ? (
              <>
                {/* ✨ Enhanced User Info Block */}
                <div className="px-4 pb-3 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/17003/17003310.png"
                      alt="Admin"
                      width={40}
                      height={40}
                      className="rounded-full border shadow"
                    />
                    <div>
                      <p className="text-gray-800 text-base font-semibold tracking-wide">
                        {userInfo.name}
                      </p>
                      <p className="text-green-700 text-sm opacity-85">
                        {userInfo.isAdmin ? 'Administrator' : 'User'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="p-2 space-y-1">
                  <Link
                    href="/profile"
                    className="flex items-center px-3 py-2 rounded-lg hover:bg-green-50 text-gray-700 transition-colors"
                  >
                    <FontAwesomeIcon icon={faUser} className="w-4 h-4 mr-3 text-green-500" />
                    Profile
                  </Link>
                </div>

                {/* Logout */}
                <div className="p-2 pt-1 border-t border-gray-100">
                  <button
                    onClick={logoutHandler}
                    className="w-full flex items-center px-3 py-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} className="w-4 h-4 mr-3" />
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className="p-2 space-y-2">
                <Link
                  href="/"
                  className="flex items-center justify-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                >
                  <FontAwesomeIcon icon={faSignInAlt} className="w-4 h-4 mr-2" />
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="flex items-center justify-center px-4 py-2 border border-gray-300 hover:border-green-500 text-gray-700 hover:text-green-600 rounded-lg transition-colors"
                >
                  <FontAwesomeIcon icon={faUserPlus} className="w-4 h-4 mr-2" />
                  Register
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
