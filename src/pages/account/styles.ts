
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

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${theme.spacing.xl};
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacing.md};
    margin-bottom: ${theme.spacing.lg};
  }
`;

export const PageTitle = styled.h1`
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

export const SearchSection = styled.section`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.sm};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
  
  @media (max-width: 768px) {
    margin: 0 -${theme.spacing.md} ${theme.spacing.lg} -${theme.spacing.md};
    border-radius: 0;
    padding: ${theme.spacing.md};
  }
  
  @media (max-width: 480px) {
    padding: ${theme.spacing.sm};
  }
`;

export const TableSection = styled.section`
  margin-bottom: ${theme.spacing.xl};
  
  @media (max-width: 768px) {
    margin-bottom: ${theme.spacing.lg};
  }
`;

export const LoadingState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing['2xl']};
  color: ${theme.colors.gray[500]};
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.xl};
  }
  
  @media (max-width: 480px) {
    padding: ${theme.spacing.lg};
    font-size: ${theme.fontSize.sm};
  }
`;

export const ErrorState = styled.div`
  background-color: ${theme.colors.error}20;
  border: 1px solid ${theme.colors.error};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md};
  color: ${theme.colors.error};
  margin-bottom: ${theme.spacing.lg};
  
  @media (max-width: 768px) {
    margin: 0 -${theme.spacing.md} ${theme.spacing.lg} -${theme.spacing.md};
    border-radius: 0;
  }
  
  @media (max-width: 480px) {
    padding: ${theme.spacing.sm};
    font-size: ${theme.fontSize.sm};
  }
`;

export const AddButton = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 50;
  
  @media (max-width: 768px) {
    bottom: 16px;
    right: 16px;
  }
`;
