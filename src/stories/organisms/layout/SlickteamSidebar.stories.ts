import type { Meta, StoryObj } from '@storybook/vue3';
import type { ComponentProps } from 'vue-component-type-helpers';
import SlickteamSidebar from '../../../components/organisms/SlickteamSidebar.vue';

type PageSlickteamSidebarIconArgs = ComponentProps<typeof SlickteamSidebar> & {};

const meta: Meta<PageSlickteamSidebarIconArgs> = {
  title: 'Organisms/layout/SlickteamSidebar',
  component: SlickteamSidebar,
  tags: ['docsPage'],
  args: {},
  argTypes: {},
  render: () => ({
    components: { SlickteamSidebar },
    /* html */
    template: `<SlickteamSidebar>
      <template #header="{ rail }">sidebar {{rail}} </template>
    </SlickteamSidebar>`,
  }),
};

export default meta;

type Story = StoryObj<PageSlickteamSidebarIconArgs>;

export const Default = {
  args: {},
} satisfies Story;
