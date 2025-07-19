import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const TableContainer = styled('div')({
  backgroundColor: theme.colors.white,
  borderRadius: theme.borderRadius.lg,
  boxShadow: theme.shadows.sm,
  overflow: 'hidden',
  overflowX: 'auto',
  padding: '20px',

  '@media (max-width: 768px)': {
    margin: `0 -${theme.spacing.md}`,
    borderRadius: 0,
  },
});

export const CodeCell = styled('td')({
  fontFamily: 'monospace',
  fontWeight: theme.fontWeight.medium,
  color: theme.colors.gray[700],
  paddingLeft: '20px',
});

export const CategoryCell = styled('td')({
  padding: `${theme.spacing.sm} ${theme.spacing.md}`,
});

export const ActionCell = styled('td')({
  width: '200px',

  '@media (max-width: 768px)': {
    width: '160px',
  },
  
  '@media (max-width: 480px)': {
    width: '120px',
    '.flex': {
      flexDirection: 'column',
      gap: theme.spacing.xs,
    },
    button: {
      fontSize: theme.fontSize.xs,
      padding: theme.spacing.xs,
    },
  },
});