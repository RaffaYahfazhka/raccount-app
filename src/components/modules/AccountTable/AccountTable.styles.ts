
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

export const CodeCell = styled.td`
  font-family: monospace;
  font-weight: ${theme.fontWeight.medium};
  color: ${theme.colors.gray[700]};
`;

export const CategoryCell = styled.td`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
`;

export const ActionCell = styled.td`
  width: 200px;
  
  @media (max-width: 768px) {
    width: 160px;
  }
  
  @media (max-width: 480px) {
    width: 120px;
    
    .flex {
      flex-direction: column;
      gap: ${theme.spacing.xs};
    }
    
    button {
      font-size: ${theme.fontSize.xs};
      padding: ${theme.spacing.xs};
    }
  }
`;
