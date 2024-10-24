import '@mdi/font/css/materialdesignicons.min.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

import {
  // Buttons
  MoleculeIconButton,
  MoleculeTextIconButton,
  MoleculeClipboardButton,
  // Form
  MoleculeColorPickerForm,
  MoleculeIconPickerForm,
} from '@/components/molecules';

import {
  // Layout
  OrganismSidebarIcon,
  OrganismContainerPage,
  OrganismSidebar,
  OrganismToolbar,
  // Widget
  OrganismSystemDataTable,
} from '@/components/organisms';

const SlickComponentLibrary = {
  install: (app) => {
    app.component('MoleculeIconButton', MoleculeIconButton);
    app.component('MoleculeTextIconButton', MoleculeTextIconButton);
    app.component('MoleculeClipboardButton', MoleculeClipboardButton);
    app.component('MoleculeColorPickerForm', MoleculeColorPickerForm);
    app.component('MoleculeIconPickerForm', MoleculeIconPickerForm);
    app.component('OrganismSidebarIcon', OrganismSidebarIcon);
    app.component('OrganismSystemDataTable', OrganismSystemDataTable);
    app.component('OrganismContainerPage', OrganismContainerPage);
    app.component('OrganismSidebar', OrganismSidebar);
    app.component('OrganismToolbar', OrganismToolbar);
  },
};

const VuetifyLibrary = {
  install(app, options) {
    const defaultOptions = options ?? {
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
    };

    const vuetify = createVuetify(defaultOptions);
    app.use(vuetify);
  },
};

export {
  VuetifyLibrary,
  SlickComponentLibrary,
  // Molecule
  MoleculeIconButton,
  MoleculeTextIconButton,
  MoleculeClipboardButton,
  MoleculeColorPickerForm,
  MoleculeIconPickerForm,
  // Organism
  OrganismSidebarIcon,
  OrganismSystemDataTable,
  OrganismContainerPage,
  OrganismSidebar,
  OrganismToolbar,
};
