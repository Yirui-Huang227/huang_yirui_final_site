import { ReactNode } from 'react';

export interface TableHeaderProps {
  children: ReactNode;
  disabled?: boolean;
  backgroundColor?: string;
  className?: string;
  style?: React.CSSProperties;
}
