
import styled from '@emotion/styled';
import { Pencil, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { theme } from '@/styles/theme';
import { Transaction } from '@/entities/Transaction';

const TableContainer = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.sm};
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: ${theme.colors.gray[50]};
`;

const TableHeaderCell = styled.th`
  padding: ${theme.spacing.md};
  text-align: left;
  font-weight: ${theme.fontWeight.medium};
  color: ${theme.colors.gray[700]};
  border-bottom: 1px solid ${theme.colors.gray[200]};
  font-size: ${theme.fontSize.sm};
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:hover {
    background-color: ${theme.colors.gray[50]};
  }
`;

const TableCell = styled.td`
  padding: ${theme.spacing.md};
  border-bottom: 1px solid ${theme.colors.gray[100]};
  color: ${theme.colors.gray[800]};
  font-size: ${theme.fontSize.sm};
`;

const AmountCell = styled(TableCell)<{ type?: 'debit' | 'credit' }>`
  text-align: right;
  font-weight: ${theme.fontWeight.medium};
  color: ${({ type }) => 
    type === 'debit' ? theme.colors.error : 
    type === 'credit' ? theme.colors.success : 
    theme.colors.gray[800]
  };
`;

const ActionCell = styled(TableCell)`
  width: 120px;
`;

interface TransactionTableProps {
  transactions: Transaction[];
  onEdit: (transaction: Transaction) => void;
  onDelete: (transaction: Transaction) => void;
}

export const TransactionTable = ({ transactions, onEdit, onDelete }: TransactionTableProps) => {
  const formatCurrency = (amount: number | undefined) => {
    if (!amount) return '';
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <tr>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Reference</TableHeaderCell>
            <TableHeaderCell>Transaction Name</TableHeaderCell>
            <TableHeaderCell>Account</TableHeaderCell>
            <TableHeaderCell>Debit Amount</TableHeaderCell>
            <TableHeaderCell>Credit Amount</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </tr>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.reference}</TableCell>
              <TableCell>{transaction.transactionName}</TableCell>
              <TableCell>{transaction.account}</TableCell>
              <AmountCell type="debit">
                {formatCurrency(transaction.debitAmount)}
              </AmountCell>
              <AmountCell type="credit">
                {formatCurrency(transaction.creditAmount)}
              </AmountCell>
              <ActionCell>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onEdit(transaction)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onDelete(transaction)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </ActionCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
