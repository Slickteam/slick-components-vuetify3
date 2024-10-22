import { OrganismContainerPage } from '../../../components/organisms';

export default {
  title: 'Organisms/layout/OrganismContainerPage',
  component: OrganismContainerPage,
  tags: ['docsPage'],
  args: {},
  argTypes: {},
};

const Template = () => ({
  components: { OrganismContainerPage },
  /* html */
  template: `<OrganismContainerPage>
    <template #sidebar="{ rail }">sidebar {{ rail }} </template>
  </OrganismContainerPage>`,
});

export const Default = Template.bind({});
Default.args = {};
