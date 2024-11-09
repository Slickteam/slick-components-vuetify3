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

## Button components

- `SlickteamClipboardButton`
- `SlickteamIconButton`
- `SlickteamTextIconButton`

## Form components

- `SlickteamColorPicker`
- `SlickteamIconPicker`

## Layout components

- `SlickteamSidebarIcon`
- `SlickteamContainer`
- `SlickteamSidebar`
- `SlickteamToolbar`

## Widget components

- `SlickteamDataTable`
