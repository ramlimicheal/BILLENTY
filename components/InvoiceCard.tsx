import React from 'react';
import { Invoice } from '../types';
import { Icons } from './Icon';

interface InvoiceCardProps {
  invoice: Invoice;
}

export const InvoiceCard: React.FC<InvoiceCardProps> = ({ invoice }) => {
  const isPaid = invoice.status === 'Paid';
  const isPending = invoice.status === 'Pending';
  
  // Status colors adjusted for light and dark modes
  const statusColors = isPaid 
    ? 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800' 
    : isPending 
      ? 'bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800'
      : 'bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800';

  const StatusIcon = isPaid ? Icons.CheckCircle : Icons.Pending;

  return (
    <div className="bg-white dark:bg-gray-850 border border-gray-200 dark:border-gray-750 rounded-xl shadow-sm p-6 flex flex-col h-full hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Invoice #</div>
          <p className="text-xl font-bold text-gray-900 dark:text-white">{invoice.number}</p>
        </div>
        <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium border ${statusColors}`}>
          <StatusIcon size={14} />
          {invoice.status}
        </span>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
          <Icons.Business size={20} className="text-gray-500 dark:text-gray-400" />
        </div>
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">{invoice.clientName}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{invoice.clientType}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-3 mb-6 text-sm flex-1">
        <div>
          <p className="text-gray-500 dark:text-gray-400 text-xs">Issued Date</p>
          <p className="font-medium text-gray-700 dark:text-gray-200">{invoice.issuedDate}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-500 dark:text-gray-400 text-xs">Due Date</p>
          <p className="font-medium text-gray-700 dark:text-gray-200">{invoice.dueDate}</p>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400 text-xs">Amount Paid</p>
          <p className="font-medium text-gray-700 dark:text-gray-200">${invoice.amountPaid.toFixed(2)}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-500 dark:text-gray-400 text-xs">Amount Due</p>
          <p className="font-semibold text-primary-600 dark:text-primary-500">${invoice.amountDue.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex gap-2 mt-auto">
        <button className="flex-1 py-2 px-3 border border-gray-200 dark:border-gray-700 rounded-md text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center justify-center gap-1.5">
          <Icons.View size={14} /> View
        </button>
        <button className="flex-1 py-2 px-3 border border-gray-200 dark:border-gray-700 rounded-md text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center justify-center gap-1.5">
          {isPaid ? <Icons.Download size={14} /> : <Icons.Send size={14} />} 
          {isPaid ? 'PDF' : 'Remind'}
        </button>
      </div>
    </div>
  );
};