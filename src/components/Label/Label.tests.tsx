import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Label } from './Label';

test('Label is visible', () => {
  render(<Label text="Test Label" />);
  expect(screen.getByText('Test Label')).toBeVisible();
});

test('Label color changes when disabled', () => {
  render(<Label text="Disabled" disabled />);
  expect(screen.getByText('Disabled')).toHaveStyle('color: #cccccc');
});
