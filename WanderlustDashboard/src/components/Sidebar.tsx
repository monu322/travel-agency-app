interface NavItem {
  icon: string;
  label: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { icon: 'dashboard', label: 'Dashboard' },
  { icon: 'inventory_2', label: 'Packages', active: true },
  { icon: 'calendar_month', label: 'Bookings' },
  { icon: 'group', label: 'Customers' },
  { icon: 'analytics', label: 'Analytics' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-surface-light dark:bg-surface-dark border-r border-border-light dark:border-border-dark flex-shrink-0 hidden md:flex flex-col z-20">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded bg-primary flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-[20px]">travel_explore</span>
          </div>
          <p className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Wanderlust</p>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              item.active
                ? 'bg-primary/10 text-primary'
                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 group'
            }`}
          >
            <span className={`material-symbols-outlined ${item.active ? 'fill-1' : 'group-hover:text-primary'}`}>
              {item.icon}
            </span>
            <span className={`text-sm ${item.active ? 'font-bold' : 'font-medium'}`}>
              {item.label}
            </span>
          </a>
        ))}
      </nav>
      
      {/* Bottom Section */}
      <div className="p-4 mt-auto border-t border-border-light dark:border-border-dark">
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors group"
        >
          <span className="material-symbols-outlined group-hover:text-primary">settings</span>
          <span className="font-medium text-sm">Settings</span>
        </a>
        
        {/* User Profile */}
        <div className="mt-4 flex items-center gap-3 px-4">
          <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjaP9G5tvYgWGs1_Q4kU0aaLfUxgfqDVu7QIA06HMtqa0Aa7TUCLuHwyza0IzSsJ6HaK8zaK5rEhTbTYP-GbncjTBxCrCV82zZDhi6UlidCEunRoGL-lW1OQ7CuxBf-_iq8fEyrGZBkXVwWF0rKwAaeVi2qqcR1OCNy0lPHEZWBk1iKW9stvlCyvzptjaMk8W5wvY1HnHNhiKtUYJH42H0eGpwd26HXVVuudmxie-X9sTnNBHSRCSDqmrQBez2hxJnbSao7EZqM7ey"
              alt="Admin Profile"
              className="object-cover size-full"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-slate-900 dark:text-white truncate">Alex Morgan</p>
            <p className="text-xs text-slate-500 truncate">Super Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
