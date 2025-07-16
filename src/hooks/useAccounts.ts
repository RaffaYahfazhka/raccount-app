
import { useState, useEffect } from 'react';
import { Account } from '@/entities/Account';

// Mock data for accounts
const mockAccounts: Account[] = [
  {
    id: '1',
    code: '1001',
    name: 'Inventory',
    category: 'Asset',
    balance: 0,
    description: 'Office equipments'
  },
  {
    id: '2',
    code: '1002',
    name: 'Cash',
    category: 'Asset',
    balance: 0,
    description: 'Cash'
  },
  {
    id: '3',
    code: '2001',
    name: 'Debt to Supplier',
    category: 'Liability',
    balance: 0,
    description: 'PT Sumber Utama'
  },
  {
    id: '4',
    code: '3001',
    name: 'Employee Wage',
    category: 'Expense',
    balance: 0,
    description: 'Wage, salary'
  },
  {
    id: '5',
    code: '4001',
    name: 'Service Sales',
    category: 'Revenue',
    balance: 0,
    description: 'Service revenue'
  }
];

export const useAccounts = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAccounts = async () => {
    setLoading(true);
    setError(null);

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      setAccounts(mockAccounts);
    } catch (err) {
      setError('Failed to fetch accounts');
    } finally {
      setLoading(false);
    }
  };

  const addAccount = async (account: Account) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      setAccounts(prev => [...prev, account]);
    } catch (err) {
      setError('Failed to add account');
    }
  };

  const updateAccount = async (updatedAccount: Account) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      setAccounts(prev => 
        prev.map(account => 
          account.id === updatedAccount.id ? updatedAccount : account
        )
      );
    } catch (err) {
      setError('Failed to update account');
    }
  };

  const deleteAccount = async (accountId: string) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      setAccounts(prev => prev.filter(account => account.id !== accountId));
    } catch (err) {
      setError('Failed to delete account');
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  return {
    accounts,
    loading,
    error,
    refetch: fetchAccounts,
    addAccount,
    updateAccount,
    deleteAccount
  };
};
