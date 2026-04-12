import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: { text: 'Label', disabled: false, color: '#000000' },
};
export const Disabled: Story = {
  args: { text: 'Disabled Label', disabled: true, color: '#000000' },
};
