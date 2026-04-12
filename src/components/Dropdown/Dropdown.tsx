import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 0.6rem;
  font-size: 1rem;
  border-radius: 4px;
  width: 100%;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  disabled,
  onChange,
}) => {
  return (
    <StyledSelect disabled={disabled} onChange={onChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};
