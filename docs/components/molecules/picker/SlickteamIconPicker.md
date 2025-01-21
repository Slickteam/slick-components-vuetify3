# slickteam-icon-picker

Component use to have an icon picker

## Example

```vue
<template>
  <slickteam-icon-picker v-model="icon" label="Icône" />
</template>

<script setup>
import { shallowRef } from 'vue';

const icon = shallowRef('mdi-home');
</script>
```

## Import

- If is not import globally, you need to import this component

```js
import { SlickteamIconPicker } from '@slickteam/components-vuetify3';
```

## API

### Props

| Name          | Description           | Type                                                               | Default     |
| ------------- | --------------------- | ------------------------------------------------------------------ | ----------- |
| `clearable`   | if value is clearable | `boolean`                                                          | `true`      |
| `density`     | density of select     | `default` \| `comfortable` \| `compact`                            | `'default'` |
| `label`       | label of select       | `string`                                                           | `'Icône'`   |
| `model-value` | value of icon         | `string`                                                           | `undefined` |
| `variant`     | Variant of button     | `flat` \| `text` \| `elevated` \| `tonal` \| `outlined` \| `plain` | `'text'`    |

### Events

| Name                 | Description                        | Type    |
| -------------------- | ---------------------------------- | ------- |
| `update:model-value` | Trigger an emit when value changed | `never` |

### Slots

> None
