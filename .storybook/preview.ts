// .storybook/preview.js
import '@mdi/font/css/materialdesignicons.css';
import { useArgs } from 'storybook/preview-api';
import { setup } from '@storybook/vue3-vite';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

import { DEFAULT_THEME, withVuetifyTheme } from './withVuetifyTheme.decorator';

async function loadFonts() {
  const webFontLoader = await import(/* webpackChunkName: "webfontloader" */ 'webfontloader');

  webFontLoader.load({
    google: {
      families: ['Roboto:100,300,400,500,700,900&display=swap'],
    },
  });
}

setup((app) => {
  loadFonts();
  const vuetify = createVuetify({
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            background: '#f5f5f9',
            surface: '#fff',
            primary: '#f18900',
            secondary: '#0068f1',
            success: '#00c853',
            warning: '#ffc107',
            error: '#f44336',
            info: '#03c9d7',
          },
        },
      },
    },
  });
  app.use(vuetify);
});

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: DEFAULT_THEME,
    toolbar: {
      icon: 'paintbrush',
      // Array of plain string values or MenuItem shape (see below)
      items: [{ value: 'light', title: 'Light', left: '🌞' }],
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
};

export const decorators = [
  withVuetifyTheme,
  (story, context) => {
    const [_, updateArgs] = useArgs();
    return story({ ...context, updateArgs });
  },
];
