
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.gray[50]};
`;

export const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.xl} ${theme.spacing.lg};
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.lg} ${theme.spacing.md};
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    padding: ${theme.spacing.md} ${theme.spacing.sm};
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  color: ${theme.colors.gray[600]};
  background: none;
  border: none;
  cursor: pointer;
  padding: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSize.sm};
  
  &:hover {
    background-color: ${theme.colors.gray[100]};
    color: ${theme.colors.gray[800]};
  }
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    margin-bottom: ${theme.spacing.md};
  }
  
  @media (max-width: 480px) {
    padding: ${theme.spacing.xs};
    margin-bottom: ${theme.spacing.sm};
    font-size: ${theme.fontSize.xs};
  }
`;

export const AccountHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
  padding: 0 ${theme.spacing.md};
  
  @media (max-width: 768px) {
    margin-bottom: ${theme.spacing.lg};
  }
  
  @media (max-width: 480px) {
    margin-bottom: ${theme.spacing.md};
    padding: 0;
  }
`;

export const AccountTitle = styled.h1`
  color: ${theme.colors.gray[800]};
  font-size: ${theme.fontSize['3xl']};
  font-weight: ${theme.fontWeight.semibold};
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: ${theme.fontSize['2xl']};
  }
  
  @media (max-width: 480px) {
    font-size: ${theme.fontSize.xl};
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
    border-radius: ${theme.borderRadius.md};
    padding: ${theme.spacing.xs};
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: ${theme.spacing.xs};
    margin: 0 -${theme.spacing.sm} ${theme.spacing.md} -${theme.spacing.sm};
    border-radius: 0;
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
  font-size: ${theme.fontSize.sm};
  
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
    border-radius: ${theme.borderRadius.sm};
    font-size: ${theme.fontSize.xs};
  }
`;

export const TabContent = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.sm};
  overflow: hidden;
  
  @media (max-width: 768px) {
    margin: 0 -${theme.spacing.md};
    border-radius: ${theme.borderRadius.md};
  }
  
  @media (max-width: 480px) {
    margin: 0 -${theme.spacing.sm};
    border-radius: 0;
  }
`;
