import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';
import type { ComponentProps } from 'vue-component-type-helpers';
import { shallowRef, watch } from 'vue';
import SlickteamSidebarIcon from '../../../components/organisms/SlickteamSidebarIcon.vue';

type PageSlickteamSidebarIconArgs = ComponentProps<typeof SlickteamSidebarIcon> & { selectedModel?: string; drawerModel?: boolean };

const meta: Meta<PageSlickteamSidebarIconArgs> = {
  title: 'Organisms/layout/SlickteamSidebarIcon',
  component: SlickteamSidebarIcon,
  tags: ['docsPage'],
  args: {
    'onUpdate:drawer': fn(),
    'onUpdate:selected': fn(),
  },
  argTypes: {
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
    },
    background: {
      control: 'color',
    },
    showLeftBorder: {
      control: 'boolean',
    },
    rounded: {
      control: {
        type: 'select',
      },
      options: ['0', 'xs', 'sm', 'lg', 'md', 'xl', 'pill', 'circle', 'shaped'],
    },
    elevation: {
      control: 'text',
    },
    items: {
      control: false,
    },
  },
  render: (args, { updateArgs }) => ({
    components: { SlickteamSidebarIcon },
    setup() {
      const selectedModel = shallowRef(args.selectedModel);
      const drawerModel = shallowRef(args.drawerModel);

      // Optional: Keeps v-model in sync with storybook args
      watch(
        () => args.selectedModel,
        (val) => {
          selectedModel.value = val;
        },
      );
      watch(
        () => args.drawerModel,
        (val) => {
          drawerModel.value = val;
        },
      );
      function onUpdateModelDrawer(value: boolean) {
        updateArgs({ drawerModel: value });
      }
      function onUpdateModelSelected(value: string) {
        updateArgs({ selectedModel: value });
      }

      return { args, selectedModel, drawerModel, onUpdateModelDrawer, onUpdateModelSelected };
    },
    /* html */
    template: `<SlickteamSidebarIcon
      v-bind="args"
      v-model:selected="selectedModel"
      v-model:drawer="drawerModel"
      @update:drawer="onUpdateModelDrawer"
      @update:selected="onUpdateModelSelected"
    />`,
  }),
};
export default meta;

type Story = StoryObj<PageSlickteamSidebarIconArgs>;

export const Default = {
  args: {
    selectedModel: 'menu01',
    drawerModel: true,
    width: 65,
    elevation: '0',
    rounded: 'sm',
    height: 800,
    background: '#ffffff',
    showLeftBorder: true,
    items: [
      { icon: 'mdi-home', text: 'Menu 01', color: '#3729DD', value: 'menu01', count: 4 },
      { icon: 'mdi-home', text: 'Menu 02', color: '#4EBC1A', value: 'menu02', count: undefined },
      { icon: 'mdi-home', text: 'Menu 03', color: '#40fC1A', value: 'menu03', count: 19 },
      { icon: 'mdi-home', text: 'Menu 04', color: '#3EBC1A', value: 'menu04', count: 5 },
      { icon: 'mdi-home', text: 'Menu 05', color: '#4EBC10', value: 'menu05', count: 4 },
      { icon: 'mdi-home', text: 'Menu 06', color: '#4EBCaA', value: 'menu06', count: 6 },
      { icon: 'mdi-home', text: 'Menu 07', color: '#99BC1A', value: 'menu07', count: undefined },
      { icon: 'mdi-home', text: 'Menu 08', color: '#00BC1A', value: 'menu08', count: 7 },
      { icon: 'mdi-home', text: 'Menu 09', color: '#9EBC1A', value: 'menu09', count: undefined },
      { icon: 'mdi-home', text: 'Menu 10', color: '#55661A', value: 'menu10', count: 10 },
      { icon: 'mdi-home', text: 'Menu 11', color: '#40BC1A', value: 'menu11', count: undefined },
      { icon: 'mdi-home', text: 'Menu 12', color: '#4E1C1A', value: 'menu12', count: undefined },
      { icon: 'mdi-home', text: 'Menu 13', color: '#4E661A', value: 'menu13', count: 1 },
      { icon: 'mdi-home', text: 'Menu 14', color: '#4EBa1A', value: 'menu14', count: undefined },
      { icon: 'mdi-home', text: 'Menu 15', color: '#4E001B', value: 'menu15', count: undefined },
      { icon: 'mdi-home', text: 'Menu 16', color: '#0EBC1A', value: 'menu16', count: 6 },
      { icon: 'mdi-home', text: 'Menu 17', color: '#400C1F', value: 'menu17', count: undefined },
      { icon: 'mdi-home', text: 'Menu 18', color: '#40BC10', value: 'menu18', count: undefined },
      { icon: 'mdi-home', text: 'Menu 19', color: '#4E9C15', value: 'menu19', count: undefined },
      { icon: 'mdi-home', text: 'Menu 20', color: '#aEB01A', value: 'menu20', count: undefined },
    ],
  },
} satisfies Story;
