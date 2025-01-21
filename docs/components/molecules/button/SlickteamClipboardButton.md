# slickteam-clipboard-button

Component use to make an button to copy value in clipboard of browser

## Example

```vue
<template>
  <slickteam-clipboard-button tooltip="Copy Me" value="test123" @after:copy="handleCopy" />
</template>

<script setup>
function handleCopy(value) {
  // normally, its print "handleCopy = 'test123'"
  console.debug(`handleCopy = ${value}`);
}
</script>
```

## Import

- If is not import globally, you need to import this component

```js
import { SlickteamClipboardButton } from '@slickteam/components-vuetify3';
```

## API

### Props

| Name      | Description                                        | Type                 | Default       |
| --------- | -------------------------------------------------- | -------------------- | ------------- |
| `color`   | Color of button                                    | `string`             | `'secondary'` |
| `size`    | Size of button                                     | `string` \| `number` | `undefined`   |
| `tooltip` | Text display in tooltip                            | `string`             | `'Clipboard'` |
| `value`   | Value to pass for this action of copy in clipboard | `string`             | `''`          |

### Events

| Name         | Description                                         | Type     |
| ------------ | --------------------------------------------------- | -------- |
| `after:copy` | Return the value passing in props after click on it | `string` |

### Slots

> None
