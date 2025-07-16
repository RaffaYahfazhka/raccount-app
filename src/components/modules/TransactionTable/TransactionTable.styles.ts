import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const TableContainer = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.sm};
  overflow: hidden;
  overflow-x: auto;
  
  @media (max-width: 768px) {
    margin: 0 -${theme.spacing.md};
    border-radius: 0;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
  
  @media (max-width: 768px) {
    min-width: 600px;
  }
`;

export const TableHeader = styled.thead`
  background-color: ${theme.colors.gray[50]};
`;

export const TableHeaderCell = styled.th`
  padding: ${theme.spacing.md};
  text-align: left;
  font-weight: ${theme.fontWeight.medium};
  color: ${theme.colors.gray[700]};
  border-bottom: 1px solid ${theme.colors.gray[200]};
  font-size: ${theme.fontSize.sm};
  white-space: nowrap;
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.sm};
    font-size: ${theme.fontSize.xs};
  }
  
  @media (max-width: 480px) {
    padding: ${theme.spacing.xs};
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:hover {
    background-color: ${theme.colors.gray[50]};
  }
  
  @media (max-width: 768px) {
    &:hover {
      background-color: transparent;
    }
  }
`;

export const TableCell = styled.td`
  padding: ${theme.spacing.md};
  border-bottom: 1px solid ${theme.colors.gray[100]};
  color: ${theme.colors.gray[800]};
  font-size: ${theme.fontSize.sm};
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.sm};
    font-size: ${theme.fontSize.xs};
  }
  
  @media (max-width: 480px) {
    padding: ${theme.spacing.xs};
  }
`;

export const AmountCell = styled(TableCell)<{ type?: 'debit' | 'credit' }>`
  text-align: right;
  font-weight: ${theme.fontWeight.medium};
  color: ${({ type }) => 
    type === 'debit' ? theme.colors.error : 
    type === 'credit' ? theme.colors.success : 
    theme.colors.gray[800]
  };
  white-space: nowrap;
  
  @media (max-width: 480px) {
    font-size: ${theme.fontSize.xs};
  }
`;

export const ActionCell = styled(TableCell)`
  width: 120px;
  
  @media (max-width: 768px) {
    width: 80px;
  }
  
  @media (max-width: 480px) {
    width: 60px;
  }
`;
