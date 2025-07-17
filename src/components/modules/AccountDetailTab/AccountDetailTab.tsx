
import React from 'react';
import { Account } from '@/entities/Account';
import { Button } from '@/components/ui/button';
import {
  Container,
  ContentGrid,
  DetailSection,
  BalanceSection,
  DetailItem,
  Label,
  Value,
  BalanceTable,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  ActionButtons
} from './AccountDetailTab.styles';

interface AccountDetailTabProps {
  account: Account;
}

// Mock balance data
const balanceHistory = [
  { period: 'Jan 2025', openingBalance: 1000000000, totalDebit: 20000000, totalCredit: 15000000, closingBalance: 15000000 },
  { period: 'Des 2024', openingBalance: 1000000000, totalDebit: 20000000, totalCredit: 15000000, closingBalance: 15000000 },
  { period: 'Nov 2024', openingBalance: 1000000000, totalDebit: 20000000, totalCredit: 15000000, closingBalance: 15000000 },
  { period: 'Okt 2024', openingBalance: 1000000000, totalDebit: 20000000, totalCredit: 15000000, closingBalance: 15000000 },
];

export const AccountDetailTab = ({ account }: AccountDetailTabProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID').format(amount);
  };

  const getSubcategory = (category: string) => {
    switch (category) {
      case 'Asset':
        return 'Current Asset';
      case 'Liability':
        return 'Current Liability';
      case 'Equity':
        return 'Owner Equity';
      case 'Revenue':
        return 'Operating Revenue';
      case 'Expense':
        return 'Operating Expense';
      default:
        return category;
    }
  };

  return (
    <Container>
      <ContentGrid>
        <DetailSection>
          <h3>Account Detail</h3>
          <DetailItem>
            <Label>Code</Label>
            <Value>{account.code}</Value>
          </DetailItem>
          <DetailItem>
            <Label>Name</Label>
            <Value>{account.name}</Value>
          </DetailItem>
          <DetailItem>
            <Label>Status</Label>
            <Value>Active</Value>
          </DetailItem>
          <DetailItem>
            <Label>Category</Label>
            <Value>{account.category}</Value>
          </DetailItem>
          <DetailItem>
            <Label>Subcategory</Label>
            <Value>{getSubcategory(account.category)}</Value>
          </DetailItem>
          <DetailItem>
            <Label>Description</Label>
            <Value>{account.description || 'Hard cash'}</Value>
          </DetailItem>
          <DetailItem>
            <Label>Created By</Label>
            <Value>
              Ahmad (admin)
              <br />
              <small>27 Feb 2025 - 07:01</small>
            </Value>
          </DetailItem>
        </DetailSection>

        <BalanceSection>
          <div className="flex justify-between items-center mb-4">
            <h3>Account Balance</h3>
            <div className="flex gap-2 text-sm">
              <span>Period Range</span>
              <select className="border rounded px-2 py-1">
                <option>1 Month</option>
                <option>3 Months</option>
                <option>6 Months</option>
                <option>1 Year</option>
              </select>
              <span>Show</span>
              <select className="border rounded px-2 py-1">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
            </div>
          </div>
          
          <BalanceTable>
            <TableHeader>
              <TableRow>
                <TableCell as="th">Period</TableCell>
                <TableCell as="th">Opening Balance</TableCell>
                <TableCell as="th">Total Debit</TableCell>
                <TableCell as="th">Total Credit</TableCell>
                <TableCell as="th">Closing Balance</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {balanceHistory.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.period}</TableCell>
                  <TableCell>{formatCurrency(item.openingBalance)}</TableCell>
                  <TableCell>{formatCurrency(item.totalDebit)}</TableCell>
                  <TableCell>{formatCurrency(item.totalCredit)}</TableCell>
                  <TableCell>{formatCurrency(item.closingBalance)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </BalanceTable>
        </BalanceSection>
      </ContentGrid>

      <ActionButtons>
        <Button variant="destructive">Hapus</Button>
        <Button className="bg-emerald-600 hover:bg-emerald-700">Edit</Button>
      </ActionButtons>
    </Container>
  );
};
