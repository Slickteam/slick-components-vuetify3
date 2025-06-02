# slickteam-color-picker

Component use to have an color picker

## Example

```vue
<template>
  <slickteam-color-picker v-model="color" />
</template>

<script setup>
import { shallowRef } from 'vue';

const color = shallowRef('#123456');
</script>
```

## Import

- If is not import globally, you need to import this component

```js
import { SlickteamColorPicker } from '@slickteam/components-vuetify3';
```

## API

### Props

| Name          | Description           | Type                                                                                           | Default     |
| ------------- | --------------------- | ---------------------------------------------------------------------------------------------- | ----------- |
| `model-value` | value of color        | `string`                                                                                       | `undefined` |
| `variant`     | Variant of text-field | `filled` \| `outlined` \| `plain` \| `underlined` \| `solo` \| `solo-inverted`\| `solo-filled` | `'text'`    |

### Events

| Name                 | Description                        | Type    |
| -------------------- | ---------------------------------- | ------- |
| `update:model-value` | Trigger an emit when value changed | `never` |

### Slots

> None
