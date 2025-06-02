import type { Meta, StoryObj } from '@storybook/vue3';

import SlickteamColorPicker from '../../../components/molecules/picker/SlickteamColorPicker.vue';

const meta: Meta<typeof SlickteamColorPicker> = {
  title: 'Molecules/form/SlickteamColorPicker',
  component: SlickteamColorPicker,
  tags: ['docsPage'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['filled', 'outlined', 'plain', 'underlined', 'solo', 'solo-inverted', 'solo-filled'],
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

export const Primary = {
  args: {},
} satisfies Story;
