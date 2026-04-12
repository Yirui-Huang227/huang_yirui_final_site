import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? '#cccccc' : backgroundColor || '#007bff'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  width: 100%;

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 1 : 0.9)};
  }

  @media (min-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 1.1rem;
    width: auto;
  }

  @media (min-width: 1200px) {
    padding: 0.75rem 1.5rem;
    font-size: 1.2rem;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  backgroundColor,
  onClick,
}) => (
  <StyledButton
    disabled={disabled}
    backgroundColor={backgroundColor}
    onClick={onClick}
  >
    {label}
  </StyledButton>
);
