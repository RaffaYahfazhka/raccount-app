
'use client';

import { useState } from 'react';
import styled from '@emotion/styled';
import { Plus, FileText } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { TransactionTable } from '@/components/modules/TransactionTable';
import { AdvancedSearch } from '@/components/modules/AdvancedSearch';
import { Button } from '@/components/common/Button';
import { useTransactions } from '@/hooks/useTransactions';
import { TransactionFilter } from '@/entities/Transaction';
import { theme } from '@/styles/theme';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.gray[50]};
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.xl};
`;

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${theme.spacing.xl};
`;

const PageTitle = styled.h2`
  color: ${theme.colors.gray[800]};
  font-size: ${theme.fontSize['2xl']};
  font-weight: ${theme.fontWeight.semibold};
  margin: 0;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
`;

const TableSection = styled.section`
  margin-bottom: ${theme.spacing.xl};
`;

const LoadingState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing['2xl']};
  color: ${theme.colors.gray[500]};
`;

const ErrorState = styled.div`
  background-color: ${theme.colors.error}20;
  border: 1px solid ${theme.colors.error};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md};
  color: ${theme.colors.error};
  margin-bottom: ${theme.spacing.lg};
`;

export default function App() {
  const {
    transactions,
    loading,
    error,
    fetchTransactions,
    addTransaction
  } = useTransactions();

  const [currentFilters, setCurrentFilters] = useState<TransactionFilter>({});

  const handleSearch = async (filters: TransactionFilter) => {
    setCurrentFilters(filters);
    await fetchTransactions(filters);
  };

  const handleReset = async () => {
    setCurrentFilters({});
    await fetchTransactions();
  };

  const handleAddEntry = () => {
    // This would typically open a modal or navigate to a form page
    console.log('Add Entry clicked');
    // For demo purposes, let's add a sample transaction
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-GB', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    });
    
    addTransaction({
      date: formattedDate,
      reference: 'NEW-001',
      transactionName: 'New transaction',
      account: 'Cash',
      debitAmount: 1000000,
      category: 'Cash'
    });
  };

  const handleAddTransaction = () => {
    console.log('Add Transaction clicked');
    // Similar to above, this would open a transaction form
  };

  return (
    <PageContainer>
      <Header />
      
      <MainContent>
        <PageHeader>
          <PageTitle>General Ledger</PageTitle>
          <ActionButtons>
            <Button 
              variant="outline" 
              onClick={handleAddEntry}
            >
              <Plus size={16} style={{ marginRight: theme.spacing.xs }} />
              Add Entry
            </Button>
            <Button onClick={handleAddTransaction}>
              <FileText size={16} style={{ marginRight: theme.spacing.xs }} />
              Add Transaction
            </Button>
          </ActionButtons>
        </PageHeader>

        <AdvancedSearch 
          onSearch={handleSearch}
          onReset={handleReset}
        />

        {error && (
          <ErrorState>
            Error: {error}
          </ErrorState>
        )}

        <TableSection>
          {loading ? (
            <LoadingState>Loading transactions...</LoadingState>
          ) : (
            <TransactionTable transactions={transactions} />
          )}
        </TableSection>
      </MainContent>
    </PageContainer>
  );
}
