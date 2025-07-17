
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const Container = styled.div`
  padding: ${theme.spacing.xl};
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.md};
  }
  
  @media (max-width: 480px) {
    padding: ${theme.spacing.sm};
  }
`;

export const FilterSection = styled.div`
  margin-bottom: ${theme.spacing.lg};
  
  @media (max-width: 768px) {
    margin-bottom: ${theme.spacing.md};
  }
`;

export const DateInputs = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  align-items: end;
  
  > div {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xs};
    
    label {
      font-size: ${theme.fontSize.sm};
      font-weight: ${theme.fontWeight.medium};
      color: ${theme.colors.gray[700]};
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${theme.spacing.md};
    align-items: stretch;
  }
  
  @media (max-width: 480px) {
    gap: ${theme.spacing.sm};
    
    > div label {
      font-size: ${theme.fontSize.xs};
    }
  }
`;

export const TransactionTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;
  display: block;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: ${theme.fontSize.xs};
  }
`;

export const TableHeader = styled.thead`
  background-color: ${theme.colors.gray[50]};
  display: table-header-group;
`;

export const TableBody = styled.tbody`
  display: table-row-group;
`;

export const TableRow = styled.tr`
  display: table-row;
  
  &:hover {
    background-color: ${theme.colors.gray[50]};
  }
`;

export const TableCell = styled.td`
  padding: ${theme.spacing.md};
  border-bottom: 1px solid ${theme.colors.gray[200]};
  text-align: left;
  display: table-cell;
  
  &:first-of-type {
    font-weight: ${theme.fontWeight.medium};
  }
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.sm};
  }
  
  @media (max-width: 480px) {
    padding: ${theme.spacing.xs};
  }
`;
