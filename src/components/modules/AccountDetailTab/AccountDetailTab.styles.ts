
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const Container = styled.div`
  padding: ${theme.spacing.lg};
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.sm};
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xl};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
    margin-bottom: ${theme.spacing.lg};
  }
`;

export const DetailSection = styled.section`
  h3 {
    color: ${theme.colors.gray[800]};
    font-size: ${theme.fontSize.lg};
    font-weight: ${theme.fontWeight.semibold};
    margin-bottom: ${theme.spacing.lg};
    
    @media (max-width: 768px) {
      font-size: ${theme.fontSize.base};
      margin-bottom: ${theme.spacing.sm};
    }
  }
`;

export const BalanceSection = styled.section`
  h3 {
    color: ${theme.colors.gray[800]};
    font-size: ${theme.fontSize.lg};
    font-weight: ${theme.fontWeight.semibold};
    
    @media (max-width: 768px) {
      font-size: ${theme.fontSize.base};
    }
  }
`;

export const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: ${theme.spacing.sm} 0;
  border-bottom: 1px solid ${theme.colors.gray[200]};
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacing.xs};
  }
`;

export const Label = styled.span`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight.medium};
  min-width: 120px;
`;

export const Value = styled.span`
  color: ${theme.colors.gray[900]};
  font-size: ${theme.fontSize.sm};
  text-align: right;
  
  small {
    color: ${theme.colors.gray[500]};
    font-size: ${theme.fontSize.xs};
  }
  
  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const BalanceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: ${theme.spacing.md};
  border: 1px solid ${theme.colors.gray[200]};
  border-radius: ${theme.borderRadius.md};
  overflow: hidden;
`;

export const TableHeader = styled.thead`
  background-color: ${theme.colors.gray[50]};
`;

export const TableBody = styled.tbody`
  background-color: ${theme.colors.white};
`;

export const TableRow = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid ${theme.colors.gray[200]};
  }
`;

export const TableCell = styled.td`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  text-align: right;
  font-size: ${theme.fontSize.sm};
  
  &:first-of-type {
    text-align: left;
  }
  
  &[as="th"] {
    font-weight: ${theme.fontWeight.medium};
    color: ${theme.colors.gray[700]};
  }
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    font-size: ${theme.fontSize.xs};
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${theme.spacing.md};
  padding-top: ${theme.spacing.lg};
  border-top: 1px solid ${theme.colors.gray[200]};
  
  @media (max-width: 768px) {
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
