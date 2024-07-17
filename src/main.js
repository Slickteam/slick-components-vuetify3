import { createApp } from "vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import App from "./App.vue";

const vuetify = createVuetify();

createApp(App).use(vuetify).mount("#app");

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
