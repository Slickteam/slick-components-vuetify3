import { SidebarIconOrganism } from '../../../components/organism';

export default {
  title: 'Organism/layout/SidebarIconOrganism',
  component: SidebarIconOrganism,
  tags: ['docsPage'],
  args: {
    width: 80,
    selectedItem: 'menu01',
    items: [
      { icon: 'mdi-home', text: 'Menu', color: '#3729DD', value: 'menu01' },
      { icon: 'mdi-delete', text: 'Delete', color: '#4EBC1A', value: 'menu02' },
    ],
  },
  argTypes: {
    // onClick: {},
  },
};

export const Default = {
  args: {
    location: 'left',
  },
};

export const Right = {
  args: {
    location: 'right',
  },
};
