
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Transaction } from '@/entities/Transaction';

interface TransactionFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (transaction: Omit<Transaction, 'id'>) => Promise<boolean>;
  transaction?: Transaction;
  mode: 'add' | 'edit';
}

const accounts = [
  'Cash',
  'Supply',
  'Service Revenue',
  'Expenses',
  'Other'
];

export const TransactionForm = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  transaction, 
  mode 
}: TransactionFormProps) => {
  const [formData, setFormData] = useState({
    date: '',
    reference: '',
    transactionName: '',
    account: '',
    debitAmount: '',
    creditAmount: '',
    category: '' as 'Supply' | 'Cash' | 'Service Revenue' | 'Other' | '',
    description: ''
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (transaction && mode === 'edit') {
      setFormData({
        date: transaction.date,
        reference: transaction.reference,
        transactionName: transaction.transactionName,
        account: transaction.account,
        debitAmount: transaction.debitAmount?.toString() || '',
        creditAmount: transaction.creditAmount?.toString() || '',
        category: transaction.category || '',
        description: ''
      });
    } else {
      // Reset form for add mode
      const today = new Date().toLocaleDateString('en-GB', { 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric' 
      });
      setFormData({
        date: today,
        reference: '',
        transactionName: '',
        account: '',
        debitAmount: '',
        creditAmount: '',
        category: '',
        description: ''
      });
    }
  }, [transaction, mode, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const transactionData: Omit<Transaction, 'id'> = {
      date: formData.date,
      reference: formData.reference,
      transactionName: formData.transactionName,
      account: formData.account,
      debitAmount: formData.debitAmount ? parseFloat(formData.debitAmount) : undefined,
      creditAmount: formData.creditAmount ? parseFloat(formData.creditAmount) : undefined,
      category: formData.category || undefined
    };

    const success = await onSubmit(transactionData);
    setLoading(false);

    if (success) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {mode === 'add' ? 'Add Transaction' : 'Edit Transaction'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="transactionName">Transaction Name *</Label>
              <Input
                id="transactionName"
                value={formData.transactionName}
                onChange={(e) => setFormData(prev => ({ ...prev, transactionName: e.target.value }))}
                placeholder="e.g. Paying Employee Salaries"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Amount *</Label>
              <Input
                id="amount"
                type="number"
                value={formData.debitAmount || formData.creditAmount}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData(prev => ({ 
                    ...prev, 
                    debitAmount: value,
                    creditAmount: ''
                  }));
                }}
                placeholder="0"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Lorem ipsum dolor sit amet"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="debitAccount">Debit</Label>
              <Label className="text-sm text-muted-foreground">Select Account *</Label>
              <Select
                value={formData.account}
                onValueChange={(value) => setFormData(prev => ({ ...prev, account: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select account" />
                </SelectTrigger>
                <SelectContent>
                  {accounts.map((account) => (
                    <SelectItem key={account} value={account}>
                      {account}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="creditAccount">Credit</Label>
              <Label className="text-sm text-muted-foreground">Select Account *</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData(prev => ({ ...prev, category: value as any }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select account" />
                </SelectTrigger>
                <SelectContent>
                  {accounts.map((account) => (
                    <SelectItem key={account} value={account}>
                      {account}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Saving...' : mode === 'add' ? 'Confirm' : 'Save'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
