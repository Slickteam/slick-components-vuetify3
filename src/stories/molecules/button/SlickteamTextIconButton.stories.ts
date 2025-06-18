import type { Meta, StoryObj } from '@storybook/vue3-vite';

import SlickteamTextIconButton from '../../../components/molecules/button/SlickteamTextIconButton.vue';

const meta: Meta<typeof SlickteamTextIconButton> = {
  title: 'Molecules/button/SlickteamTextIconButton',
  component: SlickteamTextIconButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['x-small', 'small', 'default', 'large'],
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['outlined'],
    },
    color: {
      control: 'color',
    },
    icon: {
      control: {
        type: 'select',
      },
      options: ['mdi-home', 'mdi-'],
    },
    text: {
      control: 'text',
      description: 'Label in button',
    },
    title: {
      control: 'text',
      description: 'Title accessibility in button',
    },
    to: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
    target: {
      control: 'text',
    },
  },
  args: {
    text: 'Click me',
  },
};
export default meta;

type Story = StoryObj<typeof SlickteamTextIconButton>;

export const Primary: Story = {
  args: {
    size: 'default',
    text: 'Click me',
  },
};
