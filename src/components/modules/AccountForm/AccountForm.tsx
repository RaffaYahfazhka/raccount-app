
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Account } from '@/entities/Account';
import { useToast } from '@/hooks/use-toast';

const accountSchema = z.object({
  code: z.string().min(1, 'Account code is required'),
  name: z.string().min(1, 'Account name is required'),
  category: z.enum(['Asset', 'Liability', 'Equity', 'Revenue', 'Expense']),
  description: z.string().optional(),
});

type AccountFormData = z.infer<typeof accountSchema>;

interface AccountFormProps {
  open: boolean;
  onClose: () => void;
  account?: Account;
  onSubmit: (data: AccountFormData) => void;
}

const subcategoryOptions = {
  Asset: ['Current Asset', 'Fixed Asset', 'Other Asset'],
  Liability: ['Current Liability', 'Long-term Liability', 'Other Liability'],
  Equity: ['Owner\'s Equity', 'Retained Earnings', 'Other Equity'],
  Revenue: ['Sales Revenue', 'Service Revenue', 'Other Revenue'],
  Expense: ['Operating Expense', 'Administrative Expense', 'Other Expense']
};

export const AccountForm = ({ open, onClose, account, onSubmit }: AccountFormProps) => {
  const { toast } = useToast();
  const isEdit = !!account;

  const form = useForm<AccountFormData>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      code: account?.code || '',
      name: account?.name || '',
      category: account?.category || 'Asset',
      description: account?.description || '',
    },
  });

  const selectedCategory = form.watch('category');

  const handleSubmit = (data: AccountFormData) => {
    try {
      onSubmit(data);
      toast({
        title: isEdit ? 'Account Updated' : 'Account Created',
        description: `Account ${data.name} has been ${isEdit ? 'updated' : 'created'} successfully.`,
      });
      onClose();
      form.reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: `Failed to ${isEdit ? 'update' : 'create'} account.`,
        variant: 'destructive',
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isEdit ? 'Edit Account' : 'Create Account'}</DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account Name*</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter account name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Opening Balance</FormLabel>
                    <FormControl>
                      <Input placeholder="0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category*</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Asset">Asset</SelectItem>
                        <SelectItem value="Liability">Liability</SelectItem>
                        <SelectItem value="Equity">Equity</SelectItem>
                        <SelectItem value="Revenue">Revenue</SelectItem>
                        <SelectItem value="Expense">Expense</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormItem>
                <FormLabel>Subcategory*</FormLabel>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select subcategory" />
                  </SelectTrigger>
                  <SelectContent>
                    {subcategoryOptions[selectedCategory]?.map((sub) => (
                      <SelectItem key={sub} value={sub}>
                        {sub}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter description" 
                      className="resize-none" 
                      rows={3}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-3 pt-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              {isEdit && (
                <Button type="button" variant="destructive">
                  Delete Account
                </Button>
              )}
              <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
                {isEdit ? 'Confirm' : 'Confirm'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
