
import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Account } from '@/entities/Account';
import { useToast } from '@/hooks/use-toast';

interface AccountDeleteDialogProps {
  open: boolean;
  onClose: () => void;
  account: Account | null;
  onConfirm: (accountId: string) => void;
}

export const AccountDeleteDialog = ({ 
  open, 
  onClose, 
  account, 
  onConfirm 
}: AccountDeleteDialogProps) => {
  const { toast } = useToast();

  const handleConfirm = () => {
    if (account) {
      onConfirm(account.id);
      toast({
        title: 'Account Deleted',
        description: `Account ${account.name} has been deleted successfully.`,
      });
      onClose();
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm to delete account?</AlertDialogTitle>
          <AlertDialogDescription>
            Account will be deleted
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleConfirm}
            className="bg-red-600 hover:bg-red-700"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
