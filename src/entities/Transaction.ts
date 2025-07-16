
export interface Transaction {
  id: string;
  date: string;
  reference: string;
  transactionName: string;
  account: string;
  debitAmount?: number;
  creditAmount?: number;
  category?: 'Supply' | 'Cash' | 'Service Revenue' | 'Other';
}

export interface TransactionFilter {
  startDate?: string;
  endDate?: string;
  accountName?: string;
  accountCategory?: string;
  minDebitAmount?: number;
  maxDebitAmount?: number;
  minCreditAmount?: number;
  maxCreditAmount?: number;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
}
