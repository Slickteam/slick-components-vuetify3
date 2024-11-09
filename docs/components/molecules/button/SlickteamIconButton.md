# slickteam-icon-button

Component use to make an button with only an icon

## Example

```vue
<template>
  <slickteam-icon-button icon="mdi-home" @click="handleClick" />
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
import { SlickteamIconButton } from '@slickteam/components-vuetify3';
```

## API

### Props

| Name           | Description                                 | Type               | Default       |
| -------------- | ------------------------------------------- | ------------------ | ------------- |
| `color`        | Color of button                             | `string`           | `'secondary'` |
| `content-chip` | Content of chip in button                   | `string`           | `undefined`   |
| `icon`         | Icon to pass in button                      | `string`           | `'mdi-eye'`   |
| `href`         | Navigate to an other page                   | `string`           | `undefined`   |
| `show-chip`    | Show a chip in button                       | `boolean`          | `undefined`   |
| `size`         | Size of button                              | `string \| number` | `undefined`   |
| `target`       | Option target of component like native html | `string`           | `undefined`   |
| `title`        | Title of button                             | `string`           | `undefined`   |
| `to`           | Activate router-link et pass an path url    | `string`           | `undefined`   |
| `variant`      | Variant of button                           | `string`           | `'text'`      |

### Events

| Name    | Description                            | Type    |
| ------- | -------------------------------------- | ------- |
| `click` | Trigger an emit when button is clicked | `never` |

### Slots

> None
