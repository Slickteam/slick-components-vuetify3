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

  <v-row class="page-container" no-gutters>
    <v-col class="page-container-content">
      <slot></slot>
    </v-col>
    <v-col v-if="selectedModel" cols="auto" class="sidebar-menu-wrapper">
      <v-card class="sidebar-menu d-flex flex-column elevation-4" rounded="lg" :style="{ height: `${$vuetify.display.height - 72}px` }">
        <v-card-title class="sidebar-menu-padding">
          <slot name="sidebar-right-menu-header" :selected="selectedModel"></slot>
        </v-card-title>
        <v-card-text class="sidebar-menu-content sidebar-menu-padding">
          <slot name="sidebar-right-menu" :selected="selectedModel"></slot>
        </v-card-text>
        <v-card-actions class="sidebar-menu-padding">
          <slot name="sidebar-right-menu-actions" :selected="selectedModel"></slot>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
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
  height: 100%;
}

.page-container-content {
  padding: 12px 24px !important;
}

.sidebar-menu-wrapper {
  padding: 8px 8px 8px 0px !important;
}

.sidebar-menu {
  position: sticky;
  width: 283px;
  top: 64px;
  bottom: 0px;
}

.sidebar-menu-content {
  overflow-y: auto;
  scrollbar-width: thin;
}

.sidebar-menu-padding {
  padding-left: 8px;
  padding-right: 8px;
}
</style>
