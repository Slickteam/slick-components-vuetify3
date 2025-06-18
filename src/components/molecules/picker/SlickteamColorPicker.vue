<template>
  <v-menu v-model="menu" top :close-on-content-click="false">
    <template #activator="{ props }">
      <v-text-field
        v-model="modelValue"
        v-bind="props"
        :label="label"
        :variant="variant"
        hide-details
        :density="density"
        clearable
        readonly
      >
        <template #prepend-inner>
          <v-avatar :size="autoSizeAvatar" :color="colorDisplay" :border="colorDisplay === 'transparent'" />
        </template>
      </v-text-field>
    </template>
    <v-color-picker v-model="modelValue" class="mx-auto" mode="hex" :modes="['hex']" :elevation="0" />
  </v-menu>
</template>

<script lang="ts" setup>
import { computed, shallowRef } from 'vue';

const modelValue = defineModel<string | undefined | null>({ default: undefined });
const menu = shallowRef<boolean>(false);

const colorDisplay = computed(() => modelValue.value ?? 'transparent');

const props = withDefaults(
  defineProps<{
    density?: 'default' | 'comfortable' | 'compact';
    variant?: 'filled' | 'outlined' | 'plain' | 'underlined' | 'solo' | 'solo-inverted' | 'solo-filled';
    label?: string;
  }>(),
  {
    label: 'Couleur',
  },
);

const autoSizeAvatar = computed<number>(() => {
  let size;
  if (props.density === 'comfortable') {
    size = 32;
  } else if (props.density === 'compact') {
    size = 24;
  } else {
    size = 38;
  }
  return size;
});
</script>

<style scoped>
.v-input :deep(.v-input__prepend) {
  margin-right: 8px;
}
</style>
