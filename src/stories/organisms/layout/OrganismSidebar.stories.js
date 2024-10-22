import { OrganismSidebar } from '../../../components/organisms';

export default {
  title: 'Organisms/layout/OrganismSidebar',
  component: OrganismSidebar,
  tags: ['docsPage'],
  args: {},
  argTypes: {},
};

const Template = () => ({
  components: { OrganismSidebar },
  /* html */
  template: `<OrganismSidebar>
  <template #header="{ rail }">sidebar {{rail}} </template>
  </OrganismSidebar>`,
});

export const Default = Template.bind({});
Default.args = {};
