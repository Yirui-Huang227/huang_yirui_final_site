import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Text } from './Text';

test('Text is visible', () => {
  render(<Text content="Test Text" />);
  expect(screen.getByText('Test Text')).toBeVisible();
});

test('Text color changes when disabled', () => {
  render(<Text content="Disabled" disabled />);
  expect(screen.getByText('Disabled')).toHaveStyle('color: #cccccc');
});
