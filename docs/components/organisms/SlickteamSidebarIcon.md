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

| Name                    | Description                   | Type                                                                              | Default                 |
| ----------------------- | ----------------------------- | --------------------------------------------------------------------------------- | ----------------------- |
| `background`            | background of sidebar         | `string`                                                                          | `undefined`             |
| `elevation`             | elevation of sidebar          | `string` \| `number`                                                              | `2`                     |
| `height`                | height of sidebar             | `string` \| `number`                                                              | `undefined`             |
| `items`                 | selected item value           | `[{ icon: string, text: string, color?: string, value: string, count?: number }]` | `[]`                    |
| `model-value:drawer`    | show or non sidebar           | `boolean`                                                                         | `undefined`             |
| `model-value:selected`  | selected item value           | `string`                                                                          | `undefined`             |
| `rounded`               | rounded sidebar               | `string`                                                                          | `'sm'`                  |
| `show-left-border`      | show left border of component | `boolean`                                                                         | `true`                  |
| `border-color`          | border color                  | `string`                                                                          | `#aaa`                  |
| `width`                 | width of sidebar              | `string` \| `number`                                                              | `65`                    |
| `default-active-color`  | default color of active item  | `string`                                                                          | `var(--v-primary-base)` |
| `default-item-color`    |                               | `string`                                                                          | `#ccc`                  |
| `margin-y-close-button` | margin close button           | `string` \| `number`                                                              | `10`                    |

### Events

| Name                          | Description                                       | Type      |
| ----------------------------- | ------------------------------------------------- | --------- |
| `update:model-value:drawer`   | Trigger an emit when drawer model value changed   | `boolean` |
| `update:model-value:selected` | Trigger an emit when selected model value changed | `string`  |

### Slots

| Name      | Description              | Value   |
| --------- | ------------------------ | ------- |
| `default` | Slot for default content | `never` |
