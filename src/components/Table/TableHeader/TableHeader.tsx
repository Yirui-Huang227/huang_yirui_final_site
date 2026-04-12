import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

const StyledHeader = styled.thead<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? '#f5f5f5' : backgroundColor || '#e0e0e0'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
  font-size: 0.875rem; /* 14px */

  th {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #ccc;
    text-align: left;
  }

  @media (min-width: 768px) {
    font-size: 1rem; /* 16px */
    th {
      padding: 0.75rem 1.25rem;
    }
  }

  @media (min-width: 1200px) {
    font-size: 1.125rem; /* 18px */
    th {
      padding: 1rem 1.5rem;
    }
  }
`;

export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  disabled,
  backgroundColor,
  className,
  style,
}) => {
  return (
    <StyledHeader
      disabled={disabled}
      backgroundColor={backgroundColor}
      className={className}
      style={style}
    >
      {children}
    </StyledHeader>
  );
};
