import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? '#f5f5f5' : backgroundColor || '#ffffff'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
  font-size: 0.875rem; /* 14px */

  th,
  td {
    border: 1px solid #ddd;
    padding: 0.5rem;
    text-align: left;
  }

  @media (min-width: 768px) {
    font-size: 1rem; /* 16px */
    th,
    td {
      padding: 0.75rem;
    }
  }

  @media (min-width: 1200px) {
    font-size: 1.125rem; /* 18px */
    th,
    td {
      padding: 1rem;
    }
  }
`;

export const Table: React.FC<TableProps> = ({
  children,
  disabled,
  backgroundColor,
  className,
  style,
}) => {
  return (
    <StyledTable
      disabled={disabled}
      backgroundColor={backgroundColor}
      className={className}
      style={style}
    >
      {children}
    </StyledTable>
  );
};
