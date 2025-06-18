import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { ComponentProps } from 'vue-component-type-helpers';
import { VApp, VMain } from 'vuetify/components';

import SlickteamSidebar from '../../../components/organisms/SlickteamSidebar.vue';

type PageSlickteamSidebarIconArgs = ComponentProps<typeof SlickteamSidebar> & {};

const meta: Meta<PageSlickteamSidebarIconArgs> = {
  title: 'Organisms/layout/SlickteamSidebar',
  component: SlickteamSidebar,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
    },
    elevation: {
      control: 'text',
    },
    width: {
      control: 'text',
    },
    backgroundColor: {
      control: 'color',
    },
    showHeaderBottomBorder: {
      control: 'boolean',
    },
    showBorderRight: {
      control: 'boolean',
    },
    borderColor: {
      control: 'color',
    },
    heightHeader: {
      control: 'text',
    },
  },
  render: (args, { updateArgs }) => ({
    components: { VApp, VMain, SlickteamSidebar },
    setup() {
      function onUpdateModel(value: boolean) {
        updateArgs({ modelValue: value });
      }
      return { args, onUpdateModel };
    },
    /* html */
    template: `<div style="height: 300px;">
      <v-app theme="light">
        <v-main class="d-flex flex-column">
          <SlickteamSidebar v-bind="args" @update:model-value="onUpdateModel">
            <template #header>Header</template>
            <template #default>
              <p>Content</p>
            </template>
            <template #footer>Footer</template>
          </SlickteamSidebar>
        </v-main>
      </v-app>
    </div>`,
  }),
};

export default meta;

type Story = StoryObj<PageSlickteamSidebarIconArgs>;

export const Default: Story = {
  args: {
    modelValue: true,
    elevation: '2',
    showHeaderBottomBorder: true,
    backgroundColor: '#ffffff',
    width: '256',
    borderColor: '#aaa',
    showBorderRight: true,
    heightHeader: '64',
  },
};

export const Inverted: Story = {
  args: {
    modelValue: true,
    elevation: '0',
    showHeaderBottomBorder: false,
    backgroundColor: '#f5f5f5',
    width: '256',
    borderColor: '#aaa',
    showBorderRight: false,
    heightHeader: '64',
  },
};
