import { shallowRef, watch } from 'vue';
import SlickteamContainer from '../../../components/organisms/SlickteamContainer.vue';

export default {
  title: 'Organisms/layout/SlickteamContainer',
  component: SlickteamContainer,
  tags: ['docsPage'],
  args: {
    hideSidebarLeft: false,
    hideToolbar: false,
    hideSidebarRight: false,
    itemsSidebarRight: [
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
  },
};

const Template = (args) => ({
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
    return { args, selectedModel };
  },
  /* html */
  template: `<SlickteamContainer v-bind="args" v-model:selected="selectedModel">
    <template #sidebar-left-header="{ rail }">Header {{ rail}}</template>
    <template #sidebar-left="{ rail }">Content </template>
    <template #sidebar-left-footer="{ rail }">Footer </template>
    <template #toolbar-left>left</template>
    <template #toolbar-right>right</template>
    <template #sidebar-right-menu-header>Title</template>
    <template #sidebar-right-menu={selected}>
      {{ selected }}
    </template>
    <template #sidebar-right-menu-actions>Actions</template>

    <div style="border: 2px dashed #BBBBBB; height: 1000px">
      Content
    </div>
  </SlickteamContainer>`,
});

export const Default = Template.bind({});
Default.args = {
  selectedModel: 'menu01',
};
