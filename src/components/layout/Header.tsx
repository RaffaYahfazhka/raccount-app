
import { Home, BookOpen, User } from 'lucide-react';
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSeparator
} from './Header.styles';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>Raccount</Logo>
        <Breadcrumb>
          <Home size={16} />
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BookOpen size={16} />
          <BreadcrumbItem>General Ledger</BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <User size={16} />
          <BreadcrumbItem active>Account</BreadcrumbItem>
        </Breadcrumb>
      </HeaderContent>
    </HeaderContainer>
  );
};
