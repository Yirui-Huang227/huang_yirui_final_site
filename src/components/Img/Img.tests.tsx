import { render, screen } from '@testing-library/react';
import { Img } from './Img';

describe('Img Component', () => {
  test('renders image', () => {
    render(
      <Img src="https://placehold.co/600x400/000000/FFF" alt="test image" />,
    );
    expect(screen.getByAltText('test image')).toBeVisible();
  });

  test('applies opacity when disabled', () => {
    render(
      <Img
        src="https://placehold.co/600x400/000000/FFF"
        alt="disabled"
        disabled
      />,
    );
    expect(screen.getByAltText('disabled')).toHaveStyle('opacity: 0.5');
  });
});
