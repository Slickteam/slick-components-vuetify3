<template>
  <v-btn
    :size="calculatedSize"
    :variant="variant"
    :color="color"
    :title="title"
    :to="to"
    :href="href ? sanitizeUrl(href) : undefined"
    :target="target"
    @click.stop="emit('click')"
  >
    <v-icon>{{ icon }}</v-icon> {{ text }}
  </v-btn>
</template>

<script setup>
import { computed } from 'vue';
import { useDisplay } from 'vuetify';
import { sanitizeUrl } from '@braintree/sanitize-url';

const emit = defineEmits(['click']);
const { name } = useDisplay();
const props = defineProps({
  size: {
    type: String,
    default: undefined,
  },
  variant: {
    type: String,
    default: 'outlined',
  },
  color: {
    type: String,
    default: 'secondary',
  },
  icon: {
    type: String,
    default: 'mdi-plus',
  },
  text: {
    type: String,
    default: 'Button',
  },
  title: {
    type: String,
    default: undefined,
  },
  to: {
    type: String,
    default: undefined,
  },
  href: {
    type: String,
    default: undefined,
  },
  target: {
    type: String,
    default: undefined,
  },
});
const calculatedSize = computed(() => {
  if (props.size !== undefined) {
    return props.size;
  }
  let result;
  switch (name.value) {
    case 'xs':
      result = 'x-small';
      break;
    case 'xl':
      result = 'default';
      break;
    case 'xxl':
      result = 'large';
      break;
    default:
      result = 'small';
  }
  return result;
});
</script>
