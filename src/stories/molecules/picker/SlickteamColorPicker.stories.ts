import type { Meta, StoryObj } from '@storybook/vue3-vite';

import SlickteamColorPicker from '../../../components/molecules/picker/SlickteamColorPicker.vue';

const meta: Meta<typeof SlickteamColorPicker> = {
  title: 'Molecules/form/SlickteamColorPicker',
  component: SlickteamColorPicker,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      description: 'Variable of text-field',
      options: ['filled', 'outlined', 'plain', 'underlined', 'solo', 'solo-inverted', 'solo-filled'],
    },
    label: {
      control: 'text',
      description: 'Label of text-field',
    },
    density: {
      control: {
        type: 'select',
      },
      description: 'Density of text-field',
      options: ['default', 'comfortable', 'compact'],
    },
  },

  render: (args) => ({
    components: { SlickteamColorPicker },
    setup() {
      return { args };
    },
    /* html */
    template: `
        <div style="width:300px"><SlickteamColorPicker v-bind="args"/></div>
      `,
  }),
};
export default meta;

type Story = StoryObj<typeof SlickteamColorPicker>;

export const Primary: Story = {
  args: {
    label: 'Couleur',
  },
};
