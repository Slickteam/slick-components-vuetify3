import type { Meta, StoryObj } from '@storybook/vue3';
import SlickteamDataTable from '../../../components/organisms/SlickteamDataTable.vue';

const meta: Meta<typeof SlickteamDataTable> = {
  title: 'Organisms/widget/SlickteamDataTable',
  component: SlickteamDataTable,
  tags: ['docsPage'],
  args: {
    data: [
      { id: '12345', text: 'Menu 01', color: '#3729DD', createdAt: new Date() },
      { id: '12345', text: 'Menu 02', color: '#4EBC1A', createdAt: new Date() },
      { id: '12345', text: 'Menu 03', color: '#40fC1A', createdAt: new Date() },
      { id: '12345', text: 'Menu 04', color: '#3EBC1A', createdAt: new Date() },
      { id: '12345', text: 'Menu 05', color: '#4EBC10', createdAt: new Date() },
      { id: '12345', text: 'Menu 06', color: '#4EBCaA', createdAt: new Date() },
      { id: '12345', text: 'Menu 07', color: '#99BC1A', createdAt: new Date() },
      { id: '12345', text: 'Menu 08', color: '#00BC1A', createdAt: new Date() },
      { id: '12345', text: 'Menu 09', color: '#9EBC1A', createdAt: new Date() },
      { id: '12345', text: 'Menu 10', color: '#55661A', createdAt: new Date() },
      { id: '12345', text: 'Menu 11', color: '#40BC1A', createdAt: new Date() },
      { id: '12345', text: 'Menu 12', color: '#4E1C1A', createdAt: new Date() },
      { id: '12345', text: 'Menu 13', color: '#4E661A', createdAt: new Date() },
      { id: '12345', text: 'Menu 14', color: '#4EBa1A', createdAt: new Date() },
      { id: '12345', text: 'Menu 15', color: '#4E001B', createdAt: new Date() },
      { id: '12345', text: 'Menu 16', color: '#0EBC1A', createdAt: new Date() },
      { id: '12345', text: 'Menu 17', color: '#400C1F', createdAt: new Date() },
      { id: '12345', text: 'Menu 18', color: '#40BC10', createdAt: new Date() },
      { id: '12345', text: 'Menu 19', color: '#4E9C15', createdAt: new Date() },
      { id: '12345', text: 'Menu 20', color: '#aEB01A', createdAt: new Date() },
    ],
    headers: [
      { title: 'Id', key: 'id' },
      { title: 'Text', key: 'text' },
      { title: 'Couleur', key: 'color', rDisplay: 'sm' },
      { title: 'Crée le', key: 'createdAt', rDisplay: 'md' },
    ],
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof SlickteamDataTable>;

export const Primary = {
  args: {},
} satisfies Story;
