import { Package } from '../services/api';

interface PackageListProps {
  packages: Package[];
  onSelect: (pkg: Package) => void;
  onDelete: (id: string) => void;
}

export default function PackageList({
  packages,
  onSelect,
  onDelete,
}: PackageListProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      case 'sold_out':
        return 'bg-amber-100 text-amber-800';
      case 'archived':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return 'No date';
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {packages.map((pkg) => (
        <div
          key={pkg.id}
          className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
        >
          {/* Package Image */}
          <div className="relative h-48 bg-gray-200">
            {pkg.cover_image ? (
              <img
                src={pkg.cover_image}
                alt={pkg.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
            {pkg.is_featured && (
              <span className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded text-xs font-bold">
                ⭐ Featured
              </span>
            )}
            <span className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-semibold ${getStatusColor(pkg.status)}`}>
              {pkg.status.replace('_', ' ').toUpperCase()}
            </span>
          </div>

          {/* Package Info */}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">{pkg.title}</h3>
            
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {pkg.location || 'Location TBD'}
            </div>

            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {pkg.duration_days} days
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Max {pkg.max_guests} guests
              </div>
            </div>

            <div className="text-sm text-gray-500 mb-3">
              {formatDate(pkg.start_date)} - {formatDate(pkg.end_date)}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <span className="text-xl font-bold text-indigo-600">
                ${pkg.price.toLocaleString()}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => onSelect(pkg)}
                  className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(pkg.id)}
                  className="px-3 py-1.5 text-sm bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                >
                  Archive
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
