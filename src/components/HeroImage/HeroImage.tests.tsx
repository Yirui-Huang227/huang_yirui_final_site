import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { HeroImage } from './HeroImage';

describe('HeroImage Component', () => {
  test('renders title and subtitle', () => {
    render(
      <HeroImage
        src="https://placehold.co/1920x800/000000/FFF"
        alt="hero"
        title="Hero Title"
        subtitle="Hero Subtitle"
      />,
    );

    expect(screen.getByText('Hero Title')).toBeVisible();
    expect(screen.getByText('Hero Subtitle')).toBeVisible();
  });

  test('applies opacity when disabled', () => {
    render(
      <HeroImage
        src="https://placehold.co/1920x800/000000/FFF"
        alt="hero"
        title="Disabled Hero"
        disabled
      />,
    );

    const titleElement = screen.getByText('Disabled Hero');
    expect(titleElement.parentElement).toHaveStyle('opacity: 0.5');
  });
});
