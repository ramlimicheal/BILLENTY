import React, { useState } from 'react';
import { Icons } from './Icon';

export const Sidebar: React.FC = () => {
  const [salesOpen, setSalesOpen] = useState(true);

  return (
    <aside className="w-64 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 flex flex-col flex-shrink-0 h-full transition-colors duration-200">
      <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-900 dark:bg-white text-white dark:text-black rounded flex items-center justify-center font-bold text-lg">B</div>
          <span className="font-bold text-lg tracking-tight text-gray-900 dark:text-white">Brees</span>
        </div>
      </div>
      
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
        <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors">
          <Icons.Dashboard size={20} />
          Dashboard
        </a>
        
        <div className="pt-2">
          <button 
            onClick={() => setSalesOpen(!salesOpen)}
            className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Icons.Sales size={20} />
              Sales
            </div>
            <Icons.ChevronDown size={16} className={`transform transition-transform ${salesOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {salesOpen && (
            <div className="pl-10 space-y-1 mt-1">
              <a href="#" className="block px-3 py-2 text-sm font-medium rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors">
                Sales Overview
              </a>
              <a href="#" className="block px-3 py-2 text-sm font-medium rounded-md text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 transition-colors">
                Invoices
              </a>
              <a href="#" className="block px-3 py-2 text-sm font-medium rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors">
                Quotes
              </a>
            </div>
          )}
        </div>

        <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors">
          <Icons.Users size={20} />
          Accounts & Users
        </a>
        
        <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors">
          <Icons.Reports size={20} />
          Finance Reports
        </a>
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="mb-2 flex justify-between items-end">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Invoices left</p>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">12 Invoice</p>
          </div>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-4 overflow-hidden">
          <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '45%' }}></div>
        </div>
        <button className="w-full py-2 px-4 border border-gray-200 dark:border-gray-700 rounded-md text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          Upgrade to Pro
        </button>
      </div>
    </aside>
  );
};