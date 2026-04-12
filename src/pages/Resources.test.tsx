import { render, screen } from '@testing-library/react';
import Resources from './Resources';

test('renders resources page heading', () => {
  render(<Resources />);
  expect(
    screen.getByRole('heading', { name: /resources/i }),
  ).toBeInTheDocument();
});

test('renders resource cards', () => {
  render(<Resources />);
  expect(screen.getByText(/github/i)).toBeInTheDocument();
  expect(screen.getByText(/docker/i)).toBeInTheDocument();
});
