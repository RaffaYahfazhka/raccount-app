import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

interface InputProps {
  error?: boolean;
  fullWidth?: boolean;
}

export const Input = styled.input<InputProps>`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: 1px solid ${({ error }) => error ? theme.colors.error : theme.colors.gray[300]};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSize.base};
  transition: all 0.2s ease-in-out;
  outline: none;

  ${({ fullWidth }) => fullWidth && 'width: 100%;'}

  &:focus {
    border-color: ${({ error }) => error ? theme.colors.error : theme.colors.primary[500]};
    box-shadow: 0 0 0 3px ${({ error }) => error ? theme.colors.error + '20' : theme.colors.primary[200]};
  }

  &::placeholder {
    color: ${theme.colors.gray[400]};
  }
`;

export const Select = styled.select<InputProps>`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: 1px solid ${({ error }) => error ? theme.colors.error : theme.colors.gray[300]};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.fontSize.base};
  background-color: ${theme.colors.white};
  transition: all 0.2s ease-in-out;
  outline: none;

  ${({ fullWidth }) => fullWidth && 'width: 100%;'}

  &:focus {
    border-color: ${({ error }) => error ? theme.colors.error : theme.colors.primary[500]};
    box-shadow: 0 0 0 3px ${({ error }) => error ? theme.colors.error + '20' : theme.colors.primary[200]};
  }
`;
