# slickteam-sidebar

Component use to have a sidebar (left)

## Example

```vue
<template>
  <slickteam-sidebar>
    <template #header> Header </template>
    <template #default> Content Sidebar </template>
    <template #footer> Footer </template>
  </slickteam-sidebar>
</template>

<script setup></script>
```

## Import

- If is not import globally, you need to import this component

```js
import { SlickteamSidebar } from '@slickteam/components-vuetify3';
```

## API

### Props

| Name                        | Description               | Type                 | Default     |
| --------------------------- | ------------------------- | -------------------- | ----------- |
| `background-color`          | color of sidebar          | `string`             | `#ffffff`   |
| `elevation`                 | elevation of sidebar      | `string` \| `number` | `2`         |
| `model-value`               | show or non sidebar       | `boolean`            | `true`      |
| `show-border`               | show border               | `boolean`            | `true`      |
| `show-header-bottom-border` | show header bottom border | `boolean`            | `true`      |
| `width`                     | width of sidebar          | `string` \| `number` | `undefined` |

### Events

| Name                 | Description                              | Type      |
| -------------------- | ---------------------------------------- | --------- |
| `update:model-value` | Trigger an emit when model value changed | `boolean` |

### Slots

| Name      | Description              | Value   |
| --------- | ------------------------ | ------- |
| `default` | Slot for default content | `never` |
| `header`  | Slot for header content  | `never` |
| `footer`  | Slot for footer content  | `never` |
