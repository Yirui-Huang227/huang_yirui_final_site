import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableCell } from './TableCell';

const meta: Meta<typeof TableCell> = {
  title: 'UI/Table/TableCell',
  component: TableCell,
  argTypes: {
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    align: { control: 'select', options: ['left', 'center', 'right'] },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
  args: {
    children: 'Cell Content',
    disabled: false,
    backgroundColor: '#ffffff',
    align: 'left',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Cell',
    disabled: true,
    backgroundColor: '#ffffff',
    align: 'left',
  },
};
