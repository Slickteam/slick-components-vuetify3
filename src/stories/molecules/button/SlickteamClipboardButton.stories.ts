import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/internal/test';

import SlickteamClipboardButton from '../../../components/molecules/button/SlickteamClipboardButton.vue';

const meta: Meta<typeof SlickteamClipboardButton> = {
  title: 'Molecules/button/SlickteamClipboardButton',
  component: SlickteamClipboardButton,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'color',
      description: 'Color of icon',
    },
    size: {
      description: 'Size of button',
      control: {
        type: 'select',
      },
      options: ['x-small', 'small', 'default', 'large'],
    },
    tooltip: {
      control: 'text',
      description: 'Tooltip of button',
    },
    value: {
      control: 'text',
      description: 'Value to copy in clipboard',
    },
  },
  args: {
    'onAfter:copy': fn(),
  },
};
export default meta;
type Story = StoryObj<typeof SlickteamClipboardButton>;

export const Primary: Story = {
  args: {
    tooltip: 'Copy me',
  },
};
