
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const FormContainer = styled.div`
  padding: ${theme.spacing.lg};
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.md};
  }
  
  @media (max-width: 480px) {
    padding: ${theme.spacing.sm};
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.md};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.sm};
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${theme.spacing.sm};
  padding-top: ${theme.spacing.md};
  
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: ${theme.spacing.xs};
    
    button {
      width: 100%;
    }
  }
`;
