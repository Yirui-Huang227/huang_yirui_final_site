import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders home page heading', () => {
  render(<Home />);
  expect(screen.getByText(/huang yirui/i)).toBeInTheDocument();
});

test('renders basic information label', () => {
  render(<Home />);
  expect(screen.getByText(/basic information/i)).toBeInTheDocument();
});
