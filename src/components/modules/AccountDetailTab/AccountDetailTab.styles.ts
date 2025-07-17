
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

export const DetailSection = styled.div`
  h3 {
    font-size: ${theme.fontSize.lg};
    font-weight: ${theme.fontWeight.semibold};
    color: ${theme.colors.gray[800]};
    margin-bottom: ${theme.spacing.lg};
    
    @media (max-width: 480px) {
      font-size: ${theme.fontSize.md};
      margin-bottom: ${theme.spacing.md};
    }
  }
`;

export const BalanceSection = styled.div`
  h3 {
    font-size: ${theme.fontSize.lg};
    font-weight: ${theme.fontWeight.semibold};
    color: ${theme.colors.gray[800]};
    
    @media (max-width: 480px) {
      font-size: ${theme.fontSize.md};
    }
  }
  
  .flex {
    @media (max-width: 480px) {
      flex-direction: column;
      gap: ${theme.spacing.sm};
      align-items: flex-start;
    }
  }
`;

export const DetailItem = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.md} 0;
  border-bottom: 1px solid ${theme.colors.gray[200]};
  
  @media (max-width: 768px) {
    grid-template-columns: 100px 1fr;
    gap: ${theme.spacing.sm};
    padding: ${theme.spacing.sm} 0;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xs};
  }
`;

export const Label = styled.span`
  color: ${theme.colors.gray[600]};
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSize.sm};
  
  @media (max-width: 480px) {
    font-size: ${theme.fontSize.xs};
    font-weight: ${theme.fontWeight.semibold};
  }
`;

export const Value = styled.span`
  color: ${theme.colors.gray[800]};
  font-size: ${theme.fontSize.sm};
  
  small {
    color: ${theme.colors.gray[500]};
    font-size: ${theme.fontSize.xs};
    display: block;
    margin-top: ${theme.spacing.xs};
  }
  
  @media (max-width: 480px) {
    font-size: ${theme.fontSize.xs};
  }
`;

export const BalanceTable = styled.table`
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

export const ActionButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: ${theme.spacing.sm};
  }
`;
