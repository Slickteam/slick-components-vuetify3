<template>
  <OrganismSidebar v-model="drawerState" :rail="rail" @update:rail="updateRail">
    <template #header="{ rail }">
      <slot name="sidebar-header" :rail="rail"></slot>
    </template>
    <template #default="{ rail }">
      <slot name="sidebar" :rail="rail"></slot>
    </template>
    <template #footer="{ rail }">
      <slot name="sidebar-footer" :rail="rail"></slot>
    </template>
  </OrganismSidebar>
  <OrganismToolbar @toggle:menu="drawerState = !drawerState">
    <slot name="toolbar"></slot>
  </OrganismToolbar>

  <div class="page-container">
    <slot></slot>
  </div>
</template>

<script setup>
import { shallowRef } from 'vue';
import { useDisplay } from 'vuetify';
import OrganismSidebar from './OrganismSidebar.vue';
import OrganismToolbar from './OrganismToolbar.vue';

const { mobile } = useDisplay();
const drawerState = shallowRef(!mobile.value);

const rail = shallowRef(false);

function updateRail(value) {
  rail.value = value;
}
</script>

<style scoped>
.page-container {
  padding: 12px 24px;
  height: 100%;
}
</style>
