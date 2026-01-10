import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import PackageList from './components/PackageList'
import PackageEditor from './components/PackageEditor'
import { Package, packages as initialPackages } from './data/packages'

function App() {
  const [selectedPackage, setSelectedPackage] = useState<Package>(initialPackages[0])
  const [activeFilter, setActiveFilter] = useState<string>('All')

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-display transition-colors duration-200 h-screen overflow-hidden flex">
      {/* Sidebar Navigation */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full min-w-0 bg-background-light dark:bg-background-dark relative">
        {/* Top Header */}
        <Header />
        
        {/* Main Workspace (Split View) */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Panel: Package List */}
          <PackageList 
            packages={initialPackages}
            selectedPackage={selectedPackage}
            onSelectPackage={setSelectedPackage}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
          
          {/* Right Panel: Editor Area */}
          <PackageEditor package={selectedPackage} />
        </div>
      </main>
    </div>
  )
}

export default App
