import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    content: 'This is card content.',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Card',
    content: 'Card is disabled.',
    disabled: true,
  },
};
