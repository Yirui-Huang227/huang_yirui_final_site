import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { TableFooter } from './TableFooter';

describe('TableFooter Component', () => {
  test('renders footer content', () => {
    render(
      <table>
        <TableFooter>
          <tr>
            <td>Test Footer</td>
          </tr>
        </TableFooter>
      </table>,
    );
    expect(screen.getByText('Test Footer')).toBeVisible();
  });

  test('applies disabled styles correctly', () => {
    const { container } = render(
      <table>
        <TableFooter disabled>
          <tr>
            <td>Disabled Footer</td>
          </tr>
        </TableFooter>
      </table>,
    );
    const footer = container.querySelector('tfoot');
    expect(footer).toHaveStyleRule('background-color', '#f5f5f5');
    expect(footer).toHaveStyleRule('cursor', 'not-allowed');
  });
});
