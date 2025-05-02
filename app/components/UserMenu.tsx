'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faUser,
  faSignOutAlt,
  faSignInAlt,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

export default function UserMenu() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<null | {
    name: string;
    isAdmin: boolean;
  }>(null);

  useEffect(() => {
    const stored = localStorage.getItem('userInfo');
    if (stored) setUserInfo(JSON.parse(stored));
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    setUserInfo(null);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center space-x-4 relative">
        <div className="relative group">
          <button
            className="p-3 bg-green-500 hover:bg-gray-100 rounded-full transition-all"
            onClick={() => setMenuOpen(!isMenuOpen)}
            aria-label="User menu"
          >
            <FontAwesomeIcon
              icon={faUserCircle}
              className="w-8 h-8 text-gray-800 hover:text-green-700 transition-colors"
            />
            {userInfo?.isAdmin && (
              <span className="absolute top-0 right-0 bg-yellow-400 w-3 h-3 rounded-full border border-white" />
            )}
          </button>

          {isMenuOpen && (
            <div
              className="absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-black/5 py-2 z-50"
              onMouseLeave={() => setMenuOpen(false)}
            >
              {userInfo ? (
                <>
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-700">{userInfo.name}</p>
                    <p className="text-xs text-gray-500">{userInfo.name}</p>
                  </div>
                  <div className="p-2 space-y-1">
                    <Link
                      href="/profile"
                      className="flex items-center px-3 py-2 rounded-lg hover:bg-green-50 text-gray-700 transition-colors"
                    >
                      <FontAwesomeIcon icon={faUser} className="w-4 h-4 mr-3 text-green-500" />
                      Profile
                    </Link>
                  </div>
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
    </div>
  );
}
