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

<script lang="ts" setup>
import { sanitizeUrl } from '@braintree/sanitize-url';
import { computed } from 'vue';
import { useDisplay } from 'vuetify';

const emit = defineEmits<{
  (e: 'click'): void;
}>();

const { name } = useDisplay();

const props = withDefaults(
  defineProps<{
    color?: string;
    contentChip?: string;
    icon?: string;
    href?: string;
    showChip?: boolean;
    size?: string | number;
    target?: string;
    title?: string;
    to?: string;
    variant?: 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain';
  }>(),
  {
    variant: 'text',
    color: 'secondary',
    icon: 'mdi-eye',
    showChip: false,
  },
);

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
