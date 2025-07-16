import { Transaction, TransactionFilter, PaginationInfo } from '@/entities/Transaction';

// Mock data for demonstration purposes
const mockTransactions: Transaction[] = [
  {
    id: '1',
    date: '15 Jul 2024',
    reference: 'TXN-001',
    transactionName: 'Office Supplies Purchase',
    account: 'Supply',
    debitAmount: 500000,
    category: 'Supply'
  },
  {
    id: '2',
    date: '14 Jul 2024',
    reference: 'TXN-002',
    transactionName: 'Cash Receipt',
    account: 'Cash',
    creditAmount: 1000000,
    category: 'Cash'
  },
  {
    id: '3',
    date: '13 Jul 2024',
    reference: 'TXN-003',
    transactionName: 'Service Revenue',
    account: 'Service Revenue',
    creditAmount: 750000,
    category: 'Service Revenue'
  }
];

export class TransactionClient {
  async getTransactions(
    filter?: TransactionFilter,
    page: number = 1,
    limit: number = 10
  ): Promise<{
    transactions: Transaction[];
    pagination: PaginationInfo;
  }> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    let filteredTransactions = [...mockTransactions];

    // Apply filters
    if (filter) {
      if (filter.startDate) {
        filteredTransactions = filteredTransactions.filter(t => 
          new Date(t.date) >= new Date(filter.startDate!)
        );
      }
      if (filter.endDate) {
        filteredTransactions = filteredTransactions.filter(t => 
          new Date(t.date) <= new Date(filter.endDate!)
        );
      }
      if (filter.accountName) {
        filteredTransactions = filteredTransactions.filter(t => 
          t.account.toLowerCase().includes(filter.accountName!.toLowerCase())
        );
      }
      if (filter.minDebitAmount) {
        filteredTransactions = filteredTransactions.filter(t => 
          (t.debitAmount || 0) >= filter.minDebitAmount!
        );
      }
      if (filter.maxDebitAmount) {
        filteredTransactions = filteredTransactions.filter(t => 
          (t.debitAmount || 0) <= filter.maxDebitAmount!
        );
      }
      if (filter.minCreditAmount) {
        filteredTransactions = filteredTransactions.filter(t => 
          (t.creditAmount || 0) >= filter.minCreditAmount!
        );
      }
      if (filter.maxCreditAmount) {
        filteredTransactions = filteredTransactions.filter(t => 
          (t.creditAmount || 0) <= filter.maxCreditAmount!
        );
      }
    }

    // Apply pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedTransactions = filteredTransactions.slice(startIndex, endIndex);

    return {
      transactions: paginatedTransactions,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(filteredTransactions.length / limit),
        itemsPerPage: limit,
        totalItems: filteredTransactions.length
      }
    };
  }

  async createTransaction(transactionData: Omit<Transaction, 'id'>): Promise<Transaction> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));

    const newTransaction: Transaction = {
      ...transactionData,
      id: Date.now().toString()
    };

    mockTransactions.push(newTransaction);
    return newTransaction;
  }

  async updateTransaction(id: string, updates: Partial<Transaction>): Promise<Transaction> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));

    const index = mockTransactions.findIndex(t => t.id === id);
    if (index === -1) {
      throw new Error('Transaction not found');
    }

    mockTransactions[index] = { ...mockTransactions[index], ...updates };
    return mockTransactions[index];
  }

  async deleteTransaction(id: string): Promise<void> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));

    const index = mockTransactions.findIndex(t => t.id === id);
    if (index === -1) {
      throw new Error('Transaction not found');
    }

    mockTransactions.splice(index, 1);
  }
}

export const transactionClient = new TransactionClient();
