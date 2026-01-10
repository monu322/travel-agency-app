import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import PackagesPage from './pages/PackagesPage';

const navItems = [
  { path: '/', label: 'Dashboard', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' },
  { path: '/packages', label: 'Packages', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
  { path: '/departures', label: 'Departures', icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' },
  { path: '/bookings', label: 'Bookings', icon: 'M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z' },
  { path: '/groups', label: 'Group', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
  { path: '/settings', label: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
];

function ComingSoonPage({ title }: { title: string }) {
  return (
    <div className="flex-1 flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="text-6xl mb-4">🚧</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-500">This feature is coming soon!</p>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="w-64 flex flex-col bg-white border-r border-gray-200 shrink-0">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-indigo-600">TRAVIO</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-4">
        <div className="px-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-600 font-bold border-r-4 border-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-xl">
          <div 
            className="h-10 w-10 rounded-full bg-cover bg-center border-2 border-white bg-indigo-100 flex items-center justify-center"
          >
            <span className="text-indigo-600 font-bold">AM</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold truncate">Alex Morgan</p>
            <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Admin</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
}

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/departures" element={<ComingSoonPage title="Departures" />} />
            <Route path="/bookings" element={<ComingSoonPage title="Bookings" />} />
            <Route path="/groups" element={<ComingSoonPage title="Groups" />} />
            <Route path="/settings" element={<ComingSoonPage title="Settings" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
        
