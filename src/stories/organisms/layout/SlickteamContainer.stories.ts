import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';
import { shallowRef, watch } from 'vue';
import type { ComponentProps } from 'vue-component-type-helpers';

import SlickteamContainer from '../../../components/organisms/SlickteamContainer.vue';

type PageSlickteamContainerArgs = ComponentProps<typeof SlickteamContainer> & { selectedModel?: string };

const meta: Meta<PageSlickteamContainerArgs> = {
  title: 'Organisms/layout/SlickteamContainer',
  component: SlickteamContainer,
  tags: ['docsPage'],
  args: {
    'onUpdate:selected': fn(),
  },
  argTypes: {
    hideSidebarLeft: {
      control: 'boolean',
    },
    hideToolbar: {
      control: 'boolean',
    },
    hideSidebarRight: {
      control: 'boolean',
    },
    sidebarLeftElevation: {
      control: 'text',
    },
    sidebarLeftShowHeaderBottomBorder: {
      control: 'boolean',
    },
    sidebarLeftBackgroundColor: {
      control: 'color',
    },
    sidebarLeftShowBorderRight: {
      control: 'boolean',
    },
    sidebarLeftBorderColor: {
      control: 'color',
    },
    sidebarLeftWidth: {
      control: 'text',
    },
    sidebarLeftHeightHeader: {
      control: 'text',
    },
    toolbarShowBottomBorder: {
      control: 'boolean',
    },
    toolbarColor: {
      control: 'color',
    },
    toolbarBottomBorderColor: {
      control: 'color',
    },
    toolbarElevation: {
      control: 'text',
    },
    toolbarHeight: {
      control: 'number',
    },
    sidebarRightItems: {
      control: false,
    },
    sidebarRightWidth: {
      control: 'number',
    },
    sidebarRightHeight: {
      control: 'number',
    },
    sidebarRightBackground: {
      control: 'color',
    },
    sidebarRightRounded: {
      control: 'text',
    },
    sidebarRightElevation: {
      control: 'text',
    },
    sidebarRightShowBorder: {
      control: 'boolean',
    },
    sidebarRightBorderColor: {
      control: 'color',
    },
    sidebarRightDefaultActiveColor: {
      control: 'color',
    },
    sidebarRightMarginYCloseButton: {
      control: 'text',
    },
    menuRightBorder: {
      control: 'color',
    },
    menuRightColor: {
      control: 'color',
    },
    paddingX: {
      control: 'text',
    },
    paddingY: {
      control: 'text',
    },
  },
  render: (args, { updateArgs }) => ({
    components: { SlickteamContainer },
    setup() {
      const selectedModel = shallowRef(args.selectedModel);
      // Optional: Keeps v-model in sync with storybook args
      watch(
        () => args.selectedModel,
        (val) => {
          selectedModel.value = val;
        },
      );
      function onUpdateModelSelected(value: string) {
        updateArgs({ selectedModel: value });
      }
      function selectMenu01() {
        updateArgs({ selectedModel: 'menu01' });
      }
      function unselectMenu() {
        updateArgs({ selectedModel: undefined });
      }

      return { args, selectedModel, onUpdateModelSelected, selectMenu01, unselectMenu };
    },
    /* html */
    template: `<SlickteamContainer
      v-bind="args"
      v-model:selected="selectedModel"
      @update:selected="onUpdateModelSelected">
        <template #sidebar-left-header>Header</template>
        <template #sidebar-left>Content </template>
        <template #sidebar-left-footer>Footer </template>
        <template #toolbar-left>left</template>
        <template #toolbar-right>right</template>
        <template #sidebar-right-menu-header>Title</template>
        <template #sidebar-right-menu={selected}>
          {{ selected }}
        </template>
        <template #sidebar-right-menu-actions>Actions</template>
        <div style="border: 2px dashed #BBBBBB; height: 1000px">
          <p>Content</p>
          <button style="background-color: #008CBA;color: white;padding: 15px 32px;border: none;text-align: center;margin: 4px 2px;cursor: pointer;" @click="selectMenu01">Select menu 01</button>
          <button style="background-color: #e7e7e7;color: black;padding: 15px 32px;border: none;text-align: center;margin: 4px 2px;cursor: pointer;" @click="unselectMenu">Unselect menu</button>
        </div>
    </SlickteamContainer>`,
  }),
};
export default meta;

type Story = StoryObj;

