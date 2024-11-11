<template>
  <v-autocomplete
    v-model="model"
    :label="label"
    :items="iconsTransformedList"
    :density="density"
    :prepend-inner-icon="model ? `mdi-${model}` : undefined"
    :clearable="clearable"
    item-props
  />
</template>

<script setup>
import { computed } from 'vue';
import { icons } from '@/components/icons';

const model = defineModel({ type: String, default: undefined });
defineProps({
  label: {
    type: String,
    default: 'Icône',
  },
  density: {
    type: String,
    default: undefined,
  },
  clearable: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(['update:modelValue']);
const iconsTransformedList = computed(() => icons.map((i) => ({ title: i, value: i, prependIcon: `mdi-${i}` })));
</script>
