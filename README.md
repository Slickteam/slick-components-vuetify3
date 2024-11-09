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
import { SlickteamIconButton } from '@slickteam/components-vuetify3';
```

## Molecules

### Button components

- [slickteam-clipboard-button](./docs/molecules/button/SlickteamClipboardButton.md)
- [slickteam-icon-button](./docs/molecules/button/SlickteamIconButton.md)
- [slickteam-text-icon-button](./docs/molecules/button/SlickteamTextIconButton.md)

### Picker components

- [slickteam-color-picker](./docs/molecules/picker/SlickteamColorPicker.md)
- [slickteam-icon-picker](./docs/molecules/picker/SlickteamIconPicker.md)

## Organisms

- [slickteam-container](./docs/molecules/picker/SlickteamContainer.md)
- [slickteam-toolbar](./docs/molecules/picker/SlickteamToolbar.md)
- [slickteam-sidebar-icon](./docs/molecules/picker/SlickteamSidebarIcon.md)
- [slickteam-sidebar](./docs/molecules/picker/SlickteamSidebar.md)
- [slickteam-data-table](./docs/molecules/picker/SlickteamDataTable.md)
