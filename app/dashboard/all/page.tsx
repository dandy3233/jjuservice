'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Home, Building2, BookOpenText,  Megaphone, Search, Bell, Users, DollarSign, AlertTriangle } from 'lucide-react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import {
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // ← Add this
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';

export default function UniversityDashboardPage() {
  const backgroundImages = [
    '/images/bg1.jpg',
    '/images/bg2.jpg',
    '/images/bg3.jpg',
    '/images/bg4.jpg',
    '/images/bg5.jpg',
    '/images/bg6.jpg',
  ];

  const [currentBg, setCurrentBg] = useState(0);
  const [activeNav, setActiveNav] = useState('/dashboard');
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  // const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    // const [mounted, setMounted] = useState(false);


interface UserInfo {
  last_name: string;
  first_name: string;
  isAdmin: boolean;
}



  // Background slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Notification bell animation
  useEffect(() => {
    const bell = document.querySelector('.bell-icon');
    if (bell) {
      const interval = setInterval(() => {
        bell.classList.add('animate-pulse');
        setTimeout(() => bell.classList.remove('animate-pulse'), 1000);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, []);

  // Chart data for Academic Performance
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Student Performance',
        data: [85, 90, 88, 92, 87, 95],
        backgroundColor: 'rgba(30, 64, 175, 0.6)',
        borderColor: '#1e40af',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#6b7280' } },
      y: {
        beginAtZero: true,
        grid: { color: '#f3f4f6' },
        ticks: {
  color: '#6b7280',
  callback: (value: number) => `${value}%`,
},

      },
    },
  };

  // Handle sidebar navigation active state
 const handleNavClick = (href: string) => {
  setActiveNav(href);
};


  const [summary, setSummary] = useState({
  totalDormitory: 0,
  totalAcademic: 0,
  totalComplaints: 0,
});

useEffect(() => {
  async function fetchSummary() {
    try {
      const response = await fetch('/api/dashboard');
      const data = await response.json();
      setSummary(data);
    } catch (error) {
      console.error('Failed to load summary:', error);
    }
  }
  fetchSummary();
}, []);

const [recentComplaints, setRecentComplaints] = useState([]);

// const [recentComplaints, setRecentComplaints] = useState([]);

useEffect(() => {
  async function fetchComplaints() {
    try {
      const response = await fetch('/api/complaints/recent');
      const data = await response.json();
      setRecentComplaints(data);
    } catch (error) {
      console.error('Error loading recent complaints:', error);
    }
  }

  fetchComplaints();
}, []);


const [complaintChartData, setComplaintChartData] = useState(null);

useEffect(() => {
  async function fetchComplaintChartData() {
    try {
      const res = await fetch('/api/complaints/chart');
      const data = await res.json();

      const labels = Object.keys(data);
      const values = Object.values(data);

      setComplaintChartData({
        labels,
        datasets: [
          {
            label: 'Complaints',
            data: values,
            backgroundColor: 'rgba(239, 68, 68, 0.6)',
            borderColor: 'rgba(239, 68, 68, 1)',
            borderWidth: 2,
          },
        ],
      });
    } catch (error) {
      console.error('Failed to load complaint chart data:', error);
    }
  }

  fetchComplaintChartData();
}, []);

// const logoutHandler = () => {
//     localStorage.removeItem('userInfo');
//     setUserInfo(null);
//     router.push('/');
//   };

  // Fetch userInfo from localStorage once component is mounted
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
    <div className="min-h-screen flex bg-gray-100">
      {/* Background Layer */}
      <div
        className="absolute inset-0 -z-10 transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImages[currentBg]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
        }}
      >
        <div className="absolute inset-0 bg-cordes-dark/50" />
      </div>

      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-cordes-dark shadow-xl z-50">
        <div className="flex items-center justify-center bg-green-00  h-22 bg-cordes-blue">
          <div className="flex items-center  space-x-3">
            
            <div className=" bg-green-00 rounded-lg flex items-center justify-center">
              <img
                src="/images/logo.png"
                alt="Admin"
                width={80}
                height={60}
                className="rounded-full"
              />
            </div>
            <span className="text-black text-2xl font-bold">JigJiga <span className="text-black text-xl font-bold" >University </span> </span>
            
          </div>
        </div>

        <nav className="mt-8 px-4">
          <div className="space-y-2">
            {[
              { href: '/dashboard', icon: Home, label: 'Dashboard' },
              { href: '/dashboard/dormitory', icon: Building2, label: 'Block Reports' },
              { href: '/dashboard/academic', icon: BookOpenText, label: 'Academic Reports' },
              { href: '/dashboard/complain', icon: Megaphone, label: 'Complain Reports' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-4 py-3 rounded-lg transition-colors group ${
                  activeNav === item.href
                    ? 'bg-green-700 text-black font-semibold'
                    : 'text-black hover:bg-green-700 hover:text-white'
                }`}
                onClick={() => handleNavClick(item.href)}
              >
                <item.icon
                  className={`mr-3 w-5 h-5 ${
                    activeNav === item.href ? 'text-white' : 'text-gray-400 group-hover:text-white'
                  }`}
                />
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
  <div className="bg-green-800 rounded-2xl p-4 shadow-xl animate-slide-up">
    <div className="flex items-center space-x-4">
      <img
        src="https://cdn-icons-png.flaticon.com/512/17003/17003310.png"
        alt="Admin"
        width={48}
        height={48}
        className="rounded-full border-2 border-white shadow-sm"
      />
      <div>
        <p className="text-white text-base font-semibold tracking-wide">
  {userInfo?.last_name || 'Guest User'}
</p>
<p className="text-green-100 text-sm opacity-85">
  {userInfo?.first_name || 'Unknown Role'}
</p>

      </div>
    </div>
  </div>

  <div className="p-3 pt-2 border-t border-white/10 bg-white/5 rounded-b-2xl backdrop-blur-sm shadow-md">
    <button
      onClick={logoutHandler}
      className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-red-600 hover:bg-red-100 hover:text-red-700 transition-all duration-200"
    >
      <FontAwesomeIcon icon={faSignOutAlt} className="w-4 h-4" />
      <span className="text-sm font-medium">Logout</span>
    </button>
  </div>
</div>

      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">University Dashboard</h1>
                <p className="text-gray-600 text-sm mt-1">Welcome back, here's the latest overview</p>
              </div>
              
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow transform hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Block Reports</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{summary.totalDormitory}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-green-600 text-sm font-medium flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      5%
                    </span>
                    <span className="text-gray-500 text-sm ml-2">vs last semester</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Building2 className="text-green-600 w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow transform hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Academic Reports</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{summary.totalAcademic}</p>

                  <div className="flex items-center mt-2">
                    <span className="text-green-600 text-sm font-medium flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      8%
                    </span>
                    <span className="text-gray-500 text-sm ml-2">vs last semester</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <BookOpenText className="text-green-600 w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow transform hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Complaints</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{summary.totalComplaints}</p>

                  <div className="flex items-center mt-2">
                    <span className="text-red-600 text-sm font-medium flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      10%
                    </span>
                    <span className="text-gray-500 text-sm ml-2">vs last semester</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="text-orange-600 w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Charts and Recent Complaints */}
          {/* Charts and Recent Complaints */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
  {/* Academic Performance Chart */}
  <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    {/* Complaints Chart */}
{complaintChartData && (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
    <div className="flex items-center justify-between mb-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Complaints Overview</h3>
        <p className="text-gray-600 text-sm">Monthly complaints statistics</p>
      </div>
    </div>
    <div className="h-80">
      <Bar data={complaintChartData} options={chartOptions} />
    </div>
  </div>
)}
</div>
  {/* Recent Complaints */}
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-semibold text-gray-900">Recent Complaints</h3>
      <Link href="/dashboard/complain" className="text-cordes-blue hover:text-cordes-dark text-sm font-medium transition-colors">
        View All
      </Link>
    </div>
    <div className="space-y-4">
      {recentComplaints
        .sort(() => 0.5 - Math.random()) // Randomize order
        .slice(0, 3) // Show only 3
        .map((complaint, index) => (
          <div key={index} className="flex items-center space-x-4 hover:bg-gray-50 p-2 rounded-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/17003/17003310.png"
              alt="Complaint"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <div className="flex-1">
              <p className="font-medium text-gray-900">{complaint.subject}</p>
              <p className="text-sm text-gray-600">{complaint.department}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-sm text-yellow-600">Pending</p>
              <p className="text-sm text-gray-600">
                {new Date(complaint.submission_date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
    </div>
  </div>
</div>


          {/* Recent Activity Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                  <p className="text-gray-600 text-sm">Latest university activities and updates</p>
                </div>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Export
                  </button>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Activity ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    {
                      id: '#12345',
                      type: 'Registration',
                      description: 'New student enrolled',
                      date: 'May 25, 2025',
                    },
                    {
                      id: '#12344',
                      type: 'Complaint',
                      description: 'Dormitory maintenance issue',
                      date: 'May 24, 2025',
                    },
                  ].map((activity, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {activity.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{activity.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{activity.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{activity.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-cordes-blue hover:text-cordes-dark">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6.293-2.293a1 1 0 011.414 1.414l-2.5 2.5a1 1 0 01-1.414 0l-2.5-2.5a1 1 0 011.414-1.414L20 12l1.293-1.293z"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}