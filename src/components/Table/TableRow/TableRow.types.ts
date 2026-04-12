import { ReactNode } from 'react';

export interface TableRowProps {
  children: ReactNode;
  hover?: boolean;
  selected?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
