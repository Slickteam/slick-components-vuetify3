import { MoleculeTextIconButton } from '../../../components/molecule';

export default {
  title: 'Molecule/button/MoleculeTextIconButton',
  component: MoleculeTextIconButton,
  tags: ['button', 'molecule'],
  args: {
    text: 'Click me',
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
};

export const Primary = {
  args: {
    size: 'default',
    text: 'Click me',
  },
};
