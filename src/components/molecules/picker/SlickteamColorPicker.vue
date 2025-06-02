<template>
  <v-menu v-model="menu" top :close-on-content-click="false">
    <template #activator="{ props }">
      <v-text-field v-model="modelValue" v-bind="props" label="Couleur" :variant="variant" clearable readonly>
        <template #prepend-inner>
          <v-avatar :color="colorDisplay" :border="colorDisplay === 'transparent'"></v-avatar>
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

defineProps<{
  variant?: 'filled' | 'outlined' | 'plain' | 'underlined' | 'solo' | 'solo-inverted' | 'solo-filled';
}>();
</script>

<style scoped>
.v-input :deep(.v-input__prepend) {
  margin-right: 8px;
}
</style>
