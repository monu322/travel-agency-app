import { useState } from 'react';
import { Package } from '../services/api';

interface PackageEditorProps {
  package: Package | null;
  onSave: (data: Partial<Package>) => void;
  onCancel: () => void;
}

export default function PackageEditor({ package: pkg, onSave, onCancel }: PackageEditorProps) {
  const [formData, setFormData] = useState({
    title: pkg?.title || '',
    description: pkg?.description || '',
    price: pkg?.price || 0,
    duration_days: pkg?.duration_days || 1,
    max_guests: pkg?.max_guests || 10,
    location: pkg?.location || '',
    cover_image: pkg?.cover_image || '',
    start_date: pkg?.start_date || '',
    end_date: pkg?.end_date || '',
    status: pkg?.status || 'draft',
    is_featured: pkg?.is_featured || false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleChange = (field: string, value: string | number | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <form onSubmit={handleSubmit}>
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
          <h2 className="text-lg font-bold text-gray-900">
            {pkg ? 'Edit Package' : 'Create New Package'}
          </h2>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
            >
              {pkg ? 'Save Changes' : 'Create Package'}
            </button>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cover Image */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Cover Image URL</label>
              <input
                type="url"
                value={formData.cover_image}
                onChange={(e) => handleChange('cover_image', e.target.value)}
                placeholder="https://images.unsplash.com/..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              {formData.cover_image && (
                <div className="mt-3 relative h-48 rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src={formData.cover_image}
                    alt="Cover preview"
                    className="w-full h-full object-cover"
                    onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                  />
                </div>
              )}
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Package Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                placeholder="e.g., Bali Paradise Retreat"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                placeholder="Describe the travel experience..."
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                placeholder="e.g., Bali, Indonesia"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing & Duration */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Pricing & Details</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price ($) *</label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => handleChange('price', parseFloat(e.target.value))}
                    min="0"
                    step="0.01"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration (Days) *</label>
                  <input
                    type="number"
                    value={formData.duration_days}
                    onChange={(e) => handleChange('duration_days', parseInt(e.target.value))}
                    min="1"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Max Guests</label>
                  <input
                    type="number"
                    value={formData.max_guests}
                    onChange={(e) => handleChange('max_guests', parseInt(e.target.value))}
                    min="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>

            {/* Dates */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Trip Dates</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                  <input
                    type="date"
                    value={formData.start_date}
                    onChange={(e) => handleChange('start_date', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                  <input
                    type="date"
                    value={formData.end_date}
                    onChange={(e) => handleChange('end_date', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>

            {/* Status & Visibility */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Status & Visibility</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => handleChange('status', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="draft">Draft</option>
                    <option value="active">Active</option>
                    <option value="sold_out">Sold Out</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>

                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Featured Package</p>
                    <p className="text-xs text-gray-500">Show on homepage</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.is_featured}
                      onChange={(e) => handleChange('is_featured', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
