import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledLabel = styled.label<{ disabled?: boolean }>`
  color: ${({ disabled }) => (disabled ? '#cccccc' : '#000')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;

  @media (min-width: 768px) {
    gap: 0.75rem;
    font-size: 1rem; /* 16px */
  }

  @media (min-width: 1200px) {
    gap: 1rem;
    font-size: 1.125rem; /* 18px */
  }
`;

const StyledInput = styled.input`
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  checked,
  disabled,
  onChange,
}) => (
  <StyledLabel disabled={disabled}>
    <StyledInput
      type="radio"
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
    {label}
  </StyledLabel>
);
