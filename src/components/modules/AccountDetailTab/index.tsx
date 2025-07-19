
import React from 'react';
import { useTranslation } from 'react-i18next';
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
} from './styles';

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
  const { t } = useTranslation();

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
          <h3>{t('account.detail.title')}</h3>
          <DetailItem>
            <Label>{t('account.detail.code')}</Label>
            <Value>{account.code}</Value>
          </DetailItem>
          <DetailItem>
            <Label>{t('account.detail.name')}</Label>
            <Value>{account.name}</Value>
          </DetailItem>
          <DetailItem>
            <Label>{t('account.detail.status')}</Label>
            <Value>{t('account.detail.active')}</Value>
          </DetailItem>
          <DetailItem>
            <Label>{t('account.detail.category')}</Label>
            <Value>{account.category}</Value>
          </DetailItem>
          <DetailItem>
            <Label>{t('account.detail.subcategory')}</Label>
            <Value>{getSubcategory(account.category)}</Value>
          </DetailItem>
          <DetailItem>
            <Label>{t('account.detail.description')}</Label>
            <Value>{account.description || 'Hard cash'}</Value>
          </DetailItem>
          <DetailItem>
            <Label>{t('account.detail.createdBy')}</Label>
            <Value>
              Ahmad (admin)
              <br />
              <small>27 Feb 2025 - 07:01</small>
            </Value>
          </DetailItem>
        </DetailSection>

        <BalanceSection>
          <div className="flex justify-between items-center mb-4">
            <h3>{t('account.detail.balance.title')}</h3>
            <div className="flex gap-2 text-sm">
              <span>{t('account.detail.balance.periodRange')}</span>
              <select className="border rounded px-2 py-1">
                <option>1 Month</option>
                <option>3 Months</option>
                <option>6 Months</option>
                <option>1 Year</option>
              </select>
              <span>{t('account.detail.balance.show')}</span>
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
                <TableCell as="th">{t('account.detail.balance.period')}</TableCell>
                <TableCell as="th">{t('account.detail.balance.openingBalance')}</TableCell>
                <TableCell as="th">{t('account.detail.balance.totalDebit')}</TableCell>
                <TableCell as="th">{t('account.detail.balance.totalCredit')}</TableCell>
                <TableCell as="th">{t('account.detail.balance.closingBalance')}</TableCell>
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
        <Button variant="destructive">{t('common.delete')}</Button>
        <Button className="bg-emerald-600 hover:bg-emerald-700">{t('common.edit')}</Button>
      </ActionButtons>
    </Container>
  );
};
