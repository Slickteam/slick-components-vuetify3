import type { Meta, StoryObj } from '@storybook/vue3';

import SlickteamClipboardButton from '../../../components/molecules/button/SlickteamClipboardButton.vue';

const meta: Meta<typeof SlickteamClipboardButton> = {
  title: 'Molecules/button/SlickteamClipboardButton',
  component: SlickteamClipboardButton,
  tags: ['docsPage'],
  args: {},
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['x-small', 'small', 'default', 'large'],
    },
    color: {
      control: 'color',
    },
    tooltip: {
      control: 'text',
      description: 'tooltip of button',
    },
    value: {
      control: 'text',
      description: 'Value to copy in clipboard',
    },
  },
};
export default meta;

type Story = StoryObj<typeof SlickteamClipboardButton>;

export const Primary = {
  args: {
    tooltip: 'Copy me',
  },
} satisfies Story;
