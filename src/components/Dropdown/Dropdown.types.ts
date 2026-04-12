export interface DropdownProps {
  options: string[];
  selected?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
