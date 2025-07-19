import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

type AmountCellProps = {
  type?: 'debit' | 'credit' | string;
};

export const TableContainer = styled.div({
  backgroundColor: theme.colors.white,
  borderRadius: theme.borderRadius.lg,
  boxShadow: theme.shadows.sm,
  overflow: 'hidden',
  overflowX: 'auto',
  '@media (max-width: 768px)': {
    margin: `0 -${theme.spacing.md}`,
    borderRadius: 0,
  },
});

export const Table = styled.table({
  width: '100%',
  borderCollapse: 'collapse',
  minWidth: '800px',
  '@media (max-width: 768px)': {
    minWidth: '600px',
  },
});

export const TableHeader = styled.thead({
  backgroundColor: theme.colors.gray[50],
});

export const TableHeaderCell = styled.th({
  padding: theme.spacing.md,
  textAlign: 'left',
  fontWeight: theme.fontWeight.medium,
  color: theme.colors.gray[700],
  borderBottom: `1px solid ${theme.colors.gray[200]}`,
  fontSize: theme.fontSize.sm,
  whiteSpace: 'nowrap',
  '@media (max-width: 768px)': {
    padding: theme.spacing.sm,
    fontSize: theme.fontSize.xs,
  },
  '@media (max-width: 480px)': {
    padding: theme.spacing.xs,
  },
});

export const TableBody = styled.tbody({});

export const TableRow = styled.tr({
  '&:hover': {
    backgroundColor: theme.colors.gray[50],
  },
  '@media (max-width: 768px)': {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
});

export const TableCell = styled.td({
  padding: theme.spacing.md,
  borderBottom: `1px solid ${theme.colors.gray[100]}`,
  color: theme.colors.gray[800],
  fontSize: theme.fontSize.sm,
  '@media (max-width: 768px)': {
    padding: theme.spacing.sm,
    fontSize: theme.fontSize.xs,
  },
  '@media (max-width: 480px)': {
    padding: theme.spacing.xs,
  },
});

export const AmountCell = styled(TableCell)<AmountCellProps>(({ type }) => ({
  textAlign: 'right',
  fontWeight: theme.fontWeight.medium,
  color:
    type === 'debit'
      ? theme.colors.error
      : type === 'credit'
      ? theme.colors.success
      : theme.colors.gray[800],
  whiteSpace: 'nowrap',
  
  '@media (max-width: 480px)': {
    fontSize: theme.fontSize.xs,
  },
}));

export const ActionCell = styled(TableCell)({
  width: '120px',
  '@media (max-width: 768px)': {
    width: '80px',
  },
  '@media (max-width: 480px)': {
    width: '60px',
  },
});