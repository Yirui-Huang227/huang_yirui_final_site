import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { Table } from './Table';

describe('Table Component', () => {
  test('renders table with children', () => {
    render(
      <Table>
        <tbody>
          <tr>
            <td>Test Cell</td>
          </tr>
        </tbody>
      </Table>,
    );
    expect(screen.getByText('Test Cell')).toBeVisible();
  });

  test('applies disabled styles correctly', () => {
    const { container } = render(
      <Table disabled style={{ backgroundColor: '#ffffff' }}>
        <tbody>
          <tr>
            <td>Disabled Cell</td>
          </tr>
        </tbody>
      </Table>,
    );

    const table = container.querySelector('table');

    expect(table).toHaveStyleRule('background-color', '#f5f5f5');
    expect(table).toHaveStyleRule('cursor', 'not-allowed');
  });
});
