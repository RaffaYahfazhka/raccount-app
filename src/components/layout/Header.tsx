
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
              <User size={16} />
              <BreadcrumbItem active>Account</BreadcrumbItem>
            </>
          ) : (
            <>
              <BookOpen size={16} />
              <BreadcrumbItem>General Ledger</BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <User size={16} />
              <BreadcrumbItem active>Account</BreadcrumbItem>
            </>
          )}
        </Breadcrumb>
      </HeaderContent>
    </HeaderContainer>
  );
};
