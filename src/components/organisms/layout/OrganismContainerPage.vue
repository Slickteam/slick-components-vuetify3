<template>
  <OrganismSidebar v-if="!hideSidebarLeft" v-model="drawerLeftState" :rail="rail" @update:rail="updateRail">
    <template #header="{ rail }">
      <slot name="sidebar-left-header" :rail="rail"></slot>
    </template>
    <template #default="{ rail }">
      <slot name="sidebar-left" :rail="rail"></slot>
    </template>
    <template #footer="{ rail }">
      <slot name="sidebar-left-footer" :rail="rail"></slot>
    </template>
  </OrganismSidebar>
  <OrganismSidebarIcon
    v-if="!hideSidebarRight"
    v-model:drawer="drawerRightState"
    v-model:selected="selectedModel"
    :items="itemsSidebarRight"
  >
    <template #default>
      <slot name="sidebar-right"></slot>
    </template>
  </OrganismSidebarIcon>
  <OrganismToolbar
    v-if="!hideToolbar"
    :sidebar-right-icon="!hideToolbar && !drawerRightState"
    @toggle:menu="drawerLeftState = !drawerLeftState"
    @toggle:right-menu="drawerRightState = !drawerRightState"
  >
    <template #toolbar-right>
      <slot name="toolbar-right"></slot>
    </template>
    <template #default>
      <slot name="toolbar-left"></slot>
    </template>
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
import OrganismSidebarIcon from './OrganismSidebarIcon.vue';

const { mobile } = useDisplay();
const selectedModel = defineModel('selected', { default: undefined, type: String });

defineProps({
  hideToolbar: {
    type: Boolean,
    default: false,
  },
  hideSidebarLeft: {
    type: Boolean,
    default: false,
  },
  hideSidebarRight: {
    type: Boolean,
    default: false,
  },
  itemsSidebarRight: {
    type: Array,
    default: () => [],
  },
});

const drawerLeftState = shallowRef(!mobile.value);
const drawerRightState = shallowRef(!mobile.value);
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
