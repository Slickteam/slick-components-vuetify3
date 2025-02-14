import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';
import { shallowRef, watch } from 'vue';
import type { ComponentProps } from 'vue-component-type-helpers';

import SlickteamSidebar from '../../../components/organisms/SlickteamSidebar.vue';

type PageSlickteamSidebarIconArgs = ComponentProps<typeof SlickteamSidebar> & {};

const meta: Meta<PageSlickteamSidebarIconArgs> = {
  title: 'Organisms/layout/SlickteamSidebar',
  component: SlickteamSidebar,
  tags: ['docsPage'],
  args: {
    'onUpdate:rail': fn(),
  },
  argTypes: {
    modelValue: {
      control: 'boolean',
    },
    rail: {
      control: 'boolean',
    },
    elevation: {
      control: 'text',
    },
    showHeaderBottomBorder: {
      control: 'boolean',
    },
    iconRailButtonColor: {
      control: 'boolean',
    },
    showRailButton: {
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
      const railValue = shallowRef(args.rail);

      // Optional: Keeps v-model in sync with storybook args
      watch(
        () => args.rail,
        (val) => {
          railValue.value = val;
        },
      );
      function onUpdateModel(value: boolean) {
        updateArgs({ modelValue: value });
      }
      function onUpdateRail(value: boolean) {
        railValue.value = value;
        updateArgs({ rail: value });
      }

      return { args, railValue, onUpdateRail, onUpdateModel };
    },
    /* html */
    template: `<SlickteamSidebar v-bind="args" :rail="railValue" @update:rail="onUpdateRail" @update:model-value="onUpdateModel">
      <template #header="{ rail }">R={{rail}} </template>
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
    rail: false,
    elevation: '2',
    showHeaderBottomBorder: true,
    iconRailButtonColor: '#aaaaaa',
    showRailButton: true,
    backgroundColor: '#ffffff',
    showBorder: true,
  },
} satisfies Story;

export const Inverted = {
  args: {
    modelValue: true,
    rail: false,
    elevation: '0',
    showHeaderBottomBorder: false,
    iconRailButtonColor: '#aaaaaa',
    showRailButton: true,
    backgroundColor: '#f5f5f5',
    showBorder: false,
  },
} satisfies Story;
