import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";

import { VBtn, VIcon } from "vuetify/components";

createVuetify({
  components: {
    VBtn,
    VIcon,
  },
});

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

export { SlickComponentLibrary, MoleculeIconButton, MoleculeTextIconButton };
