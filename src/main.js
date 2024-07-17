import vuetify from "./utils/vuetify";

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

export {
  vuetify,
  SlickComponentLibrary,
  MoleculeIconButton,
  MoleculeTextIconButton,
};
