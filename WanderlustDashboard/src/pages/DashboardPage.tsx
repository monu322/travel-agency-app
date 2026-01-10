import { useEffect, useState } from 'react';
import { packagesApi, Package } from '../services/api';

export default function DashboardPage() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await packagesApi.getAll();
        setPackages(data);
      } catch (error) {
        console.error('Failed to load packages:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const activePackages = packages.filter(p => p.status === 'active');
  const totalRevenue = packages.reduce((sum, p) => sum + p.price * (Math.floor(Math.random() * 10) + 1), 0);

  const getCurrentMonth = () => {
    return new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">Dashboard Overview</h1>
          <p className="text-sm text-gray-500">Performance tracking for {getCurrentMonth()}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-white border border-gray-200 p-1 rounded-lg">
            <button className="px-3 py-1.5 text-xs font-bold bg-indigo-600 text-white rounded-md">Weekly</button>
            <button className="px-3 py-1.5 text-xs font-medium text-gray-500 hover:bg-gray-50 rounded-md">Monthly</button>
          </div>
          <button className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {/* Total Revenue */}
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="h-8 w-8 bg-blue-50 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-[10px] font-bold text-green-600 flex items-center bg-green-50 px-1.5 py-0.5 rounded">
              ↗ 12%
            </span>
          </div>
          <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Total Revenue</p>
          <p className="text-xl font-extrabold">${loading ? '...' : totalRevenue.toLocaleString()}</p>
        </div>

        {/* Bookings */}
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="h-8 w-8 bg-emerald-50 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
            <span className="text-[10px] font-bold text-green-600 flex items-center bg-green-50 px-1.5 py-0.5 rounded">
              ↗ 5%
            </span>
          </div>
          <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Bookings</p>
          <p className="text-xl font-extrabold">842</p>
        </div>

        {/* Active Trips */}
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="h-8 w-8 bg-purple-50 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
          </div>
          <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Active Trips</p>
          <p className="text-xl font-extrabold">{loading ? '...' : activePackages.length}</p>
        </div>

        {/* Occupancy */}
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="h-8 w-8 bg-orange-50 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
            </div>
            <span className="text-[10px] font-bold text-orange-600 flex items-center bg-orange-50 px-1.5 py-0.5 rounded">
              ↘ 2%
            </span>
          </div>
          <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Occupancy</p>
          <p className="text-xl font-extrabold">78.4%</p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Revenue Trends Chart */}
        <div className="col-span-2 bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-base">Revenue Trends</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                <span className="text-[10px] font-medium text-gray-500">Current Period</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-gray-200"></span>
                <span className="text-[10px] font-medium text-gray-500">Previous</span>
              </div>
            </div>
          </div>
          <div className="h-32 flex items-end justify-between gap-3 px-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
              const heights = [40, 65, 50, 80, 60, 95, 30];
              const isSaturday = day === 'Sat';
              return (
                <div key={day} className="flex-1 flex flex-col gap-1 items-center group">
                  <div 
                    className={`w-full rounded-t transition-all ${isSaturday ? 'bg-indigo-600' : 'bg-blue-100'}`}
                    style={{ height: `${heights[i]}%` }}
                  ></div>
                  <span className={`text-[10px] ${isSaturday ? 'text-gray-900 font-bold' : 'text-gray-400'}`}>{day}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Required */}
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-base mb-4">Action Required</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
              <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-red-900">5 Payment Failures</p>
                <p className="text-[10px] text-red-700 mt-0.5">Kyoto Spring Tour bookings</p>
              </div>
              <button className="text-red-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
              <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-amber-900">Inquiry Backlog</p>
                <p className="text-[10px] text-amber-700 mt-0.5">12 new messages pending</p>
              </div>
              <button className="text-amber-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Departures Table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h3 className="font-bold text-base">Upcoming Departures</h3>
          <button className="text-xs font-bold text-indigo-600 hover:underline">View All Schedule</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-3">Trip Details</th>
                <th className="px-6 py-3">Dates</th>
                <th className="px-6 py-3">Occupancy</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">Loading...</td>
                </tr>
              ) : packages.slice(0, 3).map((pkg) => (
                <tr key={pkg.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div 
                        className="h-10 w-10 rounded bg-cover bg-center bg-gray-200" 
                        style={{ backgroundImage: pkg.cover_image ? `url('${pkg.cover_image}')` : undefined }}
                      ></div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold truncate">{pkg.title}</p>
                        <p className="text-[10px] text-gray-500">{pkg.location} • {pkg.duration_days} Days</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs font-medium">
                      {pkg.start_date ? new Date(pkg.start_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'TBD'}
                      {' - '}
                      {pkg.end_date ? new Date(pkg.end_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'TBD'}
                    </p>
                    <p className="text-[10px] text-orange-600 font-bold">
                      {pkg.start_date ? `${Math.max(0, Math.ceil((new Date(pkg.start_date).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))} days to go` : '-'}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-32">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-bold text-gray-500">{Math.floor(pkg.max_guests * 0.8)}/{pkg.max_guests}</span>
                        <span className="text-[10px] font-bold text-green-600">80%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-[80%]"></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-[10px] font-bold rounded ${
                      pkg.status === 'active' 
                        ? 'bg-green-100 text-green-700' 
                        : pkg.status === 'draft'
                        ? 'bg-gray-100 text-gray-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {pkg.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md hover:bg-indigo-100">
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
