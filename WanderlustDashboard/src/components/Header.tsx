export default function Header() {
  return (
    <header className="h-16 flex items-center justify-between px-6 bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark shrink-0">
      <div className="flex items-center gap-4">
        <button className="md:hidden text-slate-500">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <nav className="hidden sm:flex text-sm font-medium text-slate-500 dark:text-slate-400">
          <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span className="text-slate-900 dark:text-white font-bold">Packages Management</span>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
            search
          </span>
          <input
            type="text"
            placeholder="Global search..."
            className="h-10 pl-10 pr-4 rounded-lg bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary text-sm w-64 text-slate-900 dark:text-white placeholder:text-slate-400"
          />
        </div>
        <button className="relative p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-surface-light dark:border-surface-dark"></span>
        </button>
      </div>
    </header>
  );
}
