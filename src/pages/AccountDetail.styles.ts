
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.gray[50]};
`;

export const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.xl};
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.md};
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    padding: ${theme.spacing.sm};
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  color: ${theme.colors.gray[600]};
  background: none;
  border: none;
  cursor: pointer;
  padding: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  
  &:hover {
    background-color: ${theme.colors.gray[100]};
    color: ${theme.colors.gray[800]};
  }
  
  @media (max-width: 480px) {
    padding: ${theme.spacing.xs};
    margin-bottom: ${theme.spacing.md};
  }
`;

export const AccountHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
  
  @media (max-width: 768px) {
    margin-bottom: ${theme.spacing.lg};
  }
`;

export const AccountTitle = styled.h1`
  color: ${theme.colors.gray[800]};
  font-size: ${theme.fontSize['2xl']};
  font-weight: ${theme.fontWeight.semibold};
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: ${theme.fontSize.xl};
  }
  
  @media (max-width: 480px) {
    font-size: ${theme.fontSize.lg};
  }
`;

export const TabContainer = styled.div`
  display: flex;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.sm};
  
  @media (max-width: 768px) {
    margin: 0 -${theme.spacing.md} ${theme.spacing.lg} -${theme.spacing.md};
    border-radius: 0;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: ${theme.spacing.xs};
  }
`;

export const TabButton = styled.button<{ active: boolean }>`
  flex: 1;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border: none;
  background-color: ${({ active }) => active ? theme.colors.primary[600] : 'transparent'};
  color: ${({ active }) => active ? theme.colors.white : theme.colors.gray[600]};
  border-radius: ${theme.borderRadius.md};
  font-weight: ${theme.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ active }) => 
      active ? theme.colors.primary[700] : theme.colors.gray[100]
    };
    color: ${({ active }) => 
      active ? theme.colors.white : theme.colors.gray[800]
    };
  }
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    font-size: ${theme.fontSize.sm};
  }
  
  @media (max-width: 480px) {
    padding: ${theme.spacing.sm};
    text-align: center;
  }
`;

export const TabContent = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.sm};
  overflow: hidden;
  
  @media (max-width: 768px) {
    margin: 0 -${theme.spacing.md};
    border-radius: 0;
  }
`;
