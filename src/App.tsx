
'use client';

import { useState } from 'react';
import styled from '@emotion/styled';
import { Plus, FileText } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { TransactionTable } from '@/components/modules/TransactionTable';
import { AdvancedSearch } from '@/components/modules/AdvancedSearch';
import { TransactionForm } from '@/components/modules/TransactionForm';
import { DeleteTransactionDialog } from '@/components/modules/DeleteTransactionDialog';
import { Button } from '@/components/common/Button';
import { useTransactions } from '@/hooks/useTransactions';
import { Transaction, TransactionFilter } from '@/entities/Transaction';
import { theme } from '@/styles/theme';
import { useToast } from '@/hooks/use-toast';

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
    addTransaction,
    editTransaction,
    deleteTransaction
  } = useTransactions();

  const { toast } = useToast();
  const [currentFilters, setCurrentFilters] = useState<TransactionFilter>({});
  const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | undefined>();
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleSearch = async (filters: TransactionFilter) => {
    setCurrentFilters(filters);
    await fetchTransactions(filters);
  };

  const handleReset = async () => {
    setCurrentFilters({});
    await fetchTransactions();
  };

  const handleAddTransaction = () => {
    setFormMode('add');
    setSelectedTransaction(undefined);
    setIsFormOpen(true);
  };

  const handleEditTransaction = (transaction: Transaction) => {
    setFormMode('edit');
    setSelectedTransaction(transaction);
    setIsFormOpen(true);
  };

  const handleDeleteTransaction = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setIsDeleteDialogOpen(true);
  };

  const handleFormSubmit = async (transactionData: Omit<Transaction, 'id'>) => {
    try {
      let success = false;
      
      if (formMode === 'add') {
        success = await addTransaction(transactionData);
        if (success) {
          toast({
            title: "Success",
            description: "Transaction added successfully",
          });
        }
      } else if (formMode === 'edit' && selectedTransaction) {
        success = await editTransaction(selectedTransaction.id, transactionData);
        if (success) {
          toast({
            title: "Success",
            description: "Transaction updated successfully",
          });
        }
      }
      
      return success;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save transaction",
        variant: "destructive",
      });
      return false;
    }
  };

  const handleConfirmDelete = async () => {
    if (!selectedTransaction) return;
    
    setDeleteLoading(true);
    const success = await deleteTransaction(selectedTransaction.id);
    setDeleteLoading(false);
    
    if (success) {
      toast({
        title: "Success",
        description: "Transaction deleted successfully",
      });
      setIsDeleteDialogOpen(false);
      setSelectedTransaction(undefined);
    } else {
      toast({
        title: "Error",
        description: "Failed to delete transaction",
        variant: "destructive",
      });
    }
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
              onClick={handleAddTransaction}
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
            <TransactionTable 
              transactions={transactions}
              onEdit={handleEditTransaction}
              onDelete={handleDeleteTransaction}
            />
          )}
        </TableSection>

        <TransactionForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleFormSubmit}
          transaction={selectedTransaction}
          mode={formMode}
        />

        <DeleteTransactionDialog
          isOpen={isDeleteDialogOpen}
          onClose={() => setIsDeleteDialogOpen(false)}
          onConfirm={handleConfirmDelete}
          loading={deleteLoading}
        />
      </MainContent>
    </PageContainer>
  );
}
