import React from 'react';
import { 
  LayoutGrid, 
  ShoppingCart, 
  Users, 
  PieChart, 
  Search, 
  Bell, 
  HelpCircle, 
  Plus, 
  ChevronDown, 
  Calendar, 
  CheckCircle, 
  Building2, 
  Eye, 
  Download,
  Hourglass,
  Send,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Sun,
  Moon
} from 'lucide-react';

export const Icons = {
  Dashboard: LayoutGrid,
  Sales: ShoppingCart,
  Users: Users,
  Reports: PieChart,
  Search: Search,
  Notification: Bell,
  Help: HelpCircle,
  Plus: Plus,
  ChevronDown: ChevronDown,
  Calendar: Calendar,
  CheckCircle: CheckCircle,
  Business: Building2,
  View: Eye,
  Download: Download,
  Pending: Hourglass,
  Send: Send,
  ArrowUp: ArrowUpRight,
  ArrowDown: ArrowDownRight,
  More: MoreHorizontal,
  Sun: Sun,
  Moon: Moon
};

export type IconName = keyof typeof Icons;