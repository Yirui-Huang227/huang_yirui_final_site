import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'UI/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: { content: 'Some text', disabled: false, color: '#000000' },
};
export const Disabled: Story = {
  args: { content: 'Disabled text', disabled: true, color: '#000000' },
};
