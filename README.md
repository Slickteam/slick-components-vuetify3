# Slick Components for Vuetify 3 / Vue 3

## How to install

```bash
npm i -S @slickteam/components-vuetify3
```

- In `main.js`, add this line for style

```js
//...
import '@slickteam/components-vuetify3/style.css';
import { VuetifyLibrary } from '@slickteam/components-vuetify3';
// options are optional
const options = {
  theme: {
    // theme are same option of library vuetify, see https://vuetifyjs.com/en/features/theme/#javascript for more informations
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#RRGGBB',
          surface: '#RRGGBB',
          primary: '#RRGGBB',
          secondary: '#RRGGBB',
          success: '#RRGGBB',
          warning: '#RRGGBB',
          error: '#RRGGBB',
          info: '#RRGGBB',
        },
      },
    },
  },
};

createApp(app).use(VuetifyLibrary, options);
//...
```

- In your file where you want use a component, add this line for style

```js
import { MoleculeIconButton } from '@slickteam/components-vuetify3';
```

## Button components

- `MoleculeClipboardButton`
- `MoleculeIconButton`
- `MoleculeTextIconButton`

## Form components

- `MoleculeColorPickerForm`
- `MoleculeIconPickerForm`

## Layout components

- `OrganismSidebarIcon`
- `OrganismContainerPage`
- `OrganismSidebar`
- `OrganismToolbar`

## Widget components

- `OrganismSystemDataTable`
