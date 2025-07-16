import { transactionClient } from '@/clients/TransactionClient';
import { Transaction, TransactionFilter } from '@/entities/Transaction';

export class TransactionController {
  async getFilteredTransactions(
    filter?: TransactionFilter,
    page: number = 1,
    limit: number = 10
  ) {
    try {
      const result = await transactionClient.getTransactions(filter, page, limit);
      return {
        success: true,
        data: result,
        error: null
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
    }
  }

  async addTransaction(transactionData: Omit<Transaction, 'id'>) {
    try {
      const newTransaction = await transactionClient.createTransaction(transactionData);
      return {
        success: true,
        data: newTransaction,
        error: null
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        error: error instanceof Error ? error.message : 'Failed to create transaction'
      };
    }
  }

  async editTransaction(id: string, updates: Partial<Transaction>) {
    try {
      const updatedTransaction = await transactionClient.updateTransaction(id, updates);
      return {
        success: true,
        data: updatedTransaction,
        error: null
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        error: error instanceof Error ? error.message : 'Failed to update transaction'
      };
    }
  }

  async removeTransaction(id: string) {
    try {
      await transactionClient.deleteTransaction(id);
      return {
        success: true,
        data: null,
        error: null
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        error: error instanceof Error ? error.message : 'Failed to delete transaction'
      };
    }
  }

  validateTransactionData(data: Partial<Transaction>): string[] {
    const errors: string[] = [];

    if (!data.date) errors.push('Date is required');
    if (!data.reference) errors.push('Reference is required');
    if (!data.transactionName) errors.push('Transaction name is required');
    if (!data.account) errors.push('Account is required');
    if (!data.debitAmount && !data.creditAmount) {
      errors.push('Either debit or credit amount is required');
    }

    return errors;
  }
}

export const transactionController = new TransactionController();
