import { render, screen } from '@testing-library/react';
import App from './App';

test('renders basic information section', () => {
  render(<App />);
  const sectionHeading = screen.getByRole('heading', {
    name: /^basic information$/i,
  });
  expect(sectionHeading).toBeInTheDocument();
});

test('renders work section', () => {
  render(<App />);
  const sectionHeading = screen.getByRole('heading', {
    name: /^work$/i,
  });
  expect(sectionHeading).toBeInTheDocument();
});

test('renders skills section', () => {
  render(<App />);
  const sectionHeading = screen.getByRole('heading', {
    name: /^skills$/i,
  });
  expect(sectionHeading).toBeInTheDocument();
});

test('renders resources section', () => {
  render(<App />);
  const sectionHeading = screen.getByRole('heading', {
    name: /^resources$/i,
  });
  expect(sectionHeading).toBeInTheDocument();
});

test('renders developer setup section', () => {
  render(<App />);
  const sectionHeading = screen.getByRole('heading', {
    name: /^developer setup$/i,
  });
  expect(sectionHeading).toBeInTheDocument();
});
