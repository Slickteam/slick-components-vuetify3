# slickteam-sidebar-icon

Component use to have a sidebar (right) with icon items

## Example

```vue
<template>
  <slickteam-sidebar-icon v-model:selected="selected" v-model:drawer="drawer" :items="items" />
</template>

<script setup>
import { shallowRef } from 'vue';

const selected = shallowRef(undefined);
const drawer = shallowRef(true);

const items = [
  { icon: 'mdi-home', text: 'Menu 01', color: '#3729DD', value: 'menu01', count: 1 },
  { icon: 'mdi-home', text: 'Menu 02', color: '#4EBC1A', value: 'menu02', count: undefined },
  { icon: 'mdi-home', text: 'Menu 03', color: '#40fC1A', value: 'menu03', count: undefined },
  { icon: 'mdi-home', text: 'Menu 04', color: '#3EBC1A', value: 'menu04', count: 19 },
];
</script>
```

## Import

- If is not import globally, you need to import this component

```js
import { SlickteamSidebarIcon } from '@slickteam/components-vuetify3';
```

## API

### Props

| Name                   | Description           | Type                                                             | Default     |
| ---------------------- | --------------------- | ---------------------------------------------------------------- | ----------- |
| `background`           | background of sidebar | `string`                                                         | `undefined` |
| `elevation`            | elevation of sidebar  | `string \| number`                                               | `'2'`       |
| `height`               | height of sidebar     | `string`                                                         | `undefined` |
| `items`                | selected item value   | `[{ icon: string, text: string, color: string, value: string }]` | `[]`        |
| `model-value:selected` | selected item value   | `string`                                                         | `undefined` |
| `model-value:drawer`   | show or non sidebar   | `boolean`                                                        | `undefined` |
| `rounded`              | rounded sidebar       | `string`                                                         | `'sm'`      |
| `width`                | width of sidebar      | `number`                                                         | `65`        |

### Events

| Name                          | Description                                       | Type      |
| ----------------------------- | ------------------------------------------------- | --------- |
| `update:model-value:selected` | Trigger an emit when selected model value changed | `string`  |
| `update:model-value:drawer`   | Trigger an emit when drawer model value changed   | `boolean` |

### Slots

| Name      | Description              | Value   |
| --------- | ------------------------ | ------- |
| `default` | Slot for default content | `never` |
