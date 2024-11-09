<template>
  <v-btn
    :size="calculatedSize"
    :variant="variant"
    :color="color"
    :to="to"
    :title="title"
    :href="href ? sanitizeUrl(href) : undefined"
    :target="target"
    @click.stop="emit('click')"
  >
    <v-icon>{{ icon }}</v-icon>
    <v-chip v-if="showChip" :size="'small'" class="ml-1">{{ contentChip }}</v-chip>
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
    type: [String, Number],
    default: undefined,
  },
  variant: {
    type: String,
    default: 'text',
  },
  color: {
    type: String,
    default: 'secondary',
  },
  icon: {
    type: String,
    default: 'mdi-eye',
  },
  to: {
    type: String,
    default: undefined,
  },
  title: {
    type: String,
    default: undefined,
  },
  showChip: {
    type: Boolean,
    default: false,
  },
  contentChip: {
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
    case 'sm':
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
