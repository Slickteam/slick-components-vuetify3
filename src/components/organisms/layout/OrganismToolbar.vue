<template>
  <v-app-bar class="app-bar" elevation="0" height="56">
    <template v-if="mobile" v-slot:prepend>
      <v-app-bar-nav-icon @click="emit('toggle:menu')" />
    </template>
    <template v-slot:append>
      <slot name="toolbar-right"></slot>
      <v-btn v-if="sidebarRightIcon" icon="mdi-page-layout-sidebar-right" variant="text" rounded="0" @click="emit('toggle:right-menu')" />
    </template>
    <div class="app-bar-container">
      <slot></slot>
    </div>
  </v-app-bar>
</template>

<script setup>
import { useDisplay } from 'vuetify';

const emit = defineEmits(['toggle:menu', 'toggle:right-menu']);
defineProps({
  sidebarRightIcon: {
    type: Boolean,
    default: false,
  },
});
const { mobile } = useDisplay();
</script>

<style scoped>
.app-bar {
  height: 56px;
  background: transparent !important;
  border-bottom: solid 1px #aaaaaa;
}
.app-bar-container {
  width: 100%;
  padding: 8px 12px;
}
</style>
