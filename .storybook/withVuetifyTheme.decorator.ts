export const DEFAULT_THEME = 'light';

import { VApp, VMain } from 'vuetify/components';

export const withVuetifyTheme = (story, context) => {
  const globalTheme = context.globals.theme || DEFAULT_THEME;
  return {
    components: { story, VApp, VMain },
    /* html */
    template: `
      <v-app theme="${globalTheme}" class="h-min-100">
        <v-main class="h-min-100 d-flex flex-column">
          <story/>
        </v-main>
      </v-app>
    `,
  };
};
