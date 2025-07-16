
export interface Account {
  id: string;
  name: string;
  category: 'Asset' | 'Liability' | 'Equity' | 'Revenue' | 'Expense';
  code: string;
  balance: number;
  description?: string;
}

export interface AccountSummary {
  totalAssets: number;
  totalLiabilities: number;
  totalEquity: number;
  totalRevenue: number;
  totalExpenses: number;
}
