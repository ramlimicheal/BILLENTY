export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  price: number;
}

export interface Invoice {
  id: string;
  number: string;
  status: 'Paid' | 'Pending' | 'Overdue' | 'Draft';
  clientName: string;
  clientType: string; // e.g., "Training", "Workshop"
  issuedDate: string;
  dueDate: string;
  amountPaid: number;
  amountDue: number;
  items: InvoiceItem[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer' | 'Accountant';
  status: 'Active' | 'Invited' | 'Disabled';
  lastActive: string;
  avatarUrl?: string;
}

export interface Stat {
  label: string;
  value: number;
  trend: number; // percentage
  trendDirection: 'up' | 'down';
  countLabel?: string; // e.g. "Drafts (2)"
}

export enum Tab {
  INVOICE = 'Invoice',
  PAID = 'Paid',
  REPEATING = 'Repeating',
}

export enum Page {
  DASHBOARD = 'Dashboard',
  ACCOUNTS = 'Accounts',
}