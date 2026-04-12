import { ReactNode } from 'react';

export interface TableProps {
  children: ReactNode;
  disabled?: boolean;
  backgroundColor?: string;
  className?: string;
  style?: React.CSSProperties;
}
