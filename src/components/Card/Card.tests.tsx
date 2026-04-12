import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Card } from './Card';

describe('Card Component', () => {
  test('renders title and content', () => {
    render(<Card title="Test Title" content="Test Content" />);

    expect(screen.getByText('Test Title')).toBeVisible();
    expect(screen.getByText('Test Content')).toBeVisible();
  });

  test('applies disabled styles correctly', () => {
    const { getByTestId } = render(
      <Card title="Disabled" content="Disabled content" disabled />,
    );

    const card = getByTestId('card-container');

    expect(card).toHaveStyleRule('color', '#cccccc');
    expect(card).toHaveStyleRule('background-color', '#f5f5f5');
  });
});
