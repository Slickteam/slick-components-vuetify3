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

| Name          | Description         | Type      | Default |
| ------------- | ------------------- | --------- | ------- |
| `rail`        | mode rail activate  | `boolean` | `false` |
| `model-value` | show or non sidebar | `boolean` | `true`  |

### Events

| Name                 | Description                                 | Type      |
| -------------------- | ------------------------------------------- | --------- |
| `update:model-value` | Trigger an emit when model value changed    | `boolean` |
| `update:rail`        | Trigger an emit when button rail is changed | `boolean` |

### Slots

| Name      | Description              | Value             |
| --------- | ------------------------ | ----------------- |
| `default` | Slot for default content | `{rail: boolean}` |
| `header`  | Slot for header content  | `{rail: boolean}` |
| `footer`  | Slot for footer content  | `{rail: boolean}` |
