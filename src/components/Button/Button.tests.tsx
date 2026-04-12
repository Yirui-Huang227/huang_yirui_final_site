import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Button } from './Button';

test('Button is visible', () => {
  render(<Button label="Test Button" />);
  expect(screen.getByText('Test Button')).toBeVisible();
});

test('Button background changes when disabled', () => {
  render(<Button label="Disabled" disabled />);
  expect(screen.getByText('Disabled')).toHaveStyle('background-color: #cccccc');
});
