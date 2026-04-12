import { render, screen } from '@testing-library/react';
import { RadioButton } from './RadioButton';

describe('RadioButton Component', () => {
  test('renders label', () => {
    render(<RadioButton label="Test Radio" />);
    expect(screen.getByText('Test Radio')).toBeVisible();
  });

  test('is disabled when prop is true', () => {
    render(<RadioButton label="Disabled" disabled />);
    expect(screen.getByRole('radio')).toBeDisabled();
  });
});
