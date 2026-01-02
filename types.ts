export interface Invoice {
  id: string;
  number: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  clientName: string;
  clientType: string; // e.g., "Training", "Workshop"
  issuedDate: string;
  dueDate: string;
  amountPaid: number;
  amountDue: number;
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