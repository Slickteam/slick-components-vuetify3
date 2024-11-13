# slickteam-container

Component use to have a full container

## Example

```vue
<template>
  <slickteam-container v-model:selected="selected" :items="items">
    <template #sidebar-left-header="{ rail }">Header {{ rail }}</template>
    <template #sidebar-left="{ rail }">Content </template>
    <template #sidebar-left-footer="{ rail }">Footer </template>
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

| Name                   | Description                                | Type     | Default     |
| ---------------------- | ------------------------------------------ | -------- | ----------- |
| `model-value:selected` | value of selected item (for sidebar right) | `string` | `undefined` |

### Events

| Name                          | Description                                 | Type     |
| ----------------------------- | ------------------------------------------- | -------- |
| `update:model-value:selected` | Trigger an emit when selected value changed | `string` |

### Slots

| Name                         | Description                                 | Value                  |
| ---------------------------- | ------------------------------------------- | ---------------------- |
| `default`                    | Slot for container content                  | `never`                |
| `sidebar-left`               | Slot for sidebar left content               | `{ rail: boolean }`    |
| `sidebar-left-header`        | Slot for sidebar left header content        | `{ rail: boolean }`    |
| `sidebar-left-footer`        | Slot for sidebar left footer content        | `{ rail: boolean }`    |
| `toolbar-left`               | Slot for toolbar left content               | `never`                |
| `toolbar-right`              | Slot for toolbar right content              | `never`                |
| `sidebar-right-menu`         | Slot for sidebar right menu content         | `{ selected: string }` |
| `sidebar-right-menu-header`  | Slot for sidebar right menu header content  | `{ selected: string }` |
| `sidebar-right-menu-actions` | Slot for sidebar right menu actions content | `{ selected: string }` |
