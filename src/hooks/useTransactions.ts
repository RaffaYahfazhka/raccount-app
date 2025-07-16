
import { useState, useEffect } from 'react';
import { transactionController } from '@controllers/TransactionController';
import { Transaction, TransactionFilter } from '@entities/Transaction';

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchTransactions = async (filters?: TransactionFilter, page: number = 1) => {
    setLoading(true);
    setError(null);

    const result = await transactionController.getFilteredTransactions(filters, page, 10);

    if (result.success && result.data) {
      setTransactions(result.data.transactions);
      setTotalPages(result.data.pagination.totalPages);
      setCurrentPage(page);
    } else {
      setError(result.error || 'Failed to fetch transactions');
    }

    setLoading(false);
  };

  const addTransaction = async (transactionData: Omit<Transaction, 'id'>) => {
    const result = await transactionController.addTransaction(transactionData);
    
    if (result.success) {
      // Refresh the transaction list
      await fetchTransactions();
      return true;
    } else {
      setError(result.error || 'Failed to add transaction');
      return false;
    }
  };

  const deleteTransaction = async (id: string) => {
    const result = await transactionController.removeTransaction(id);
    
    if (result.success) {
      // Refresh the transaction list
      await fetchTransactions();
      return true;
    } else {
      setError(result.error || 'Failed to delete transaction');
      return false;
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return {
    transactions,
    loading,
    error,
    currentPage,
    totalPages,
    fetchTransactions,
    addTransaction,
    deleteTransaction,
    refetch: () => fetchTransactions()
  };
};
