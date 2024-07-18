import "@mdi/font/css/materialdesignicons.min.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { VNumberInput } from "vuetify/labs/VNumberInput";

import {
  MoleculeIconButton,
  MoleculeTextIconButton,
} from "@/components/molecule";

const SlickComponentLibrary = {
  install: (app) => {
    app.component("MoleculeIconButton", MoleculeIconButton);
    app.component("MoleculeTextIconButton", MoleculeTextIconButton);
  },
};

const VuetifyLibrary = {
  install(app, options) {
    const chooseTheme = options?.theme ?? {
      themes: {
        light: {
          dark: false,
          colors: {
            background: "#f5f5f9",
            surface: "#fff",
            primary: "#f18900",
            secondary: "#0068f1",
            success: "#00c853",
            warning: "#ffc107",
            error: "#f44336",
            info: "#03c9d7",
          },
        },
      },
    };

    const vuetify = createVuetify({
      components: {
        VNumberInput,
      },
      theme: chooseTheme,
    });
    app.use(vuetify);
  },
};

export {
  VuetifyLibrary,
  SlickComponentLibrary,
  MoleculeIconButton,
  MoleculeTextIconButton,
};
