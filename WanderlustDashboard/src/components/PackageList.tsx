import { Package } from '../data/packages';

interface PackageListProps {
  packages: Package[];
  selectedPackage: Package;
  onSelectPackage: (pkg: Package) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = ['All', 'Active', 'Drafts', 'Archived'];

export default function PackageList({
  packages,
  selectedPackage,
  onSelectPackage,
  activeFilter,
  onFilterChange,
}: PackageListProps) {
  return (
    <div className="w-full md:w-[400px] lg:w-[450px] bg-white dark:bg-[#151b2b] border-r border-border-light dark:border-border-dark flex flex-col z-10">
      {/* List Toolbar */}
      <div className="p-4 border-b border-border-light dark:border-border-dark flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">All Packages</h2>
          <button className="flex items-center gap-2 bg-primary hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-bold transition-colors">
            <span className="material-symbols-outlined text-[18px]">add</span>
            <span>Create</span>
          </button>
        </div>
        
        {/* Search & Filter */}
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
            filter_list
          </span>
          <input
            type="text"
            placeholder="Filter packages..."
            className="w-full h-10 pl-10 pr-4 rounded-lg bg-slate-50 dark:bg-slate-800 border-border-light dark:border-border-dark focus:border-primary focus:ring-primary text-sm"
          />
        </div>
        
        {/* Chips */}
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                activeFilter === filter
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      {/* List Items */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {packages.map((pkg) => (
          <PackageListItem
            key={pkg.id}
            package={pkg}
            isSelected={selectedPackage.id === pkg.id}
            onClick={() => onSelectPackage(pkg)}
          />
        ))}
      </div>
    </div>
  );
}

interface PackageListItemProps {
  package: Package;
  isSelected: boolean;
  onClick: () => void;
}

function PackageListItem({ package: pkg, isSelected, onClick }: PackageListItemProps) {
  const getStatusBadge = () => {
    switch (pkg.status) {
      case 'draft':
        return (
          <span className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-[10px] font-bold text-slate-600 dark:text-slate-300 uppercase">
            Draft
          </span>
        );
      case 'sold_out':
        return (
          <span className="px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/30 text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase">
            Sold Out
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div
      onClick={onClick}
      className={`group flex gap-4 p-3 rounded-lg cursor-pointer relative transition-all ${
        isSelected
          ? 'bg-primary/5 border border-primary/20'
          : 'hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent hover:border-border-light dark:hover:border-border-dark'
      }`}
    >
      {pkg.status === 'active' && isSelected && (
        <div className="absolute right-3 top-3">
          <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
        </div>
      )}
      
      <img
        src={pkg.image}
        alt={pkg.title}
        className={`w-16 h-16 rounded-md object-cover flex-shrink-0 ${
          pkg.status === 'draft' ? 'grayscale opacity-80' : ''
        }`}
      />
      
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <h3 className={`font-bold truncate pr-4 ${
            isSelected || pkg.status !== 'draft'
              ? 'text-slate-900 dark:text-white'
              : 'text-slate-700 dark:text-slate-300'
          }`}>
            {pkg.title}
          </h3>
        </div>
        
        <div className="flex items-center gap-2 mt-0.5">
          {getStatusBadge()}
          <span className="text-xs text-slate-500">
            {pkg.groupSize || pkg.duration}
          </span>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <span className={`text-sm font-bold ${
            pkg.status === 'draft' ? 'text-slate-600 dark:text-slate-400' : 'text-primary'
          }`}>
            ${pkg.price.toLocaleString()}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            {pkg.dateRange}
          </span>
        </div>
      </div>
    </div>
  );
}
