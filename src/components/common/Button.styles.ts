
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.fontWeight.medium};
  border-radius: ${theme.borderRadius.md};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: 1px solid transparent;
  white-space: nowrap;

  ${({ size = 'md' }) => {
    switch (size) {
      case 'sm':
        return `
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: ${theme.fontSize.sm};
          
          @media (max-width: 480px) {
            padding: ${theme.spacing.xs} ${theme.spacing.sm};
            font-size: ${theme.fontSize.xs};
          }
        `;
      case 'lg':
        return `
          padding: ${theme.spacing.md} ${theme.spacing.xl};
          font-size: ${theme.fontSize.lg};
          
          @media (max-width: 768px) {
            padding: ${theme.spacing.sm} ${theme.spacing.lg};
            font-size: ${theme.fontSize.base};
          }
          
          @media (max-width: 480px) {
            padding: ${theme.spacing.sm} ${theme.spacing.md};
            font-size: ${theme.fontSize.sm};
          }
        `;
      default:
        return `
          padding: ${theme.spacing.sm} ${theme.spacing.lg};
          font-size: ${theme.fontSize.base};
          
          @media (max-width: 480px) {
            padding: ${theme.spacing.xs} ${theme.spacing.md};
            font-size: ${theme.fontSize.sm};
          }
        `;
    }
  }}

  ${({ variant = 'primary' }) => {
    switch (variant) {
      case 'secondary':
        return `
          background-color: ${theme.colors.secondary[500]};
          color: ${theme.colors.white};
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.secondary[600]};
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: ${theme.colors.primary[600]};
          border-color: ${theme.colors.primary[300]};
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.primary[50]};
            border-color: ${theme.colors.primary[400]};
          }
        `;
      default:
        return `
          background-color: ${theme.colors.primary[500]};
          color: ${theme.colors.white};
          
          &:hover:not(:disabled) {
            background-color: ${theme.colors.primary[600]};
          }
        `;
    }
  }}

  ${({ fullWidth }) => fullWidth && 'width: 100%;'}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${theme.colors.primary[200]};
  }
  
  @media (max-width: 768px) {
    min-height: 44px; /* Better touch target */
  }
`;
