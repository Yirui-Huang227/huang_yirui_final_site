import { ReactNode } from 'react';

export interface TableCellProps {
  children: ReactNode;
  colSpan?: number;
  rowSpan?: number;
  align?: 'left' | 'center' | 'right';
  disabled?: boolean;
  backgroundColor?: string;
  className?: string;
  style?: React.CSSProperties;
}
