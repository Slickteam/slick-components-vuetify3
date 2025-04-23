import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';
import type { ComponentProps } from 'vue-component-type-helpers';

import SlickteamToolbar from '../../../components/organisms/SlickteamToolbar.vue';

type PageSlickteamSidebarIconArgs = ComponentProps<typeof SlickteamToolbar> & {};

const meta: Meta<PageSlickteamSidebarIconArgs> = {
  title: 'Organisms/layout/SlickteamToolbar',
  component: SlickteamToolbar,
  tags: ['docsPage'],
  args: {
    'onToggle:menu': fn(),
    'onToggle:right-menu': fn(),
  },
  argTypes: {
    sidebarRightIcon: {
      control: 'boolean',
    },
    showBottomBorder: {
      control: 'boolean',
    },
    bottomBorderColor: {
      control: 'color',
    },
    elevation: {
      control: 'text',
    },
    height: {
      control: 'number',
    },
    color: {
      control: 'color',
    },
  },
  render: (args) => ({
    components: { SlickteamToolbar },
    setup() {
      return { args };
    },
    /* html */
    template: `<SlickteamToolbar v-bind="args">Top bar</SlickteamToolbar>`,
  }),
};

export default meta;

type Story = StoryObj<PageSlickteamSidebarIconArgs>;

export const Default = {
  args: {
    sidebarRightIcon: false,
    showBottomBorder: true,
    bottomBorderColor: '#aaa',
    color: 'background',
    elevation: '0',
    height: 64,
  },
} satisfies Story;
