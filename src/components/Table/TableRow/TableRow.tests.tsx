import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { TableRow } from './TableRow';

describe('TableRow Component', () => {
  test('renders row content', () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <td>Test Row</td>
          </TableRow>
        </tbody>
      </table>,
    );
    expect(screen.getByText('Test Row')).toBeVisible();
  });

  test('applies disabled styles correctly', () => {
    const { container } = render(
      <table>
        <tbody>
          <TableRow disabled>
            <td>Disabled Row</td>
          </TableRow>
        </tbody>
      </table>,
    );

    const row = container.querySelector('tr');
    expect(row).toHaveStyleRule('background-color', '#f5f5f5');
    expect(row).toHaveStyleRule('cursor', 'not-allowed');
  });
});
