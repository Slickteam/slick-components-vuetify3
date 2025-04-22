import type { Meta, StoryObj } from '@storybook/vue3';
import type { ComponentProps } from 'vue-component-type-helpers';

import SlickteamSidebar from '../../../components/organisms/SlickteamSidebar.vue';

type PageSlickteamSidebarIconArgs = ComponentProps<typeof SlickteamSidebar> & {};

const meta: Meta<PageSlickteamSidebarIconArgs> = {
  title: 'Organisms/layout/SlickteamSidebar',
  component: SlickteamSidebar,
  tags: ['docsPage'],
  args: {},
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
    showHeaderBottomBorder: {
      control: 'boolean',
    },
    backgroundColor: {
      control: 'color',
    },
    showBorder: {
      control: 'boolean',
    },
  },
  render: (args, { updateArgs }) => ({
    components: { SlickteamSidebar },
    setup() {
      function onUpdateModel(value: boolean) {
        updateArgs({ modelValue: value });
      }
      return { args, onUpdateModel };
    },
    /* html */
    template: `<SlickteamSidebar v-bind="args" @update:model-value="onUpdateModel">
      <template #header>Header</template>
      <template #default>
        <p>Content</p>
      </template>
      <template #footer>Footer</template>
    </SlickteamSidebar>`,
  }),
};

export default meta;

type Story = StoryObj<PageSlickteamSidebarIconArgs>;

export const Default = {
  args: {
    modelValue: true,
    elevation: '2',
    showHeaderBottomBorder: true,
    backgroundColor: '#ffffff',
    width: '256',
    showBorder: true,
  },
} satisfies Story;

export const Inverted = {
  args: {
    modelValue: true,
    elevation: '0',
    showHeaderBottomBorder: false,
    backgroundColor: '#f5f5f5',
    width: '256',
    showBorder: false,
  },
} satisfies Story;
