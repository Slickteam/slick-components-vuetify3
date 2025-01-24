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
    href?: string;
    icon?: string;
    size?: string;
    target?: string;
    text?: string;
    title?: string;
    to?: string;
    variant?: 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain';
  }>(),
  {
    variant: 'outlined',
    color: 'secondary',
    icon: 'mdi-plus',
    text: 'Button',
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
