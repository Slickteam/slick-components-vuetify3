# slickteam-toolbar

Component use to have a toolbar

## Example

```vue
<template>
  <slickteam-toolbar>
    <template #default> Content left </template>
    <template #toolbar-right> Content right </template>
  </slickteam-toolbar>
</template>

<script setup></script>
```

## Import

- If is not import globally, you need to import this component

```js
import { SlickteamToolbar } from '@slickteam/components-vuetify3';
```

## API

### Props

| Name                 | Description                 | Type                 | Default      |
| -------------------- | --------------------------- | -------------------- | ------------ |
| `color`              | color of toolbar            | `string`             | `background` |
| `elevation`          | elevation of toolbar        | `string` \| `number` | `0`          |
| `height`             | height of toolbar           | `number`             | `56`         |
| `show-bottom-border` | show bottom border          | `boolean`            | `true`       |
| `sidebar-right-icon` | show the sidebar right icon | `boolean`            | `false`      |

### Events

| Name                | Description                                  | Type    |
| ------------------- | -------------------------------------------- | ------- |
| `toggle:menu`       | Trigger an emit when menu button is clicked  | `never` |
| `toggle:right-menu` | Trigger an emit when right button is clicked | `never` |

### Slots

| Name            | Description            | Value   |
| --------------- | ---------------------- | ------- |
| `default`       | Slot for left content  | `never` |
| `toolbar-right` | Slot for right content | `never` |
