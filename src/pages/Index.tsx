
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, User, TrendingUp, DollarSign, FileText, BarChart3 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';
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
  const { t } = useTranslation();
  const { language } = useLanguage();
  const langPrefix = language === 'id' ? '/id' : language === 'en' ? '/en' : '';

  return (
    <PageContainer>
      <Header />
      
      <MainContent>
        <HeroSection>
          <HeroTitle>{t('home.title')}</HeroTitle>
          <HeroDescription>
            {t('home.description')}
          </HeroDescription>
        </HeroSection>

        <QuickActions>
          <ActionCard>
            <Link to={`${langPrefix}/general-ledger`}>
              <ActionIcon>
                <BookOpen size={32} />
              </ActionIcon>
              <ActionTitle>{t('home.generalLedger.title')}</ActionTitle>
              <ActionDescription>
                {t('home.generalLedger.description')}
              </ActionDescription>
            </Link>
          </ActionCard>

          <ActionCard>
            <Link to={`${langPrefix}/account`}>
              <ActionIcon>
                <User size={32} />
              </ActionIcon>
              <ActionTitle>{t('home.accounts.title')}</ActionTitle>
              <ActionDescription>
                {t('home.accounts.description')}
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
            <StatLabel>{t('home.stats.totalTransactions')}</StatLabel>
          </StatCard>

          <StatCard>
            <StatIcon>
              <User size={24} />
            </StatIcon>
            <StatValue>28</StatValue>
            <StatLabel>{t('home.stats.activeAccounts')}</StatLabel>
          </StatCard>

          <StatCard>
            <StatIcon>
              <DollarSign size={24} />
            </StatIcon>
            <StatValue>$125,430</StatValue>
            <StatLabel>{t('home.stats.totalBalance')}</StatLabel>
          </StatCard>

          <StatCard>
            <StatIcon>
              <TrendingUp size={24} />
            </StatIcon>
            <StatValue>+12.5%</StatValue>
            <StatLabel>{t('home.stats.growthThisMonth')}</StatLabel>
          </StatCard>
        </StatsSection>
      </MainContent>
    </PageContainer>
  );
};

export default Index;
