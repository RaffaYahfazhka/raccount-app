
import { Home, BookOpen, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
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
  const isAccountPage = location.pathname === '/account';
  const isGeneralLedgerPage = location.pathname === '/general-ledger' || location.pathname === '/';
  const isAccountDetailPage = location.pathname.startsWith('/account/');
  
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>Raccount</Logo>
        
        <NavLinks>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            <Home size={16} />
            <span>Home</span>
          </Link>
          <Link to="/general-ledger" className={isGeneralLedgerPage && location.pathname !== '/' ? 'active' : ''}>
            <BookOpen size={16} />
            <span>General Ledger</span>
          </Link>
          <Link to="/account" className={isAccountPage ? 'active' : ''}>
            <User size={16} />
            <span>Account</span>
          </Link>
        </NavLinks>

        <Breadcrumb>
          <Link to="/"><Home size={16} /></Link>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          {isAccountDetailPage ? (
            <>
              <Link to="/general-ledger">
                <BookOpen size={16} />
              </Link>
              <BreadcrumbItem>
                <Link to="/general-ledger">General Ledger</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <Link to="/account">
                <User size={16} />
              </Link>
              <BreadcrumbItem>
                <Link to="/account">Account</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem active>Account Detail</BreadcrumbItem>
            </>
          ) : isAccountPage ? (
            <>
              <Link to="/general-ledger">
                <BookOpen size={16} />
              </Link>
              <BreadcrumbItem>
                <Link to="/general-ledger">General Ledger</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <User size={16} />
              <BreadcrumbItem active>Account</BreadcrumbItem>
            </>
          ) : (
            <>
              <BookOpen size={16} />
              <BreadcrumbItem active>General Ledger</BreadcrumbItem>
            </>
          )}
        </Breadcrumb>
      </HeaderContent>
    </HeaderContainer>
  );
};
