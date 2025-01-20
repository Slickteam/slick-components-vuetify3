import type { Meta, StoryObj } from '@storybook/vue3';
import SlickteamColorPicker from '../../../components/molecules/picker/SlickteamColorPicker.vue';

const meta: Meta<typeof SlickteamColorPicker> = {
  title: 'Molecules/form/SlickteamColorPicker',
  component: SlickteamColorPicker,
  tags: ['docsPage'],
  args: {},
  argTypes: {
    // onClick: {},
  },
};
export default meta;

type Story = StoryObj<typeof SlickteamColorPicker>;

export const Primary = {
  args: {},
} satisfies Story;
