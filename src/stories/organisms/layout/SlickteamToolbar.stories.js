import SlickteamToolbar from '../../../components/organisms/SlickteamToolbar.vue';

export default {
  title: 'Organisms/layout/SlickteamToolbar',
  component: SlickteamToolbar,
  tags: ['docsPage'],
  args: {},
  argTypes: {},
};

const Template = () => ({
  components: { SlickteamToolbar },
  /* html */
  template: `<SlickteamToolbar>
    Topbar
  </SlickteamToolbar>`,
});

export const Default = Template.bind({});
Default.args = {};