export const Default = {
  args: {
    selectedModel: 'menu01',
    hideSidebarLeft: false,
    hideToolbar: false,
    hideSidebarRight: false,
    sidebarLeftElevation: '2',
    sidebarLeftShowHeaderBottomBorder: true,
    sidebarLeftBackgroundColor: '#ffffff',
    sidebarLeftShowBorderRight: true,
    sidebarLeftBorderColor: '#aaa',
    sidebarLeftWidth: '256',
    sidebarLeftHeightHeader: '64',
    toolbarShowBottomBorder: true,
    toolbarColor: 'background',
    toolbarBottomBorderColor: '#aaa',
    toolbarElevation: '0',
    toolbarHeight: 64,
    sidebarRightItems: [
      { icon: 'mdi-home', text: 'Menu 01', color: undefined, value: 'menu01', count: 4 },
      { icon: 'mdi-home', text: 'Menu 02', color: undefined, value: 'menu02', count: undefined },
      { icon: 'mdi-home', text: 'Menu 03', color: undefined, value: 'menu03', count: 19 },
      { icon: 'mdi-home', text: 'Menu 04', color: undefined, value: 'menu04', count: 5 },
      { icon: 'mdi-home', text: 'Menu 05', color: undefined, value: 'menu05', count: 4 },
      { icon: 'mdi-home', text: 'Menu 06', color: undefined, value: 'menu06', count: 6 },
      { icon: 'mdi-home', text: 'Menu 07', color: undefined, value: 'menu07', count: undefined },
      { icon: 'mdi-home', text: 'Menu 08', color: undefined, value: 'menu08', count: 7 },
      { icon: 'mdi-home', text: 'Menu 09', color: undefined, value: 'menu09', count: undefined },
      { icon: 'mdi-home', text: 'Menu 10', color: undefined, value: 'menu10', count: 10 },
      { icon: 'mdi-home', text: 'Menu 11', color: undefined, value: 'menu11', count: undefined },
      { icon: 'mdi-home', text: 'Menu 12', color: undefined, value: 'menu12', count: undefined },
      { icon: 'mdi-home', text: 'Menu 13', color: undefined, value: 'menu13', count: 1 },
      { icon: 'mdi-home', text: 'Menu 14', color: undefined, value: 'menu14', count: undefined },
      { icon: 'mdi-home', text: 'Menu 15', color: undefined, value: 'menu15', count: undefined },
      { icon: 'mdi-home', text: 'Menu 16', color: undefined, value: 'menu16', count: 6 },
      { icon: 'mdi-home', text: 'Menu 17', color: undefined, value: 'menu17', count: undefined },
      { icon: 'mdi-home', text: 'Menu 18', color: undefined, value: 'menu18', count: undefined },
      { icon: 'mdi-home', text: 'Menu 19', color: undefined, value: 'menu19', count: undefined },
      { icon: 'mdi-home', text: 'Menu 20', color: undefined, value: 'menu20', count: undefined },
    ],
    sidebarRightWidth: 65,
    sidebarRightRounded: 'sm',
    sidebarRightElevation: '2',
    sidebarRightShowBorder: true,
    sidebarRightBorderColor: '#aaa',
    sidebarRightDefaultActiveColor: '#ff0000',
    sidebarRightMarginYCloseButton: '10',
    menuRightRounded: 'lg',
    paddingX: '24px',
    paddingY: '12px',
  },
} satisfies Story;

export const NotDefaultSelected = {
  args: {
    selectedModel: undefined,
    hideSidebarLeft: false,
    hideToolbar: false,
    hideSidebarRight: false,
    sidebarLeftElevation: '2',
    sidebarLeftShowHeaderBottomBorder: true,
    sidebarLeftBackgroundColor: '#ffffff',
    sidebarLeftWidth: '256',
    sidebarLeftShowBorderRight: true,
    sidebarLeftBorderColor: '#aaa',
    sidebarLeftHeightHeader: '56',
    toolbarShowBottomBorder: true,
    toolbarColor: 'background',
    toolbarBottomBorderColor: '#aaa',
    toolbarElevation: '0',
    toolbarHeight: 64,
    sidebarRightItems: [
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
    sidebarRightWidth: 65,
    sidebarRightRounded: 'sm',
    sidebarRightElevation: '2',
    sidebarRightShowBorder: true,
    sidebarRightBorderColor: '#aaa',
    sidebarRightDefaultActiveColor: '#ff0000',
    sidebarRightMarginYCloseButton: '10',
    menuRightElevation: '4',
    menuRightRounded: 'lg',
    menuRightColor: '#ffffff',
    paddingX: '24px',
    paddingY: '12px',
  },
} satisfies Story;
