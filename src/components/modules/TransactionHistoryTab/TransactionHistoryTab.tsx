
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Container,
  FilterSection,
  DateInputs,
  TransactionTable,
  TableHeader,
  TableBody,
  TableRow,
  TableCell
} from './TransactionHistoryTab.styles';

interface TransactionHistoryTabProps {
  accountId: string;
  accountName: string;
}

// Mock transaction data
const transactions = [
  { date: '01 Jun 2025', reference: 'BUY-002', name: 'Buying supplies', debit: 'Supply 150,000,000', credit: 'Cash 150,000,000' },
  { date: '01 Jun 2025', reference: 'BUY-001', name: 'Buying supplies', debit: 'Supply 150,000,000', credit: 'Cash 150,000,000' },
  { date: '31 Des 2024', reference: 'REV-001', name: 'Product sales', debit: 'Cash 500,000', credit: 'Revenue 500,000' },
  { date: '30 Des 2024', reference: 'WAG-001', name: 'Paying wages', debit: 'Supply 150,000,000', credit: 'Cash 150,000,000' },
];

export const TransactionHistoryTab = ({ accountId, accountName }: TransactionHistoryTabProps) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showItems, setShowItems] = useState('10');

  return (
    <Container>
      <FilterSection>
        <DateInputs>
          <div>
            <label>Start Date</label>
            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="Start Date"
            />
          </div>
          <div>
            <label>End Date</label>
            <Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="End Date"
            />
          </div>
          <div>
            <label>Show</label>
            <Select value={showItems} onValueChange={setShowItems}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </DateInputs>
      </FilterSection>

      <TransactionTable>
        <TableHeader>
          <TableRow>
            <TableCell as="th">Date</TableCell>
            <TableCell as="th">Reference Code</TableCell>
            <TableCell as="th">Transaction Name</TableCell>
            <TableCell as="th">Debit</TableCell>
            <TableCell as="th">Credit</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={index}>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.reference}</TableCell>
              <TableCell>{transaction.name}</TableCell>
              <TableCell>{transaction.debit}</TableCell>
              <TableCell>{transaction.credit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TransactionTable>
    </Container>
  );
};
