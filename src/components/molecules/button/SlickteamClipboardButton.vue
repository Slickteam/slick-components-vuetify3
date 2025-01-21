<template>
  <v-tooltip :text="tooltip" :open-delay="500">
    <template #activator="{ props }">
      <v-btn v-bind="props" variant="text" :size="calculatedSize" @click="copieValue">
        <v-icon>mdi-clipboard-outline</v-icon>
      </v-btn>
    </template>
  </v-tooltip>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useDisplay } from 'vuetify';

const { name } = useDisplay();

const emit = defineEmits<{
  (e: 'after:copy'): void;
}>();

const props2 = withDefaults(
  defineProps<{
    color?: string;
    size?: string | number;
    tooltip?: string;
    value?: string;
  }>(),
  {
    tooltip: 'Clipboard',
    color: 'secondary',
  },
);

function copieValue() {
  navigator.clipboard.writeText(props2.value ?? '');
  emit('after:copy');
}
const calculatedSize = computed(() => {
  if (props2.size !== undefined) {
    return props2.size;
  }
  let result = 'small';
  switch (name.value) {
    case 'xs':
      result = 'x-small';
      break;
    case 'sm':
      result = 'x-small';
      break;
    case 'md':
      result = 'small';
      break;
    case 'lg':
      result = 'small';
      break;
    case 'xl':
      result = 'default';
      break;
    case 'xxl':
      result = 'large';
      break;
  }
  return result;
});
</script>
