
import React from 'react';
import { Eye, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Account } from '@/entities/Account';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  TableContainer,
  ActionCell,
  CodeCell,
  CategoryCell
} from './AccountTable.styles';

interface AccountTableProps {
  accounts: Account[];
}

export const AccountTable = ({ accounts }: AccountTableProps) => {
  const handleDetail = (account: Account) => {
    console.log('View detail for account:', account);
  };

  const handleEdit = (account: Account) => {
    console.log('Edit account:', account);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Asset':
        return 'bg-blue-100 text-blue-800';
      case 'Liability':
        return 'bg-red-100 text-red-800';
      case 'Equity':
        return 'bg-purple-100 text-purple-800';
      case 'Revenue':
        return 'bg-green-100 text-green-800';
      case 'Expense':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Code</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Subcategory</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="w-32">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {accounts.map((account) => (
            <TableRow key={account.id}>
              <CodeCell>{account.code}</CodeCell>
              <TableCell className="font-medium">{account.name}</TableCell>
              <CategoryCell>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(account.category)}`}>
                  {account.category}
                </span>
              </CategoryCell>
              <TableCell>{account.category}</TableCell>
              <TableCell>{account.description || '-'}</TableCell>
              <ActionCell>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDetail(account)}
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                  >
                    <Eye className="h-4 w-4" />
                    Detail
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleEdit(account)}
                    className="text-gray-600 hover:text-gray-700 hover:bg-gray-50"
                  >
                    <Edit className="h-4 w-4" />
                    Edit
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
