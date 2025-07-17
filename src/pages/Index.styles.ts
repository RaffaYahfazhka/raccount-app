
import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${theme.colors.gray[50]};
`;

export const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.xl};
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.sm};
    max-width: 100%;
  }
`;

export const HeroSection = styled.section`
  text-align: center;
  margin-bottom: ${theme.spacing['2xl']};
  padding: ${theme.spacing['2xl']} 0;
  
  @media (max-width: 768px) {
    margin-bottom: ${theme.spacing.xl};
    padding: ${theme.spacing.xl} 0;
  }
`;

export const HeroTitle = styled.h1`
  color: ${theme.colors.gray[900]};
  font-size: ${theme.fontSize['4xl']};
  font-weight: ${theme.fontWeight.bold};
  margin-bottom: ${theme.spacing.lg};
  
  @media (max-width: 768px) {
    font-size: ${theme.fontSize['2xl']};
    margin-bottom: ${theme.spacing.sm};
  }
  
  @media (max-width: 480px) {
    font-size: ${theme.fontSize.xl};
  }
`;

export const HeroDescription = styled.p`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.fontSize.lg};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: ${theme.fontSize.base};
    padding: 0 ${theme.spacing.sm};
  }
  
  @media (max-width: 480px) {
    font-size: ${theme.fontSize.sm};
  }
`;

export const QuickActions = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing['2xl']};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
    margin-bottom: ${theme.spacing.xl};
  }
`;

export const ActionCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.sm};
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: ${theme.shadows.lg};
    transform: translateY(-2px);
  }
  
  a {
    display: block;
    padding: ${theme.spacing.xl};
    text-decoration: none;
    color: inherit;
    
    @media (max-width: 768px) {
      padding: ${theme.spacing.lg};
    }
  }
`;

export const ActionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background-color: ${theme.colors.primary[100]};
  color: ${theme.colors.primary[600]};
  border-radius: ${theme.borderRadius.xl};
  margin-bottom: ${theme.spacing.lg};
  
  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    margin-bottom: ${theme.spacing.sm};
  }
`;

export const ActionTitle = styled.h3`
  color: ${theme.colors.gray[900]};
  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight.semibold};
  margin-bottom: ${theme.spacing.sm};
  
  @media (max-width: 768px) {
    font-size: ${theme.fontSize.lg};
  }
`;

export const ActionDescription = styled.p`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.fontSize.base};
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: ${theme.fontSize.sm};
  }
`;

export const StatsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.lg};
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.sm};
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.sm};
  padding: ${theme.spacing.lg};
  text-align: center;
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.sm};
  }
`;

export const StatIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: ${theme.colors.blue[100]};
  color: ${theme.colors.blue[600]};
  border-radius: ${theme.borderRadius.lg};
  margin: 0 auto ${theme.spacing.sm};
  
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

export const StatValue = styled.div`
  color: ${theme.colors.gray[900]};
  font-size: ${theme.fontSize['2xl']};
  font-weight: ${theme.fontWeight.bold};
  margin-bottom: ${theme.spacing.xs};
  
  @media (max-width: 768px) {
    font-size: ${theme.fontSize.xl};
  }
`;

export const StatLabel = styled.div`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight.medium};
`;
