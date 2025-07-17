
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Calendar } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAccounts } from '@/hooks/useAccounts';
import { AccountDetailTab } from '@/components/modules/AccountDetailTab/AccountDetailTab';
import { TransactionHistoryTab } from '@/components/modules/TransactionHistoryTab/TransactionHistoryTab';
import {
  PageContainer,
  MainContent,
  BackButton,
  AccountHeader,
  AccountTitle,
  TabContainer,
  TabButton,
  TabContent
} from './AccountDetail.styles';

export default function AccountDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { accounts } = useAccounts();
  const [activeTab, setActiveTab] = useState<'detail' | 'history'>('detail');

  const account = accounts.find(acc => acc.id === id);

  if (!account) {
    return (
      <PageContainer>
        <Header />
        <MainContent>
          <div className="text-center py-8">
            <p className="text-gray-500">Account not found</p>
            <Button onClick={() => navigate('/account')} className="mt-4">
              Back to Accounts
            </Button>
          </div>
        </MainContent>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header />
      
      <MainContent>
        <BackButton onClick={() => navigate('/account')}>
          <ChevronLeft className="h-4 w-4" />
        </BackButton>

        <AccountHeader>
          <AccountTitle>{account.name}</AccountTitle>
        </AccountHeader>

        <TabContainer>
          <TabButton 
            active={activeTab === 'detail'}
            onClick={() => setActiveTab('detail')}
          >
            Account Detail
          </TabButton>
          <TabButton 
            active={activeTab === 'history'}
            onClick={() => setActiveTab('history')}
          >
            Transaction History
          </TabButton>
        </TabContainer>

        <TabContent>
          {activeTab === 'detail' ? (
            <AccountDetailTab account={account} />
          ) : (
            <TransactionHistoryTab accountId={account.id} accountName={account.name} />
          )}
        </TabContent>
      </MainContent>
    </PageContainer>
  );
}
