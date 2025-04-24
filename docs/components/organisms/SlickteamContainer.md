# slickteam-container

Component use to have a full container

## Example

```vue
<template>
  <slickteam-container v-model:selected="selected" :items="items">
    <template #sidebar-left-header>Header</template>
    <template #sidebar-left>Content </template>
    <template #sidebar-left-footer>Footer </template>
    <template #toolbar-left>left</template>
    <template #toolbar-right>right</template>
    <template #sidebar-right-menu-header>Title</template>
    <template #sidebar-right-menu="{ selected }">
      {{ selected }}
    </template>
    <template #sidebar-right-menu-actions>Actions</template>
    <template #default>
      <div style="border: 2px dashed #BBBBBB; height: 1000px">Content</div>
    </template>
  </slickteam-container>
</template>

<script setup>
import { shallowRef } from 'vue';

const selected = shallowRef(undefined);

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
import { SlickteamContainer } from '@slickteam/components-vuetify3';
```

## API

### Props

| Name                                     | Description                                | Type                                                                              | Default      |
| ---------------------------------------- | ------------------------------------------ | --------------------------------------------------------------------------------- | ------------ |
| `model-value:selected`                   | value of selected item (for sidebar right) | `string`                                                                          | `undefined`  |
| `hide-toolbar`                           |                                            | `boolean`                                                                         | `false`      |
| `hide-sidebar-left`                      |                                            | `boolean`                                                                         | `false`      |
| `hide-sidebar-right`                     |                                            | `boolean`                                                                         | `false`      |
| `sidebar-left-background-color`          |                                            | `string`                                                                          | `#ffffff`    |
| `sidebar-left-elevation`                 |                                            | `string` \| `number`                                                              | `2`          |
| `sidebar-left-show-header-bottom-border` |                                            | `boolean`                                                                         | `true`       |
| `sidebar-left-show-border-right`         |                                            | `boolean`                                                                         | `true`       |
| `sidebar-left-border-color`              |                                            | `string`                                                                          | `#aaa`       |
| `sidebar-left-width`                     | width of sidebar                           | `string` \| `number`                                                              | `256`        |
| `sidebar-left-height-header`             |                                            | `string` \| `number`                                                              | `56`         |
| `toolbar-show-bottom-border`             |                                            | `boolean`                                                                         | `true`       |
| `toolbar-color`                          |                                            | `string`                                                                          | `background` |
| `toolbar-bottom-border-color`            |                                            | `string`                                                                          | `#aaa`       |
| `toolbar-elevation`                      |                                            | `string` \| `number`                                                              | `2`          |
| `toolbar-height`                         |                                            | `number`                                                                          | `56`         |
| `sidebar-right-items`                    |                                            | `[{ icon: string, text: string, color?: string, value: string, count?: number }]` | `[]`         |
| `sidebar-right-height`                   |                                            | `number`                                                                          | `undefined`  |
| `sidebar-right-width`                    |                                            | `number`                                                                          | `65`         |
| `sidebar-right-background`               |                                            | `string`                                                                          | `undefined`  |
| `sidebar-right-show-border`              |                                            | `boolean`                                                                         | `true`       |
| `sidebar-right-rounded`                  |                                            | `string` \| `number`\| `boolean`                                                  | `sm`         |
| `sidebar-right-elevation`                |                                            | `string` \| `number`                                                              | `2`          |
| `sidebar-right-border-color`             |                                            | `string`                                                                          | `#aaa`       |
| `sidebar-right-margin-y-close-button`    |                                            | `string` \| `number`                                                              | `10`         |
| `sidebar-right-default-item-color`       |                                            | `string`                                                                          | `#ccc`       |
| `menu-right-border`                      |                                            | `string`                                                                          | `undefined`  |
| `menu-right-color`                       |                                            | `string`                                                                          | `#ffffff`    |
| `padding-x`                              |                                            | `string`                                                                          | `24px`       |
| `padding-y`                              |                                            | `string`                                                                          | `12px`       |

### Events

| Name                          | Description                                 | Type     |
| ----------------------------- | ------------------------------------------- | -------- |
| `update:model-value:selected` | Trigger an emit when selected value changed | `string` |

### Slots

| Name                         | Description                                 | Value                  |
| ---------------------------- | ------------------------------------------- | ---------------------- |
| `default`                    | Slot for container content                  | `never`                |
| `sidebar-left`               | Slot for sidebar left content               | `never`                |
| `sidebar-left-header`        | Slot for sidebar left header content        | `never`                |
| `sidebar-left-footer`        | Slot for sidebar left footer content        | `never`                |
| `toolbar-left`               | Slot for toolbar left content               | `never`                |
| `toolbar-right`              | Slot for toolbar right content              | `never`                |
| `sidebar-right-menu`         | Slot for sidebar right menu content         | `{ selected: string }` |
| `sidebar-right-menu-header`  | Slot for sidebar right menu header content  | `{ selected: string }` |
| `sidebar-right-menu-actions` | Slot for sidebar right menu actions content | `{ selected: string }` |
