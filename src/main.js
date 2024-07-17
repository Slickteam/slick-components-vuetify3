import { createApp } from "vue";
import vuetify from "./utils/vuetify";
import {
  MoleculeIconButton,
  MoleculeTextIconButton,
} from "@/components/molecule";
import App from "./App.vue";

createApp(App).use(vuetify);

const SlickComponentLibrary = {
  install: (app) => {
    app.component("MoleculeIconButton", MoleculeIconButton);
    app.component("MoleculeTextIconButton", MoleculeTextIconButton);
  },
};

export {
  vuetify,
  SlickComponentLibrary,
  MoleculeIconButton,
  MoleculeTextIconButton,
};
