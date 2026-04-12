import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './TableFooter.types';

const StyledFooter = styled.tfoot<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? '#f5f5f5' : backgroundColor || '#e0e0e0'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
  font-size: 0.875rem; /* 14px */

  td {
    padding: 0.5rem 1rem;
    border-top: 1px solid #ccc;
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

export const TableFooter: React.FC<TableFooterProps> = ({
  children,
  disabled,
  backgroundColor,
  className,
  style,
}) => {
  return (
    <StyledFooter
      disabled={disabled}
      backgroundColor={backgroundColor}
      className={className}
      style={style}
    >
      {children}
    </StyledFooter>
  );
};
