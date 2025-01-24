import type { Meta, StoryObj } from '@storybook/vue3';

import SlickteamIconButton from '../../../components/molecules/button/SlickteamIconButton.vue';

const meta: Meta<typeof SlickteamIconButton> = {
  title: 'Molecules/button/SlickteamIconButton',
  component: SlickteamIconButton,
  tags: ['docsPage'],
  args: {
    title: 'Click me',
  },
  argTypes: {
    // onClick: {},
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
    showChip: {
      control: 'boolean',
    },
    contentChip: {
      control: 'text',
    },
  },
};
export default meta;
type Story = StoryObj<typeof SlickteamIconButton>;

export const Primary = {
  args: {
    title: 'Click me',
  },
} satisfies Story;
