import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown Component', () => {
  test('renders options', () => {
    render(<Dropdown options={['A', 'B']} />);
    expect(screen.getByText('A')).toBeVisible();
    expect(screen.getByText('B')).toBeVisible();
  });

  test('is disabled when prop is true', () => {
    render(<Dropdown options={['A']} disabled />);
    expect(screen.getByRole('combobox')).toBeDisabled();
  });
});
