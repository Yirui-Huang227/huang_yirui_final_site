import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation links', () => {
  render(<App />);

  expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /work/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /resources/i })).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /developer setup/i }),
  ).toBeInTheDocument();
});
