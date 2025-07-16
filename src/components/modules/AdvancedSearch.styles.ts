
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const SearchContainer = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.sm};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.md};
    margin: 0 -${theme.spacing.md} ${theme.spacing.lg} -${theme.spacing.md};
    border-radius: 0;
  }
  
  @media (max-width: 480px) {
    padding: ${theme.spacing.sm};
  }
`;

export const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${theme.spacing.md};
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacing.sm};
  }
`;

export const SearchTitle = styled.h3`
  color: ${theme.colors.gray[800]};
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.medium};
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: ${theme.fontSize.base};
  }
  
  @media (max-width: 480px) {
    font-size: ${theme.fontSize.sm};
  }
`;

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  background: none;
  border: none;
  color: ${theme.colors.primary[600]};
  cursor: pointer;
  font-size: ${theme.fontSize.sm};
  padding: ${theme.spacing.xs};
  border-radius: ${theme.borderRadius.md};
  
  &:hover {
    color: ${theme.colors.primary[700]};
    background-color: ${theme.colors.primary[50]};
  }
  
  @media (max-width: 480px) {
    font-size: ${theme.fontSize.xs};
    align-self: flex-end;
  }
`;

export const SearchForm = styled.form<{ expanded: boolean }>`
  display: ${({ expanded }) => expanded ? 'block' : 'none'};
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: ${theme.spacing.sm};
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.md};
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

export const Label = styled.label`
  color: ${theme.colors.gray[700]};
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight.medium};
  
  @media (max-width: 480px) {
    font-size: ${theme.fontSize.xs};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  justify-content: flex-end;
  
  @media (max-width: 768px) {
    justify-content: stretch;
    
    & > button {
      flex: 1;
    }
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: ${theme.spacing.sm};
  }
`;
