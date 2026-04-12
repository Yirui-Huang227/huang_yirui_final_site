import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'UI/Table/Table',
  component: Table,
  argTypes: {
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    disabled: false,
    backgroundColor: '#ffffff',
    children: (
      <tbody>
        <tr>
          <td>Row 1, Cell 1</td>
          <td>Row 1, Cell 2</td>
        </tr>
        <tr>
          <td>Row 2, Cell 1</td>
          <td>Row 2, Cell 2</td>
        </tr>
      </tbody>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    backgroundColor: '#ffffff',
    children: (
      <tbody>
        <tr>
          <td>Row 1, Cell 1</td>
          <td>Row 1, Cell 2</td>
        </tr>
        <tr>
          <td>Row 2, Cell 1</td>
          <td>Row 2, Cell 2</td>
        </tr>
      </tbody>
    ),
  },
};
