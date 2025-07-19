import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const HeaderContainer = styled.header`
  background-color: ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.gray[200]};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.sm} ${theme.spacing.md};
  }
  
  @media (max-width: 480px) {
    padding: ${theme.spacing.sm};
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  gap: ${theme.spacing.lg};
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: ${theme.spacing.md};
  }
  
  @media (max-width: 480px) {
    gap: ${theme.spacing.sm};
  }
`;

export const Logo = styled.h1`
  color: ${theme.colors.primary[600]};
  font-size: ${theme.fontSize['2xl']};
  font-weight: ${theme.fontWeight.bold};
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: ${theme.fontSize.xl};
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: ${theme.fontSize.lg};
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.lg};
  
  a {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.xs};
    color: ${theme.colors.gray[600]};
    text-decoration: none;
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    border-radius: ${theme.borderRadius.md};
    font-size: ${theme.fontSize.sm};
    font-weight: ${theme.fontWeight.medium};
    transition: all 0.2s ease;
    
    &:hover {
      color: ${theme.colors.primary[600]};
      background-color: ${theme.colors.primary[50]};
    }
    
    &.active {
      color: ${theme.colors.primary[600]};
      background-color: ${theme.colors.primary[100]};
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
    gap: ${theme.spacing.sm};
    padding: 0 ${theme.spacing.sm};
    
    a {
      flex: 1;
      justify-content: center;
      padding: ${theme.spacing.sm};
      font-size: ${theme.fontSize.sm};
    }
  }
  
  @media (max-width: 480px) {
    gap: ${theme.spacing.xs};
    padding: 0;
    
    a {
      padding: ${theme.spacing.xs} ${theme.spacing.sm};
      font-size: ${theme.fontSize.xs};
      
      span {
        display: none;
      }
    }
  }
`;

export const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.gray[500]};
  font-size: ${theme.fontSize.sm};
  flex-wrap: wrap;
  
  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    
    &:hover {
      color: ${theme.colors.primary[600]};
    }
  }
  
  @media (max-width: 768px) {
    font-size: ${theme.fontSize.xs};
    gap: ${theme.spacing.xs};
    justify-content: center;
    padding: ${theme.spacing.xs} 0;
  }
  
  @media (max-width: 480px) {
    display: none;
  }
`;

export const BreadcrumbItem = styled.span<{ active?: boolean }>`
  color: ${({ active }) => active ? theme.colors.primary[600] : theme.colors.gray[500]};
  font-weight: ${({ active }) => active ? theme.fontWeight.medium : theme.fontWeight.normal};
  white-space: nowrap;
  
  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      color: ${theme.colors.primary[600]};
    }
  }
`;

export const BreadcrumbSeparator = styled.span`
  margin: 0 ${theme.spacing.xs};
  
  @media (max-width: 768px) {
    margin: 0 2px;
  }
`;
