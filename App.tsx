import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Icons } from './components/Icon';
import { InvoicesPage } from './components/InvoicesPage';
import { AccountsPage } from './components/AccountsPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.DASHBOARD);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Toggle dark mode class on html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 font-sans transition-colors duration-200">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      
      <main className="flex-1 flex flex-col h-full overflow-hidden w-full relative">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-4 md:px-8 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex-shrink-0 transition-colors duration-200">
          
          <div className="flex items-center gap-4 flex-1">
            <button 
              className="md:hidden text-gray-500 dark:text-gray-400"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Icons.Menu size={24} />
            </button>

            <div className="flex items-center w-full max-w-sm relative group">
              <Icons.Search className="absolute left-0 text-gray-400 dark:text-gray-500 group-focus-within:text-primary-500 transition-colors" size={20} />
              <input 
                type="text" 
                placeholder={currentPage === Page.ACCOUNTS ? "Search users..." : "Search by client or invoice #..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none text-sm text-gray-900 dark:text-gray-300 focus:ring-0 w-full pl-8 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4 pl-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors p-2"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? <Icons.Sun size={20} /> : <Icons.Moon size={20} />}
            </button>
            <button className="hidden md:block text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors p-2">
              <Icons.Notification size={20} />
            </button>
            <button className="hidden md:block text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors p-2">
              <Icons.Help size={20} />
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-colors cursor-pointer ml-2">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPMzTYHk87zM2buvTD69afHieH5PEC5QyME-4KjrJ4CMyZsG821jYCLzyKmeyfx_eV8yAz32OV1vuWzw7PiA33AjWqBpft3T3I07_HhtsXLEHqiLiQhlQrwMZuLuY01Yd2tyQG7v4D-C-3U1pmK4V_AWMzHrg1ON95U5vzd3Y__vKTrDhkzrO1okjaNMz_O1RIM4QCi4iG01Pkh1yD1t2eXwsLH7FUAkHNV_gaSf2QkZxFSo_o5uf0M6C-D5MNPOwm6fyVpTYv32I" 
                alt="User Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Main Content Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent">
          {currentPage === Page.DASHBOARD && <InvoicesPage searchQuery={searchQuery} />}
          {currentPage === Page.ACCOUNTS && <AccountsPage searchQuery={searchQuery} />}
        </div>
      </main>
    </div>
  );
};

export default App;