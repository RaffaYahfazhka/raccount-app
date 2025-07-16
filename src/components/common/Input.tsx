
import { StyledInput, StyledSelect } from './Input.styles';

interface InputProps {
  error?: boolean;
  fullWidth?: boolean;
  type?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

interface SelectProps {
  error?: boolean;
  fullWidth?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}

export const Input = (props: InputProps) => {
  return <StyledInput {...props} />;
};

export const Select = ({ children, ...props }: SelectProps) => {
  return <StyledSelect {...props}>{children}</StyledSelect>;
};
