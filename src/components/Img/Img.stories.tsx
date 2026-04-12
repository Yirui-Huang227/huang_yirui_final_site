import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Img } from './Img';

const meta: Meta<typeof Img> = {
  title: 'UI/Img',
  component: Img,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: 'https://placehold.co/600x400/000000/FFF',
    alt: 'Sample Image',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://placehold.co/600x400/000000/FFF',
    alt: 'Disabled Image',
    disabled: true,
  },
};
