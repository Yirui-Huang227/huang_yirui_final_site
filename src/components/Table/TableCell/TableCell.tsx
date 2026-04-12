import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './TableCell.types';

const StyledCell = styled.td<{
  disabled?: boolean;
  backgroundColor?: string;
  align?: string;
}>`
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  text-align: ${({ align }) => align || 'left'};
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? '#f5f5f5' : backgroundColor || '#ffffff'};
  color: ${({ disabled }) => (disabled ? '#cccccc' : '#000000')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
  font-size: 0.875rem; /* 14px */

  @media (min-width: 768px) {
    padding: 0.75rem 1.25rem;
    font-size: 1rem; /* 16px */
  }

  @media (min-width: 1200px) {
    padding: 1rem 1.5rem;
    font-size: 1.125rem; /* 18px */
  }
`;

export const TableCell: React.FC<TableCellProps> = ({
  children,
  colSpan,
  rowSpan,
  align,
  disabled,
  backgroundColor,
  className,
  style,
}) => {
  return (
    <StyledCell
      colSpan={colSpan}
      rowSpan={rowSpan}
      align={align}
      disabled={disabled}
      backgroundColor={backgroundColor}
      className={className}
      style={style}
    >
      {children}
    </StyledCell>
  );
};
