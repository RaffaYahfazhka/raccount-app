
import { Home, BookOpen, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSeparator
} from './Header.styles';

export const Header = () => {
  const location = useLocation();
  const isAccountPage = location.pathname === '/account';
  const isGeneralLedgerPage = location.pathname === '/general-ledger' || location.pathname === '/';
  
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>Raccount</Logo>
        <Breadcrumb>
          <Link to="/"><Home size={16} /></Link>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          {isAccountPage ? (
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
