# slickteam-text-icon-button

Component use to make an button with an icon and text

## Example

```vue
<template>
  <slickteam-text-icon-button text="Button" icon="mdi-home" @click="handleClick" />
</template>

<script setup>
function handleClick() {
  // normally, its print "handleClick"
  console.debug(`handleClick`);
}
</script>
```

## Import

- If is not import globally, you need to import this component

```js
import { SlickteamTextIconButton } from '@slickteam/components-vuetify3';
```

## API

### Props

| Name      | Description                                 | Type                                                               | Default       |
| --------- | ------------------------------------------- | ------------------------------------------------------------------ | ------------- |
| `color`   | Color of button                             | `string`                                                           | `'secondary'` |
| `href`    | Navigate to an other page                   | `string`                                                           | `undefined`   |
| `icon`    | Icon to pass in button                      | `string`                                                           | `'mdi-eye'`   |
| `size`    | Size of button                              | `string` \| `number`                                               | `undefined`   |
| `target`  | Option target of component like native html | `string`                                                           | `undefined`   |
| `text`    | Text of button                              | `string`                                                           | `undefined`   |
| `title`   | Title of button                             | `string`                                                           | `undefined`   |
| `to`      | Activate router-link et pass an path url    | `string`                                                           | `undefined`   |
| `variant` | Variant of button                           | `flat` \| `text` \| `elevated` \| `tonal` \| `outlined` \| `plain` | `'text'`      |

### Events

| Name    | Description                            | Type    |
| ------- | -------------------------------------- | ------- |
| `click` | Trigger an emit when button is clicked | `never` |

### Slots

> None
