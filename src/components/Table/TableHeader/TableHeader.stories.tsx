import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableHeader } from './TableHeader';

const meta: Meta<typeof TableHeader> = {
  title: 'UI/Table/TableHeader',
  component: TableHeader,
  argTypes: {
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  args: {
    disabled: false,
    backgroundColor: '#e0e0e0',
    children: (
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
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
        <th>Disabled Header</th>
        <th>Disabled Header 2</th>
      </tr>
    ),
  },
};
