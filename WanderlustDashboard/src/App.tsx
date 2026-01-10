import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PackageList from './components/PackageList';
import PackageEditor from './components/PackageEditor';
import { packagesApi, Package, healthCheck } from './services/api';

function App() {
  const [activeSection, setActiveSection] = useState('packages');
  const [packages, setPackages] = useState<Package[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [apiConnected, setApiConnected] = useState(false);

  // Check API health and load packages on mount
  useEffect(() => {
    const initialize = async () => {
      setLoading(true);
      
      // Check API health
      const isHealthy = await healthCheck();
      setApiConnected(isHealthy);
      
      if (isHealthy) {
        await loadPackages();
      } else {
        setError('Cannot connect to API. Make sure the backend is running on http://localhost:8000');
        setLoading(false);
      }
    };

    initialize();
  }, []);

  const loadPackages = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await packagesApi.getAll();
      setPackages(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load packages');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectPackage = async (pkg: Package) => {
    try {
      // Fetch full package details with itinerary and images
      const fullPackage = await packagesApi.getById(pkg.id);
      setSelectedPackage(fullPackage);
      setIsEditing(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load package details');
    }
  };

  const handleCreateNew = () => {
    setSelectedPackage(null);
    setIsEditing(true);
  };

  const handleSave = async (packageData: Partial<Package>) => {
    try {
      setError(null);
      if (selectedPackage) {
        // Update existing package
        await packagesApi.update(selectedPackage.id, packageData);
      } else {
        // Create new package
        await packagesApi.create(packageData as any);
      }
      setIsEditing(false);
      setSelectedPackage(null);
      await loadPackages();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save package');
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setSelectedPackage(null);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to archive this package?')) return;
    
    try {
      setError(null);
      await packagesApi.delete(id);
      await loadPackages();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete package');
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeSection={activeSection} onNavigate={setActiveSection} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          title={isEditing ? (selectedPackage ? 'Edit Package' : 'Create Package') : 'Packages'} 
          onCreateNew={!isEditing ? handleCreateNew : undefined}
        />
        
        <main className="flex-1 overflow-y-auto p-6">
          {/* API Status Banner */}
          {!apiConnected && !loading && (
            <div className="mb-4 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
              <p className="font-semibold">⚠️ API Not Connected</p>
              <p className="text-sm">Make sure the backend is running: <code className="bg-yellow-200 px-1">cd backend && source venv/bin/activate && uvicorn app.main:app --reload</code></p>
              <p className="text-sm mt-1">Then run the SQL scripts in Supabase to create tables and seed data.</p>
            </div>
          )}

          {/* Error Banner */}
          {error && (
            <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex justify-between items-center">
              <span>{error}</span>
              <button onClick={() => setError(null)} className="text-red-700 hover:text-red-900">×</button>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading packages...</p>
              </div>
            </div>
          )}

          {/* Content */}
          {!loading && (
            <>
              {isEditing ? (
                <PackageEditor
                  package={selectedPackage}
                  onSave={handleSave}
                  onCancel={handleCancel}
                />
              ) : (
                <PackageList
                  packages={packages}
                  onSelect={handleSelectPackage}
                  onDelete={handleDelete}
                />
              )}
            </>
          )}

          {/* Empty State */}
          {!loading && !isEditing && packages.length === 0 && apiConnected && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📦</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No packages yet</h3>
              <p className="text-gray-500 mb-4">Get started by creating your first travel package.</p>
              <button
                onClick={handleCreateNew}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
              >
                Create Package
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
