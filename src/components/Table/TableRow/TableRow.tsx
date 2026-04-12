import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './TableRow.types';

const StyledRow = styled.tr<{
  hover?: boolean;
  selected?: boolean;
  disabled?: boolean;
}>`
  background-color: ${({ selected, disabled }) =>
    disabled ? '#f5f5f5' : selected ? '#e0f7fa' : 'transparent'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
  font-size: 0.875rem; /* 14px */
  line-height: 1.4;

  &:hover {
    background-color: ${({ hover, disabled }) =>
      hover && !disabled ? '#f1f1f1' : undefined};
  }

  td {
    padding: 0.5rem 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1rem; /* 16px */
    td {
      padding: 0.75rem 1.25rem;
    }
  }

  @media (min-width: 1200px) {
    font-size: 1.125rem; /* 18px */
    td {
      padding: 1rem 1.5rem;
    }
  }
`;

export const TableRow: React.FC<TableRowProps> = ({
  children,
  hover,
  selected,
  disabled,
  className,
  style,
}) => {
  return (
    <StyledRow
      hover={hover}
      selected={selected}
      disabled={disabled}
      className={className}
      style={style}
    >
      {children}
    </StyledRow>
  );
};
