import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TableRow } from './TableRow';

const meta: Meta<typeof TableRow> = {
  title: 'UI/Table/TableRow',
  component: TableRow,
  argTypes: {
    hover: { control: 'boolean' },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  args: {
    hover: false,
    selected: false,
    disabled: false,
    children: 'Row Content',
  },
};

export const Disabled: Story = {
  args: {
    hover: false,
    selected: false,
    disabled: true,
    children: 'Disabled Row',
  },
};
