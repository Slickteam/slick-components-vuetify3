<template>
  <v-autocomplete
    v-model="model"
    :label="label"
    :items="iconsTransformedList"
    :density="density"
    :prepend-inner-icon="model"
    :clearable="clearable"
    :variant="variant"
    hide-details
    item-props
  />
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import { icons } from '@/components/icons';

const model = defineModel<string | undefined>({ default: undefined });

withDefaults(
  defineProps<{
    clearable?: boolean;
    density?: 'default' | 'comfortable' | 'compact';
    label?: string;
    variant?: 'filled' | 'underlined' | 'outlined' | 'plain' | 'solo' | 'solo-inverted' | 'solo-filled';
  }>(),
  {
    label: 'Icône',
    clearable: true,
  },
);

const iconsTransformedList = computed(() => icons.map((i) => ({ title: i, value: `mdi-${i}` })));
</script>
