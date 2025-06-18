import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import type { ComponentProps } from 'vue-component-type-helpers';
import { VApp, VMain } from 'vuetify/components';

import SlickteamToolbar from '../../../components/organisms/SlickteamToolbar.vue';

type PageSlickteamSidebarIconArgs = ComponentProps<typeof SlickteamToolbar> & {};

const meta: Meta<PageSlickteamSidebarIconArgs> = {
  title: 'Organisms/layout/SlickteamToolbar',
  component: SlickteamToolbar,
  tags: ['autodocs'],
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
  args: {
    'onToggle:menu': fn(),
    'onToggle:right-menu': fn(),
  },
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => ({
    components: { VApp, VMain, SlickteamToolbar },
    setup() {
      return { args };
    },
    /* html */
    template: `<div style="height: 100px;">
      <v-app theme="light">
        <v-main class="d-flex flex-column">
          <SlickteamToolbar v-bind="args">Top bar</SlickteamToolbar>
        </v-main>
      </v-app>
    </div>`,
  }),
};

export default meta;

type Story = StoryObj<PageSlickteamSidebarIconArgs>;

export const Default: Story = {
  args: {
    sidebarRightIcon: false,
    showBottomBorder: true,
    bottomBorderColor: '#aaa',
    color: 'background',
    elevation: '0',
    height: 64,
  },
};
