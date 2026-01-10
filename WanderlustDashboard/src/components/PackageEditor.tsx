import { useState } from 'react';
import { Package } from '../data/packages';

interface PackageEditorProps {
  package: Package;
}

const tabs = ['Basic Info', 'Itinerary Builder', 'Media Gallery', 'Settings & Policies'];

export default function PackageEditor({ package: pkg }: PackageEditorProps) {
  const [activeTab, setActiveTab] = useState('Basic Info');

  return (
    <div className="flex-1 bg-background-light dark:bg-background-dark overflow-y-auto relative hidden md:block">
      {/* Editor Toolbar (Sticky) */}
      <div className="sticky top-0 z-20 bg-surface-light dark:bg-surface-dark/95 backdrop-blur border-b border-border-light dark:border-border-dark px-8 py-4 flex justify-between items-center shadow-sm">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
            <span>Editing Package</span>
            <span className="size-1 rounded-full bg-slate-400"></span>
            <span className="text-green-600 dark:text-green-400 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">check_circle</span> Published
            </span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{pkg.title}</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
            Discard
          </button>
          <button className="px-6 py-2 rounded-lg bg-primary hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">save</span>
            Save Changes
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-8 space-y-8 pb-20">
        {/* Cover Image Section */}
        <div className="relative group rounded-2xl overflow-hidden h-64 bg-slate-200 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-600">
          <img src={pkg.coverImage} alt={pkg.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
            <button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-bold text-sm shadow-xl flex items-center gap-2">
              <span className="material-symbols-outlined">upload_file</span> Change Cover
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-border-light dark:border-border-dark">
          <nav className="flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 border-b-2 text-sm transition-colors ${
                  activeTab === tab
                    ? 'border-primary text-primary font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-medium'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Form Content: Basic Info */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column Form */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-border-light dark:border-border-dark">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Package Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">Package Title</label>
                  <input
                    type="text"
                    defaultValue={pkg.title}
                    className="w-full rounded-lg border-border-light dark:border-border-dark bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">Description</label>
                  <div className="rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-slate-900 overflow-hidden">
                    <div className="flex items-center gap-2 p-2 border-b border-border-light dark:border-border-dark bg-slate-100 dark:bg-slate-800">
                      <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-300">
                        <span className="material-symbols-outlined text-[18px]">format_bold</span>
                      </button>
                      <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-300">
                        <span className="material-symbols-outlined text-[18px]">format_italic</span>
                      </button>
                      <div className="w-px h-4 bg-slate-300 dark:bg-slate-600 mx-1"></div>
                      <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-300">
                        <span className="material-symbols-outlined text-[18px]">format_list_bulleted</span>
                      </button>
                    </div>
                    <textarea
                      defaultValue={pkg.description}
                      rows={4}
                      className="w-full border-none p-4 bg-transparent focus:ring-0 text-slate-900 dark:text-white text-sm leading-relaxed"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Itinerary Preview */}
            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-border-light dark:border-border-dark">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Itinerary Preview</h3>
                <button className="text-primary text-sm font-bold hover:underline">Open Builder</button>
              </div>
              <div className="space-y-0 relative border-l-2 border-slate-200 dark:border-slate-700 ml-3">
                {pkg.itinerary.map((day, index) => (
                  <div key={day.day} className="relative pl-6 pb-6">
                    <div className={`absolute -left-[9px] top-0 size-4 rounded-full border-4 border-white dark:border-surface-dark ${
                      index === 0 ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'
                    }`}></div>
                    <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                      index === 0 ? 'text-primary' : 'text-slate-500'
                    }`}>Day {day.day}</p>
                    <p className="font-bold text-slate-900 dark:text-white">{day.title}</p>
                    {day.description && (
                      <p className="text-sm text-slate-500 mt-1">{day.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Meta Data */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-border-light dark:border-border-dark">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Key Information</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Price ($)</label>
                    <input
                      type="number"
                      defaultValue={pkg.price}
                      className="w-full rounded-lg border-border-light dark:border-border-dark bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Duration (Days)</label>
                    <input
                      type="number"
                      defaultValue={parseInt(pkg.duration)}
                      className="w-full rounded-lg border-border-light dark:border-border-dark bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Max Guests</label>
                  <input
                    type="number"
                    defaultValue={pkg.maxGuests}
                    className="w-full rounded-lg border-border-light dark:border-border-dark bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Start Date</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">calendar_today</span>
                    <input
                      type="text"
                      defaultValue={pkg.startDate}
                      className="w-full rounded-lg border-border-light dark:border-border-dark bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-border-light dark:border-border-dark">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Visibility</h3>
              <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Active Status</p>
                  <p className="text-xs text-slate-500">Visible to customers</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked={pkg.isActive} className="sr-only peer" />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              <div className="flex items-center justify-between py-2 pt-4">
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Featured</p>
                  <p className="text-xs text-slate-500">Show on homepage</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked={pkg.isFeatured} className="sr-only peer" />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>

            {/* Gallery Preview */}
            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-border-light dark:border-border-dark">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Gallery ({pkg.gallery.length})</h3>
                <button className="text-primary text-xs font-bold hover:underline">Manage</button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {pkg.gallery.slice(0, 3).map((img, index) => (
                  <img key={index} src={img} alt="Gallery" className="rounded-lg aspect-square object-cover" />
                ))}
                <div className="rounded-lg aspect-square bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 border border-dashed border-slate-300 dark:border-slate-600">
                  <span className="material-symbols-outlined">add</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
