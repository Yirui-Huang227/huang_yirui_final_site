import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Button',
    disabled: false,
    backgroundColor: '#007bff',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    backgroundColor: '#007bff',
  },
};
