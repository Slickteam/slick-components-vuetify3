import { OrganismContainerPage } from '../../../components/organisms';

export default {
  title: 'Organisms/layout/OrganismContainerPage',
  component: OrganismContainerPage,
  tags: ['docsPage'],
  args: {
    hideSidebarLeft: false,
    hideToolbar: false,
  },
  argTypes: {
    hideSidebarLeft: {
      control: 'boolean',
    },
    hideToolbar: {
      control: 'boolean',
    },
  },
};

const Template = (args) => ({
  components: { OrganismContainerPage },
  setup() {
    return { args };
  },
  /* html */
  template: `<OrganismContainerPage v-bind="args">
    <template #sidebar-left-header="{ rail }">Header {{ rail}}</template>
    <template #sidebar-left="{ rail }">Content </template>
    <template #sidebar-left-footer="{ rail }">Footer </template>
    <template #toolbar>toolbar</template>
  </OrganismContainerPage>`,
});

export const Default = Template.bind({});
Default.args = {};
