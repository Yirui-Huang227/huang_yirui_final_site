import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { TableCell } from './TableCell';

describe('TableCell Component', () => {
  test('renders cell content', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Test Cell</TableCell>
          </tr>
        </tbody>
      </table>,
    );
    expect(screen.getByText('Test Cell')).toBeVisible();
  });

  test('applies disabled styles correctly', () => {
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <TableCell disabled>Disabled Cell</TableCell>
          </tr>
        </tbody>
      </table>,
    );

    const cell = container.querySelector('td');
    expect(cell).toHaveStyleRule('background-color', '#f5f5f5');
    expect(cell).toHaveStyleRule('cursor', 'not-allowed');
  });
});
