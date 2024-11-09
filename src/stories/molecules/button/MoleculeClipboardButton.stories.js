import MoleculeClipboardButton from '../../../components/molecules/MoleculeClipboardButton.vue';

export default {
  title: 'Molecules/button/MoleculeClipboardButton',
  component: MoleculeClipboardButton,
  tags: ['docsPage'],
  args: {
    text: 'Copy me',
  },
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
    text: {
      control: 'text',
      description: 'Title accessibility in button',
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
    text: 'Copy me',
  },
};
