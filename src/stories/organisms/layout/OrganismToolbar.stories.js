import { OrganismToolbar } from '../../../components/organisms';

export default {
  title: 'Organisms/layout/OrganismToolbar',
  component: OrganismToolbar,
  tags: ['docsPage'],
  args: {},
  argTypes: {},
};

const Template = () => ({
  components: { OrganismToolbar },
  /* html */
  template: `<OrganismToolbar>
    Topbar
  </OrganismToolbar>`,
});

export const Default = Template.bind({});
Default.args = {};
