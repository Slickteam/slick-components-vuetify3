import SlickteamClipboardButton from '../../../components/molecules/button/SlickteamClipboardButton.vue';

export default {
  title: 'Molecules/button/SlickteamClipboardButton',
  component: SlickteamClipboardButton,
  tags: ['docsPage'],
  args: {},
  argTypes: {
    onClick: {},
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

export const Primary = {
  args: {
    primary: true,
    tooltip: 'Copy me',
  },
};
