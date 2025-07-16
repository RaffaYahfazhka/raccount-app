
import React, { useState } from 'react';
import { Eye, Edit, Trash2, Power } from 'lucide-react';
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { AccountForm } from '@/components/modules/AccountForm/AccountForm';
import { AccountDeleteDialog } from '@/components/modules/AccountDeleteDialog/AccountDeleteDialog';
import { AccountDeactivateDialog } from '@/components/modules/AccountDeactivateDialog/AccountDeactivateDialog';
import {
  TableContainer,
  ActionCell,
  CodeCell,
  CategoryCell
} from './AccountTable.styles';

interface AccountTableProps {
  accounts: Account[];
  onEdit: (account: Account) => void;
  onDelete: (accountId: string) => void;
  onDeactivate: (accountId: string) => void;
}

export const AccountTable = ({ accounts, onEdit, onDelete, onDeactivate }: AccountTableProps) => {
  const [editingAccount, setEditingAccount] = useState<Account | null>(null);
  const [deletingAccount, setDeletingAccount] = useState<Account | null>(null);
  const [deactivatingAccount, setDeactivatingAccount] = useState<Account | null>(null);

  const handleDetail = (account: Account) => {
    console.log('View detail for account:', account);
  };

  const handleEdit = (account: Account) => {
    setEditingAccount(account);
  };

  const handleEditSubmit = (data: any) => {
    if (editingAccount) {
      onEdit({ ...editingAccount, ...data });
      setEditingAccount(null);
    }
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
    <>
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
                      <span className="hidden sm:inline ml-1">Detail</span>
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-600 hover:text-gray-700 hover:bg-gray-50"
                        >
                          <Edit className="h-4 w-4" />
                          <span className="hidden sm:inline ml-1">Edit</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-white shadow-lg border">
                        <DropdownMenuItem onClick={() => handleEdit(account)}>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Account
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => setDeletingAccount(account)}
                          className="text-red-600"
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Account
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => setDeactivatingAccount(account)}
                          className="text-orange-600"
                        >
                          <Power className="h-4 w-4 mr-2" />
                          Deactivate Account
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </ActionCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <AccountForm
        open={!!editingAccount}
        onClose={() => setEditingAccount(null)}
        account={editingAccount}
        onSubmit={handleEditSubmit}
      />

      <AccountDeleteDialog
        open={!!deletingAccount}
        onClose={() => setDeletingAccount(null)}
        account={deletingAccount}
        onConfirm={onDelete}
      />

      <AccountDeactivateDialog
        open={!!deactivatingAccount}
        onClose={() => setDeactivatingAccount(null)}
        account={deactivatingAccount}
        onConfirm={onDeactivate}
      />
    </>
  );
};
