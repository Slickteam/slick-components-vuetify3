import type { Meta, StoryObj } from '@storybook/vue3-vite';

import SlickteamIconPicker from '../../../components/molecules/picker/SlickteamIconPicker.vue';

const meta: Meta<typeof SlickteamIconPicker> = {
  title: 'Molecules/form/SlickteamIconPicker',
  component: SlickteamIconPicker,
  tags: ['autodocs'],
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
      options: ['filled', 'underlined', 'outlined', 'plain', 'solo', 'solo-inverted', 'solo-filled'],
    },
    label: {
      control: 'text',
      description: 'Label of form',
    },
  },
  render: (args) => ({
    components: { SlickteamIconPicker },
    setup() {
      return { args };
    },
    /* html */
    template: `
        <div style="width:300px"><SlickteamIconPicker v-bind="args"/></div>
      `,
  }),
};
export default meta;

type Story = StoryObj<typeof SlickteamIconPicker>;

export const Primary: Story = {
  args: {
    label: 'Icône',
  },
};
