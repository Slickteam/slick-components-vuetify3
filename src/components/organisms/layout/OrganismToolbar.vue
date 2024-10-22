<template>
  <v-app-bar class="app-bar" elevation="0" height="56">
    <template v-if="mobile" v-slot:prepend>
      <v-app-bar-nav-icon @click="emit('toggle:menu')" />
    </template>
    <div class="app-bar-container">
      <slot></slot>
    </div>
  </v-app-bar>
</template>

<script setup>
import { useDisplay } from 'vuetify';

const emit = defineEmits(['toggle:menu']);
const { mobile } = useDisplay();
</script>

<style scoped>
.app-bar {
  background: transparent !important;
  border-bottom: solid 1px #aaaaaa;
}
.app-bar-container {
  width: 100%;
  padding: 8px 12px;
}
</style>
