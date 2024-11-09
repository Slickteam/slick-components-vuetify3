import SlickteamSidebar from '../../../components/organisms/SlickteamSidebar.vue';

export default {
  title: 'Organisms/layout/SlickteamSidebar',
  component: SlickteamSidebar,
  tags: ['docsPage'],
  args: {},
  argTypes: {},
};

const Template = () => ({
  components: { SlickteamSidebar },
  /* html */
  template: `<SlickteamSidebar>
    <template #header="{ rail }">sidebar {{rail}} </template>
  </SlickteamSidebar>`,
});

export const Default = Template.bind({});
Default.args = {};
