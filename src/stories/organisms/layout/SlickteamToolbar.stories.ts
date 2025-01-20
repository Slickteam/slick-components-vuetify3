import type { Meta, StoryObj } from '@storybook/vue3';
import type { ComponentProps } from 'vue-component-type-helpers';
import SlickteamToolbar from '../../../components/organisms/SlickteamToolbar.vue';

type PageSlickteamSidebarIconArgs = ComponentProps<typeof SlickteamToolbar> & {};

const meta: Meta<PageSlickteamSidebarIconArgs> = {
  title: 'Organisms/layout/SlickteamToolbar',
  component: SlickteamToolbar,
  tags: ['docsPage'],
  args: {},
  argTypes: {},
  render: () => ({
    components: { SlickteamToolbar },
    /* html */
    template: `<SlickteamToolbar>
      Topbar
    </SlickteamToolbar>`,
  }),
};

export default meta;

type Story = StoryObj<PageSlickteamSidebarIconArgs>;

export const Default = {
  args: {},
} satisfies Story;
