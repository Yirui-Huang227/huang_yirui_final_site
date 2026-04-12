import { render, screen } from '@testing-library/react';
import DeveloperSetup from './DeveloperSetup';

test('renders developer setup heading', () => {
  render(<DeveloperSetup />);
  expect(
    screen.getByRole('heading', { name: /developer setup/i }),
  ).toBeInTheDocument();
});

test('renders setup table content', () => {
  render(<DeveloperSetup />);
  expect(screen.getByText(/vs code setup/i)).toBeInTheDocument();
  expect(screen.getByText(/terminal setup/i)).toBeInTheDocument();
});
