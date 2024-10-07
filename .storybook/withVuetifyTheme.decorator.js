export const DEFAULT_THEME = "light";

import { VApp, VContainer } from "vuetify/components";

export const withVuetifyTheme = (story, context) => {
  const globalTheme = context.globals.theme || DEFAULT_THEME;
  return {
    components: { story, VApp, VContainer },
    template: `
      <v-app theme="${globalTheme}">
        <v-container>
          <story/>
        </v-container>
      </v-app>
    `,
  };
};