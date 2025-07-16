
import { Transaction, TransactionFilter, PaginationInfo } from '@entities/Transaction';

export class TransactionClient {
  private baseUrl: string;

  constructor(baseUrl: string = '/api') {
    this.baseUrl = baseUrl;
  }

  async getTransactions(
    filter?: TransactionFilter,
    page: number = 1,
    limit: number = 10
  ): Promise<{ transactions: Transaction[]; pagination: PaginationInfo }> {
    // Simulate API call with dummy data for now
    return new Promise((resolve) => {
      setTimeout(() => {
        const dummyTransactions: Transaction[] = [
          {
            id: '1',
            date: '27 Jan 2025',
            reference: 'PAY-001',
            transactionName: 'Buying supplies',
            account: 'Supply',
            debitAmount: 150000000,
            category: 'Supply'
          },
          {
            id: '2',
            date: '27 Jan 2025',
            reference: 'PAY-001',
            transactionName: 'Buying supplies',
            account: 'Cash',
            creditAmount: 150000000,
            category: 'Cash'
          },
          {
            id: '3',
            date: '28 Jan 2025',
            reference: 'REV-001',
            transactionName: 'Service sales',
            account: 'Cash',
            debitAmount: 5000000,
            category: 'Cash'
          },
          {
            id: '4',
            date: '28 Jan 2025',
            reference: 'REV-001',
            transactionName: 'Service sales',
            account: 'Service Revenue',
            creditAmount: 5000000,
            category: 'Service Revenue'
          }
        ];

        resolve({
          transactions: dummyTransactions,
          pagination: {
            currentPage: page,
            totalPages: 1,
            itemsPerPage: limit,
            totalItems: dummyTransactions.length
          }
        });
      }, 500);
    });
  }

  async createTransaction(transaction: Omit<Transaction, 'id'>): Promise<Transaction> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ...transaction,
          id: Date.now().toString()
        });
      }, 500);
    });
  }

  async updateTransaction(id: string, transaction: Partial<Transaction>): Promise<Transaction> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id,
          date: '29 Jan 2025',
          reference: 'UPD-001',
          transactionName: 'Updated transaction',
          account: 'Cash',
          debitAmount: 1000000,
          ...transaction
        });
      }, 500);
    });
  }

  async deleteTransaction(id: string): Promise<void> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  }
}

export const transactionClient = new TransactionClient();
