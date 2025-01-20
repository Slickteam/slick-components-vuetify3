import type { Meta, StoryObj } from '@storybook/vue3';
import SlickteamIconPicker from '../../../components/molecules/picker/SlickteamIconPicker.vue';

const meta: Meta<typeof SlickteamIconPicker> = {
  title: 'Molecules/form/SlickteamIconPicker',
  component: SlickteamIconPicker,
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
      options: ['filled', 'underlined', 'outlined', 'plain', 'solo', 'solo-inverted', 'solo-filled'],
    },
    label: {
      control: 'text',
      description: 'Label of form',
    },
  },
};
export default meta;

type Story = StoryObj<typeof SlickteamIconPicker>;

export const Primary = {
  args: {
    label: 'Icône',
  },
} satisfies Story;
