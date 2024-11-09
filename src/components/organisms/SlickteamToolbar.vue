<template>
  <v-app-bar class="app-bar" color="background" elevation="0" height="56">
    <template v-if="mobile" v-slot:prepend>
      <v-app-bar-nav-icon @click="emit('toggle:menu')" />
    </template>
    <template v-slot:append>
      <slot name="toolbar-right"></slot>

      <v-tooltip v-if="sidebarRightIcon" text="Ouvrir le menu d'édition">
        <template #activator="{ props }">
          <v-btn icon="mdi-page-layout-sidebar-right" variant="text" rounded="0" v-bind="props" @click="emit('toggle:right-menu')" />
        </template>
      </v-tooltip>
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
  border-bottom: solid 1px #aaaaaa;
}
.app-bar-container {
  width: 100%;
  padding: 8px 12px;
}
</style>
