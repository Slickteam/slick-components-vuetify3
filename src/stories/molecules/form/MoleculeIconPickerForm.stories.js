import MoleculeIconPickerForm from '../../../components/molecules/MoleculeIconPickerForm.vue';

export default {
  title: 'Molecules/form/MoleculeIconPickerForm',
  component: MoleculeIconPickerForm,
  tags: ['docsPage'],
  args: {},
  argTypes: {
    // onClick: {},
    density: {
      control: {
        type: 'select',
      },
      options: ['', 'compact', 'comfortable'],
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['outlined', 'solo'],
    },
    label: {
      control: 'text',
      description: 'Label of form',
    },
  },
};

export const Primary = {
  args: {
    label: 'Icône',
  },
};
