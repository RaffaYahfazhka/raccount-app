
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

export const PageTitle = styled.h2`
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

export const ActionButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: stretch;
    
    & > button {
      flex: 1;
    }
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: ${theme.spacing.sm};
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
