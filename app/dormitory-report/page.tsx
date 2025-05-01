'use client';

import { useState, FormEvent, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserCircle, 
  faUser, 
  faUsers,
  faBox, 
  faClipboardList,
  faSignOutAlt,
  faSignInAlt,
  faUserPlus,
  faTruck
} from '@fortawesome/free-solid-svg-icons';

interface UserInfo {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

export default function DormitoryReportPage() {
  // Form states
  const [blockNo, setBlockNo] = useState('');
  const [dormNo, setDormNo] = useState('');
  const [problemType, setProblemType] = useState('All');
  const [problemDescription, setProblemDescription] = useState('');
  const [success, setSuccess] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Profile states
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  // Simulate user authentication
  useEffect(() => {
    // Replace with actual authentication check
    const fetchUser = async () => {
      // Example user data - replace with real API call
      const fakeUser = {
        id: "user-123",
        name: "John Doe",
        email: "john@example.com",
        isAdmin: true
      };
      setUserInfo(fakeUser);
    };
    
    fetchUser();
  }, []);

  const logoutHandler = () => {
    // Add actual logout logic
    setUserInfo(null);
    setMenuOpen(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSuccess('');
    setErrors([]);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-dormitory-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          block_no: blockNo, 
          dorm_no: dormNo, 
          problem_type: problemType, 
          problem: problemDescription 
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit report');
      }

      if (data.success) {
        setSuccess('Report submitted successfully!');
        setBlockNo('');
        setDormNo('');
        setProblemType('All');
        setProblemDescription('');
        setTimeout(() => setSuccess(''), 5000);
      }
    } catch (error: any) {
      setErrors([error.message || 'An unexpected error occurred']);
      setTimeout(() => setErrors([]), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      {/* Profile Section */}
      <div className="fixed  top-4 right-4 z-50">
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
                <span className="absolute top-0 right-0 bg-yellow-400 w-3 h-3 rounded-full border border-white"></span>
              )}
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div 
                className="absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-black/5 py-2 z-50"
                onMouseLeave={() => setMenuOpen(false)}
              >
                {userInfo ? (
                  <>
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-700">{userInfo.name}</p>
                      <p className="text-xs text-gray-500">{userInfo.email}</p>
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
                      href="/login"
                      className="flex items-center justify-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                    >
                      <FontAwesomeIcon icon={faSignInAlt} className="w-4 h-4 mr-2" />
                      Login
                    </Link>
                    <Link
                      href="/register"
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

      {/* Report Form */}
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 md:p-8 border-2 border-green-500 mt-16">
        <div className="mb-6 text-center">
          <Link href="/" className="text-green-500 hover:text-green-600 text-sm">
            &larr; Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 mt-4">Dormitory Issue Report</h1>
          <p className="text-gray-600 mt-2">Please fill in the details of the issue you're reporting</p>
        </div>

        {/* Status Messages */}
        {success && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {success}
          </div>
        )}
        {errors.length > 0 && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {errors.map((error, index) => (
              <p key={index} className="mb-1 last:mb-0">⚠️ {error}</p>
            ))}
          </div>
        )}

        {/* Report Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Block Number
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                value={blockNo}
                onChange={(e) => setBlockNo(e.target.value)}
                required
                pattern="[A-Za-z0-9\\-]+"
                className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
                placeholder="Example: B-12"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Dorm Number
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                value={dormNo}
                onChange={(e) => setDormNo(e.target.value)}
                required
                pattern="[A-Za-z0-9\\-]+"
                className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
                placeholder="Example: D-305"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Issue Type
              <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              value={problemType}
              onChange={(e) => setProblemType(e.target.value)}
              className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
            >
              <option value="All">Select Issue Type</option>
              <option value="Socket">Electrical Sockets</option>
              <option value="Light">Lighting</option>
              <option value="Windows">Windows</option>
              <option value="Doors">Doors</option>
              <option value="Cylinder and body">Cylinder and Body</option>
              <option value="Mattress(Firash)">Mattress (Firash)</option>
              <option value="Chipwood">Chipwood Furniture</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Issue Description
              <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              value={problemDescription}
              onChange={(e) => setProblemDescription(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-2 border-2 border-green-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
              placeholder="Please describe the issue in detail..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Report'}
          </button>
        </form>
      </div>
    </div>
  );
}