import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableFooter } from './TableFooter';

const meta: Meta<typeof TableFooter> = {
  title: 'UI/Table/TableFooter',
  component: TableFooter,
  argTypes: {
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof TableFooter>;

export const Default: Story = {
  args: {
    disabled: false,
    backgroundColor: '#e0e0e0',
    children: (
      <tr>
        <td>Footer 1</td>
        <td>Footer 2</td>
      </tr>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    backgroundColor: '#e0e0e0',
    children: (
      <tr>
        <td>Disabled Footer</td>
        <td>Disabled Footer 2</td>
      </tr>
    ),
  },
};
