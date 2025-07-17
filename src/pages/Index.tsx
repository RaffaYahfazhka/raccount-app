
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, User, TrendingUp, DollarSign, FileText, BarChart3 } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import {
  PageContainer,
  MainContent,
  HeroSection,
  HeroTitle,
  HeroDescription,
  QuickActions,
  ActionCard,
  ActionIcon,
  ActionTitle,
  ActionDescription,
  StatsSection,
  StatCard,
  StatValue,
  StatLabel,
  StatIcon
} from './Index.styles';

const Index = () => {
  return (
    <PageContainer>
      <Header />
      
      <MainContent>
        <HeroSection>
          <HeroTitle>Welcome to Raccount</HeroTitle>
          <HeroDescription>
            Your comprehensive accounting solution for managing transactions, accounts, and financial records with ease.
          </HeroDescription>
        </HeroSection>

        <QuickActions>
          <ActionCard>
            <Link to="/general-ledger">
              <ActionIcon>
                <BookOpen size={32} />
              </ActionIcon>
              <ActionTitle>General Ledger</ActionTitle>
              <ActionDescription>
                View and manage all your financial transactions in one place
              </ActionDescription>
            </Link>
          </ActionCard>

          <ActionCard>
            <Link to="/account">
              <ActionIcon>
                <User size={32} />
              </ActionIcon>
              <ActionTitle>Accounts</ActionTitle>
              <ActionDescription>
                Manage your chart of accounts and account categories
              </ActionDescription>
            </Link>
          </ActionCard>
        </QuickActions>

        <StatsSection>
          <StatCard>
            <StatIcon>
              <FileText size={24} />
            </StatIcon>
            <StatValue>245</StatValue>
            <StatLabel>Total Transactions</StatLabel>
          </StatCard>

          <StatCard>
            <StatIcon>
              <User size={24} />
            </StatIcon>
            <StatValue>28</StatValue>
            <StatLabel>Active Accounts</StatLabel>
          </StatCard>

          <StatCard>
            <StatIcon>
              <DollarSign size={24} />
            </StatIcon>
            <StatValue>$125,430</StatValue>
            <StatLabel>Total Balance</StatLabel>
          </StatCard>

          <StatCard>
            <StatIcon>
              <TrendingUp size={24} />
            </StatIcon>
            <StatValue>+12.5%</StatValue>
            <StatLabel>Growth This Month</StatLabel>
          </StatCard>
        </StatsSection>
      </MainContent>
    </PageContainer>
  );
};

export default Index;
