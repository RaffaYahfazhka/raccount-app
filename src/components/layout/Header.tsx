
import { Home, BookOpen, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSeparator,
  NavLinks
} from './Header.styles';

export const Header = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  // Get language prefix for navigation
  const langPrefix = language === 'id' ? '/id' : language === 'en' ? '/en' : '';
  
  const isHomePage = location.pathname === '/' || location.pathname === '/en' || location.pathname === '/id';
  const isAccountPage = location.pathname.endsWith('/account');
  const isGeneralLedgerPage = location.pathname.endsWith('/general-ledger');
  const isAccountDetailPage = location.pathname.includes('/account/') && location.pathname.split('/').length > 3;
  
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>Raccount</Logo>
        
        <NavLinks>
          <Link to={langPrefix || '/'} className={isHomePage ? 'active' : ''}>
            <Home size={16} />
            <span>{t('nav.home')}</span>
          </Link>
          <Link to={`${langPrefix}/general-ledger`} className={isGeneralLedgerPage ? 'active' : ''}>
            <BookOpen size={16} />
            <span>{t('nav.generalLedger')}</span>
          </Link>
          <Link to={`${langPrefix}/account`} className={isAccountPage ? 'active' : ''}>
            <User size={16} />
            <span>{t('nav.account')}</span>
          </Link>
        </NavLinks>

        <Breadcrumb>
          <Link to={langPrefix || '/'}><Home size={16} /></Link>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>{t('nav.home')}</BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          {isAccountDetailPage ? (
            <>
              <Link to={`${langPrefix}/general-ledger`}>
                <BookOpen size={16} />
              </Link>
              <BreadcrumbItem>
                <Link to={`${langPrefix}/general-ledger`}>{t('nav.generalLedger')}</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <Link to={`${langPrefix}/account`}>
                <User size={16} />
              </Link>
              <BreadcrumbItem>
                <Link to={`${langPrefix}/account`}>{t('nav.account')}</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem active>{t('account.detail.title')}</BreadcrumbItem>
            </>
          ) : isAccountPage ? (
            <>
              <Link to={`${langPrefix}/general-ledger`}>
                <BookOpen size={16} />
              </Link>
              <BreadcrumbItem>
                <Link to={`${langPrefix}/general-ledger`}>{t('nav.generalLedger')}</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <User size={16} />
              <BreadcrumbItem active>{t('nav.account')}</BreadcrumbItem>
            </>
          ) : isGeneralLedgerPage ? (
            <>
              <BookOpen size={16} />
              <BreadcrumbItem active>{t('nav.generalLedger')}</BreadcrumbItem>
            </>
          ) : null}
        </Breadcrumb>
      </HeaderContent>
    </HeaderContainer>
  );
};
