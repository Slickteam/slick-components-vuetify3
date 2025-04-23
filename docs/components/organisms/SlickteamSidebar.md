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

| Name                        | Description                 | Type                 | Default     |
| --------------------------- | --------------------------- | -------------------- | ----------- |
| `elevation`                 | elevation of sidebar        | `string` \| `number` | `2`         |
| `show-header-bottom-border` | show header bottom border   | `boolean`            | `true`      |
| `background-color`          | color of sidebar            | `string`             | `#ffffff`   |
| `show-border-right`         | show border right           | `boolean`            | `true`      |
| `border-color`              | border color                | `string`             | `#aaa`      |
| `model-value`               | show or non sidebar         | `boolean`            | `true`      |
| `width`                     | width of sidebar            | `string` \| `number` | `undefined` |
| `height-header`             | height of header of sidebar | `string` \| `number` | `64`        |

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
