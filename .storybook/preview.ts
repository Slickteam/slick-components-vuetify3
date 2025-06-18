import '@mdi/font/css/materialdesignicons.css';
import { type Preview, setup } from '@storybook/vue3-vite';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

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

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    globalTypes: {
      theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'light',
        toolbar: {
          icon: 'paintbrush',
          // Array of plain string values or MenuItem shape (see below)
          items: [{ value: 'light', title: 'Light', left: '🌞' }],
        },
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
