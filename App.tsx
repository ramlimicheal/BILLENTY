import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Icons } from './components/Icon';
import { StatCard } from './components/StatCard';
import { InvoiceCard } from './components/InvoiceCard';
import { Tab } from './types';
import { INVOICES_DATA, STATS_DATA } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.INVOICE);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle dark mode class on html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const paidInvoices = INVOICES_DATA.filter(i => i.status === 'Paid');
  const pendingInvoices = INVOICES_DATA.filter(i => i.status === 'Pending');

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 font-sans transition-colors duration-200">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-8 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex-shrink-0 transition-colors duration-200">
          <div className="flex items-center w-96 relative group">
            <Icons.Search className="absolute left-0 text-gray-400 dark:text-gray-500 group-focus-within:text-primary-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none text-sm text-gray-900 dark:text-gray-300 focus:ring-0 w-full pl-8 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? <Icons.Sun size={20} /> : <Icons.Moon size={20} />}
            </button>
            <button className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              <Icons.Notification size={20} />
            </button>
            <button className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              <Icons.Help size={20} />
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-colors cursor-pointer">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPMzTYHk87zM2buvTD69afHieH5PEC5QyME-4KjrJ4CMyZsG821jYCLzyKmeyfx_eV8yAz32OV1vuWzw7PiA33AjWqBpft3T3I07_HhtsXLEHqiLiQhlQrwMZuLuY01Yd2tyQG7v4D-C-3U1pmK4V_AWMzHrg1ON95U5vzd3Y__vKTrDhkzrO1okjaNMz_O1RIM4QCi4iG01Pkh1yD1t2eXwsLH7FUAkHNV_gaSf2QkZxFSo_o5uf0M6C-D5MNPOwm6fyVpTYv32I" 
                alt="User Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Main Content Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-8 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent">
          
          {/* Page Title & Actions */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Overview</div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Invoice</h1>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="p-2 border border-gray-200 dark:border-gray-700 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Icons.Search size={20} />
              </button>
              <button className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                Send Statements
              </button>
              <button className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                Import
              </button>
              <button className="px-4 py-2 bg-primary-600 hover:bg-blue-600 text-white rounded-md text-sm font-medium flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all">
                <Icons.Plus size={18} />
                New Invoice
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-8 border-b border-gray-200 dark:border-gray-800 mb-8 transition-colors duration-200">
            {Object.values(Tab).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 border-b-2 text-sm font-medium transition-colors ${
                  activeTab === tab 
                    ? 'border-primary-500 text-primary-600 dark:text-primary-500' 
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {STATS_DATA.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>

          {/* Invoices Section Header */}
          <div className="mb-6 flex flex-col sm:flex-row justify-between items-end sm:items-center gap-4">
            <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400">Invoice List</h3>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-700 rounded-md text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                Last 12 months
                <Icons.ChevronDown size={14} />
              </button>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-700 rounded-md text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <Icons.Calendar size={14} />
                21 Mar 2022 - 20 April
              </button>
            </div>
          </div>

          {/* Paid Invoices Grid */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
              <Icons.CheckCircle className="text-green-500" size={24} />
              Paid Invoices
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
              {paidInvoices.map((invoice) => (
                <InvoiceCard key={invoice.id} invoice={invoice} />
              ))}
            </div>
          </div>

          {/* Pending Invoices Grid */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
              <Icons.Pending className="text-orange-500" size={24} />
              Pending Invoices
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
              {pendingInvoices.map((invoice) => (
                <InvoiceCard key={invoice.id} invoice={invoice} />
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;