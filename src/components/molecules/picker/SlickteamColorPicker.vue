<template>
  <v-menu v-model="menu" top nudge-bottom="105" nudge-left="16" :close-on-content-click="false">
    <template #activator="{ props }">
      <v-text-field v-model="modelValue" v-bind="props" label="Couleur" class="mt-4" :color="modelValue" readonly>
        <template #prepend>
          <v-chip variant="flat" :color="modelValue"></v-chip>
        </template>
      </v-text-field>
    </template>
    <v-color-picker v-model="modelValue" class="mx-auto" mode="hex" :modes="['hex']" :elevation="0" />
  </v-menu>
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue';

const modelValue = defineModel<string>({ default: '#1976D2' });
const menu = shallowRef<boolean>(false);
</script>

<style scoped>
.v-input :deep(.v-input__prepend) {
  margin-right: 8px;
}
</style>
