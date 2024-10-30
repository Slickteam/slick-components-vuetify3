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
    :sidebar-right-icon="!hideSidebarRight && !drawerRightState"
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

  <div class="page-container" no-gutters>
    <div class="page-container-content">
      <slot></slot>
    </div>
    <Transition name="slide-fade">
      <div v-if="!hideSidebarRight && drawerRightState && selectedModel" class="sidebar-menu-wrapper">
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
      </div>
    </Transition>
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
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.page-container-content {
  padding: 12px 24px !important;
  flex-grow: 3;
}

.sidebar-menu-wrapper {
  padding: 8px 8px 8px 0px !important;
  width: 291px !important;
  padding: 8px 8px 8px 0;
}

.sidebar-menu {
  position: sticky;
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
.slide-fade-enter-active {
  transition: all 0.2s linear;
}

.slide-fade-leave-active {
  transition: all 0.2s linear;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
