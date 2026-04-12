import { ReactNode } from 'react';

export interface TableFooterProps {
  children: ReactNode;
  disabled?: boolean;
  backgroundColor?: string;
  className?: string;
  style?: React.CSSProperties;
}
