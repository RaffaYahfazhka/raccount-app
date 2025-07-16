
import React, { useState } from 'react';
import { Plus, Search, Eye, Edit } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { AccountTable } from '@/components/modules/AccountTable/AccountTable';
import { AccountSearch } from '@/components/modules/AccountSearch/AccountSearch';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAccounts } from '@/hooks/useAccounts';
import { Account } from '@/entities/Account';
import {
  PageContainer,
  MainContent,
  PageHeader,
  PageTitle,
  SearchSection,
  TableSection,
  LoadingState,
  ErrorState,
  AddButton
} from './Account.styles';

export default function AccountPage() {
  const { accounts, loading, error } = useAccounts();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [showFilter, setShowFilter] = useState(10);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleCategoryChange = (value: string) => {
    setCategoryFilter(value);
  };

  const handleShowChange = (value: string) => {
    setShowFilter(parseInt(value));
  };

  const filteredAccounts = accounts.filter(account => {
    const matchesSearch = account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         account.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         account.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || account.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const displayedAccounts = filteredAccounts.slice(0, showFilter);

  return (
    <PageContainer>
      <Header />
      
      <MainContent>
        <PageHeader>
          <PageTitle>Accounts</PageTitle>
        </PageHeader>

        <SearchSection>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search code, account name, category"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Account Category</span>
                <Select value={categoryFilter} onValueChange={handleCategoryChange}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="Asset">Asset</SelectItem>
                    <SelectItem value="Liability">Liability</SelectItem>
                    <SelectItem value="Equity">Equity</SelectItem>
                    <SelectItem value="Revenue">Revenue</SelectItem>
                    <SelectItem value="Expense">Expense</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Show</span>
                <Select value={showFilter.toString()} onValueChange={handleShowChange}>
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </SearchSection>

        {error && (
          <ErrorState>
            Error: {error}
          </ErrorState>
        )}

        <TableSection>
          {loading ? (
            <LoadingState>Loading accounts...</LoadingState>
          ) : (
            <AccountTable accounts={displayedAccounts} />
          )}
        </TableSection>

        <AddButton>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Plus className="h-4 w-4 mr-2" />
            Tambah akun
          </Button>
        </AddButton>
      </MainContent>
    </PageContainer>
  );
}
