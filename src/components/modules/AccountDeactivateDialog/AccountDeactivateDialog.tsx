
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

interface AccountDeactivateDialogProps {
  open: boolean;
  onClose: () => void;
  account: Account | null;
  onConfirm: (accountId: string) => void;
}

export const AccountDeactivateDialog = ({ 
  open, 
  onClose, 
  account, 
  onConfirm 
}: AccountDeactivateDialogProps) => {
  const { toast } = useToast();

  const handleConfirm = () => {
    if (account) {
      onConfirm(account.id);
      toast({
        title: 'Account Deactivated',
        description: `Account ${account.name} has been deactivated successfully.`,
      });
      onClose();
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Deactivate account?</AlertDialogTitle>
          <AlertDialogDescription>
            Account will be deactivated instead of deleted, and it'll later
            reactivated by asking the admins.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleConfirm}
            className="bg-red-600 hover:bg-red-700"
          >
            Deactivate
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
