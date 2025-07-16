
import styled from '@emotion/styled';
import { Home, BookOpen, User } from 'lucide-react';
import { theme } from '@styles/theme';

const HeaderContainer = styled.header`
  background-color: ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.gray[200]};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.h1`
  color: ${theme.colors.primary[600]};
  font-size: ${theme.fontSize['2xl']};
  font-weight: ${theme.fontWeight.bold};
  margin: 0;
`;

const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.gray[500]};
  font-size: ${theme.fontSize.sm};
`;

const BreadcrumbItem = styled.span<{ active?: boolean }>`
  color: ${({ active }) => active ? theme.colors.primary[600] : theme.colors.gray[500]};
  font-weight: ${({ active }) => active ? theme.fontWeight.medium : theme.fontWeight.normal};
`;

const BreadcrumbSeparator = styled.span`
  margin: 0 ${theme.spacing.xs};
`;

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
