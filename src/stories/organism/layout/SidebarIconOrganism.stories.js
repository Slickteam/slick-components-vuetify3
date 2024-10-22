import { shallowRef, watch } from 'vue';
import { action } from '@storybook/addon-actions';
import { SidebarIconOrganism } from '../../../components/organism';

export default {
  title: 'Organism/layout/SidebarIconOrganism',
  component: SidebarIconOrganism,
  tags: ['docsPage'],
  args: {
    width: 64,
    elevation: 0,
    items: [
      { icon: 'mdi-home', text: 'Menu 01', color: '#3729DD', value: 'menu01' },
      { icon: 'mdi-home', text: 'Menu 02', color: '#4EBC1A', value: 'menu02' },
      { icon: 'mdi-home', text: 'Menu 03', color: '#40fC1A', value: 'menu03' },
      { icon: 'mdi-home', text: 'Menu 04', color: '#3EBC1A', value: 'menu04' },
      { icon: 'mdi-home', text: 'Menu 05', color: '#4EBC10', value: 'menu05' },
      { icon: 'mdi-home', text: 'Menu 06', color: '#4EBCaA', value: 'menu06' },
      { icon: 'mdi-home', text: 'Menu 07', color: '#99BC1A', value: 'menu07' },
      { icon: 'mdi-home', text: 'Menu 08', color: '#00BC1A', value: 'menu08' },
      { icon: 'mdi-home', text: 'Menu 09', color: '#9EBC1A', value: 'menu09' },
      { icon: 'mdi-home', text: 'Menu 10', color: '#55661A', value: 'menu10' },
      { icon: 'mdi-home', text: 'Menu 11', color: '#40BC1A', value: 'menu11' },
      { icon: 'mdi-home', text: 'Menu 12', color: '#4E1C1A', value: 'menu12' },
      { icon: 'mdi-home', text: 'Menu 13', color: '#4E661A', value: 'menu13' },
      { icon: 'mdi-home', text: 'Menu 14', color: '#4EBa1A', value: 'menu14' },
      { icon: 'mdi-home', text: 'Menu 15', color: '#4E001B', value: 'menu15' },
      { icon: 'mdi-home', text: 'Menu 16', color: '#0EBC1A', value: 'menu16' },
      { icon: 'mdi-home', text: 'Menu 17', color: '#400C1F', value: 'menu17' },
      { icon: 'mdi-home', text: 'Menu 18', color: '#40BC10', value: 'menu18' },
      { icon: 'mdi-home', text: 'Menu 19', color: '#4E9C15', value: 'menu19' },
      { icon: 'mdi-home', text: 'Menu 20', color: '#aEB01A', value: 'menu20' },
    ],
    rounded: '0',
    height: '800px',
    background: '',
  },
  argTypes: {
    rounded: {
      control: {
        type: 'select',
      },
      options: ['0', 'xs', 'sm', 'lg', 'md', 'xl', 'pill', 'circle', 'shaped'],
    },
  },
};

const Template = (args) => ({
  components: { SidebarIconOrganism },
  setup() {
    const model = shallowRef(args.modelValue);
    // Optional: Keeps v-model in sync with storybook args
    watch(
      () => args.modelValue,
      (val) => {
        model.value = val;
      },
    );

    const updateSelected = (value) => {
      model.value = value;
      action('update:selected');
    };

    return { args, model, updateSelected };
  },
  /* html */
  template: `<SidebarIconOrganism v-bind="args" v-model="model" @update:selected="updateSelected" />`,
});

export const Default = Template.bind({});
Default.args = {
  modelValue: 'menu01',
};
