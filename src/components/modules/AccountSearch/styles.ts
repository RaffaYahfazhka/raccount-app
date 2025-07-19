
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const SearchContainer = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.sm};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
  
  .flex {
    display: flex;
  }
  
  .flex-col {
    flex-direction: column;
  }
  
  .flex-1 {
    flex: 1;
  }
  
  .gap-4 {
    gap: 1rem;
  }
  
  .gap-2 {
    gap: 0.5rem;
  }
  
  .items-center {
    align-items: center;
  }
  
  .relative {
    position: relative;
  }
  
  .absolute {
    position: absolute;
  }
  
  .left-3 {
    left: 0.75rem;
  }
  
  .top-1\/2 {
    top: 50%;
  }
  
  .transform {
    transform: translateY(-50%);
  }
  
  .text-sm {
    font-size: ${theme.fontSize.sm};
  }
  
  .font-medium {
    font-weight: ${theme.fontWeight.medium};
  }
  
  @media (max-width: 768px) {
    margin: 0 -${theme.spacing.md} ${theme.spacing.lg} -${theme.spacing.md};
    border-radius: 0;
    padding: ${theme.spacing.md};
    
    .md\\:flex-row {
      flex-direction: column;
    }
  }
  
  @media (max-width: 480px) {
    padding: ${theme.spacing.sm};
  }
`;
