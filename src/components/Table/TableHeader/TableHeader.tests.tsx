import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { TableHeader } from './TableHeader';

describe('TableHeader Component', () => {
  test('renders header content', () => {
    render(
      <table>
        <TableHeader>
          <tr>
            <th>Test Header</th>
          </tr>
        </TableHeader>
      </table>,
    );
    expect(screen.getByText('Test Header')).toBeVisible();
  });

  test('applies disabled styles correctly', () => {
    const { container } = render(
      <table>
        <TableHeader disabled>
          <tr>
            <th>Disabled Header</th>
          </tr>
        </TableHeader>
      </table>,
    );
    const header = container.querySelector('thead');
    expect(header).toHaveStyleRule('background-color', '#f5f5f5');
    expect(header).toHaveStyleRule('cursor', 'not-allowed');
  });
});
