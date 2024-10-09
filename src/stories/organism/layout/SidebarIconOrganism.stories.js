import { SidebarIconOrganism } from '../../../components/organism';

export default {
  title: 'Organism/layout/SidebarIconOrganism',
  component: SidebarIconOrganism,
  tags: ['docsPage'],
  args: {
    width: 80,
    selectedItem: 'menu01',
    elevation: 0,
    items: [
      { icon: 'mdi-home', text: 'Menu', color: '#3729DD', value: 'menu01' },
      { icon: 'mdi-delete', text: 'Delete', color: '#4EBC1A', value: 'menu02' },
      { icon: 'mdi-delete', text: 'Delete', color: '#4EBC1A', value: 'menu03' },
      { icon: 'mdi-delete', text: 'Delete', color: '#4EBC1A', value: 'menu04' },
      { icon: 'mdi-delete', text: 'Delete', color: '#4EBC1A', value: 'menu05' },
      { icon: 'mdi-delete', text: 'Delete', color: '#4EBC1A', value: 'menu06' },
      { icon: 'mdi-delete', text: 'Delete', color: '#4EBC1A', value: 'menu07' },
      { icon: 'mdi-delete', text: 'Delete', color: '#4EBC1A', value: 'menu08' },
      { icon: 'mdi-delete', text: 'Delete', color: '#4EBC1A', value: 'menu09' },
      { icon: 'mdi-delete', text: 'Delete', color: '#4EBC1A', value: 'menu10' },
      { icon: 'mdi-delete', text: 'Delete', color: '#4EBC1A', value: 'menu11' },
      { icon: 'mdi-delete', text: 'Delete', color: '#4EBC1A', value: 'menu11' },
      { icon: 'mdi-delete', text: 'Delete', color: '#4EBC1A', value: 'menu12' },
      { icon: 'mdi-delete', text: 'Delete', color: '#4EBC1A', value: 'menu13' },
      { icon: 'mdi-delete', text: 'Delete', color: '#4EBC1A', value: 'menu14' },
      { icon: 'mdi-delete', text: 'Delete', color: '#4EBC1A', value: 'menu15' },
      { icon: 'mdi-delete', text: 'Delete', color: '#4EBC1A', value: 'menu16' },
      { icon: 'mdi-delete', text: 'Delete', color: '#4EBC1A', value: 'menu17' },
      { icon: 'mdi-delete', text: 'Delete', color: '#4EBC1A', value: 'menu18' },
      { icon: 'mdi-delete', text: 'Delete', color: '#4EBC1A', value: 'menu19' },
    ],
    rounded: undefined,
    height: undefined,
    background: 'transparent',
  },
  argTypes: {
    // onClick: {},
    rounded: {
      control: {
        type: 'select',
      },
      options: ['0', 'xs', 'sm', 'lg', 'md', 'xl', 'pill', 'circle', 'shaped'],
    },
  },
};

export const Default = {
  args: {},
};
