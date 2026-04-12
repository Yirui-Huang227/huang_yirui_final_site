import { render, screen } from '@testing-library/react';
import Work from './Work';

test('renders work page heading', () => {
  render(<Work />);
  expect(screen.getByRole('heading', { name: /work/i })).toBeInTheDocument();
});

test('renders search input', () => {
  render(<Work />);
  expect(screen.getByPlaceholderText(/search projects/i)).toBeInTheDocument();
});

test('renders project cards', () => {
  render(<Work />);
  expect(screen.getByText(/winnipeg parks explorer/i)).toBeInTheDocument();
  expect(screen.getByText(/greenleaf store/i)).toBeInTheDocument();
});
