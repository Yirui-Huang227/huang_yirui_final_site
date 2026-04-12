import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'UI/Dropdown',
  component: Dropdown,
  argTypes: {
    selected: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    selected: 'Option 1',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    options: ['Option 1', 'Option 2'],
    selected: 'Option 1',
    disabled: true,
  },
};
