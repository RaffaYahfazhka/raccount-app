
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const TabContainer = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.sm};
  padding: ${theme.spacing.lg};
  
  @media (max-width: 768px) {
    margin: 0 -${theme.spacing.sm};
    border-radius: 0;
    padding: ${theme.spacing.sm};
  }
`;

export const AccountInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.sm};
    margin-bottom: ${theme.spacing.lg};
  }
`;

export const InfoCard = styled.div`
  background-color: ${theme.colors.gray[50]};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.sm};
  }
`;

export const InfoLabel = styled.div`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight.medium};
  margin-bottom: ${theme.spacing.sm};
`;

export const InfoValue = styled.div`
  color: ${theme.colors.gray[900]};
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.semibold};
  
  @media (max-width: 768px) {
    font-size: ${theme.fontSize.base};
  }
`;

export const BalanceHistorySection = styled.div`
  margin-top: ${theme.spacing.xl};
  
  @media (max-width: 768px) {
    margin-top: ${theme.spacing.lg};
  }
`;

export const SectionTitle = styled.h3`
  color: ${theme.colors.gray[800]};
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.semibold};
  margin-bottom: ${theme.spacing.lg};
  
  @media (max-width: 768px) {
    font-size: ${theme.fontSize.base};
    margin-bottom: ${theme.spacing.sm};
  }
`;

export const BalanceHistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

export const BalanceHistoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.sm};
  background-color: ${theme.colors.gray[50]};
  border-radius: ${theme.borderRadius.md};
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacing.xs};
  }
`;

export const HistoryDate = styled.span`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.fontSize.sm};
`;

export const HistoryAmount = styled.span<{ positive?: boolean }>`
  color: ${({ positive }) => positive ? theme.colors.green[600] : theme.colors.red[600]};
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSize.sm};
`;
