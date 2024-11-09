# slickteam-data-table

Component use to have a data table

## Example

```vue
<template>
  <slickteam-data-table :headers="headers" :data="data">
    <template #item.color="{ value }">
      {{ value }}
    </template>
  </slickteam-data-table>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  { id: '12345', text: 'Menu 01', color: '#3729DD', createdAt: new Date() },
  { id: '12345', text: 'Menu 02', color: '#4EBC1A', createdAt: new Date() },
  { id: '12345', text: 'Menu 03', color: '#40fC1A', createdAt: new Date() },
  { id: '12345', text: 'Menu 04', color: '#3EBC1A', createdAt: new Date() },
  { id: '12345', text: 'Menu 05', color: '#4EBC10', createdAt: new Date() },
]);

const headers = [
  { title: 'Id', key: 'id' },
  { title: 'Text', key: 'text' },
  { title: 'Couleur', key: 'color', rDisplay: 'sm' },
  { title: 'Crée le', key: 'createdAt', rDisplay: 'md' },
];
</script>
```

## Import

- If is not import globally, you need to import this component

```js
import { SlickteamDataTable } from '@slickteam/components-vuetify3';
```

## API

### Props

| Name                 | Description                            | Type               | Default                       |
| -------------------- | -------------------------------------- | ------------------ | ----------------------------- |
| `data`               | data content                           | `array`            | `[]`                          |
| `fixed-header`       | show fixed header                      | `boolean`          | `true`                        |
| `headers`            | headers content                        | `array`            | `[]`                          |
| `height`             | height of table                        | `string \| number` | `undefined`                   |
| `message-no-content` | message when no content data           | `string`           | `'Pas de données à afficher'` |
| `override-keys`      | list of keys to override style in slot | `array`            | `[]`                          |
| `show-expand`        | show expand content                    | `boolean`          | `false`                       |

### Events

No events

### Slots

| Name           | Description           | Value             |
| -------------- | --------------------- | ----------------- |
| `actions`      | Slot for actions      | `{ item, value }` |
| `expanded-row` | Slot for expanded row | `{ item, value }` |
| `item.<key>`   | Slot for key item     | `{ item, value }` |
