<template>
  <slickteam-sidebar
    v-if="!hideSidebarLeft"
    v-model="drawerLeftState"
    :elevation="sidebarLeftElevation"
    :show-header-bottom-border="sidebarLeftShowHeaderBottomBorder"
    :show-rail-button="sidebarLeftShowRailButton"
    :icon-rail-button-color="sidebarLeftIconRailButtonColor"
    :background-color="sidebarLeftBackgroundColor"
    :show-border="sidebarLeftShowBorder"
    :rail="rail"
    @update:rail="updateRail"
  >
    <template #header="{ rail }">
      <slot name="sidebar-left-header" :rail="rail"></slot>
    </template>
    <template #default="{ rail }">
      <slot name="sidebar-left" :rail="rail"></slot>
    </template>
    <template #footer="{ rail }">
      <slot name="sidebar-left-footer" :rail="rail"></slot>
    </template>
  </slickteam-sidebar>
  <slickteam-sidebar-icon
    v-if="!hideSidebarRight"
    v-model:drawer="drawerRightState"
    v-model:selected="selectedModel"
    :items="sidebarRightItems"
    :width="sidebarRightWidth"
    :height="sidebarRightHeight"
    :background="sidebarRightBackground"
    :show-left-border="sidebarRightShowBorder"
    :rounded="sidebarRightRounded"
    :elevation="sidebarRightElevation"
  >
    <template #default>
      <slot name="sidebar-right"></slot>
    </template>
  </slickteam-sidebar-icon>
  <slickteam-toolbar
    v-if="!hideToolbar"
    :sidebar-right-icon="!hideSidebarRight && !drawerRightState"
    :show-bottom-border="toolbarShowBottomBorder"
    :color="toolbarColor"
    :elevation="toolbarElevation"
    :height="toolbarHeight"
    @toggle:menu="drawerLeftState = !drawerLeftState"
    @toggle:right-menu="drawerRightState = !drawerRightState"
  >
    <template #toolbar-right>
      <slot name="toolbar-right"></slot>
    </template>
    <template #default>
      <slot name="toolbar-left"></slot>
    </template>
  </slickteam-toolbar>

  <div class="page-container">
    <div class="page-container-content">
      <slot></slot>
    </div>
    <Transition name="slide-fade">
      <div v-if="!hideSidebarRight && drawerRightState && selectedModel" class="sidebar-menu-wrapper">
        <v-card
          class="sidebar-menu d-flex flex-column"
          :elevation="menuRightElevation"
          :rounded="menuRightRounded"
          :color="menuRightColor"
          :style="{ height: `${$vuetify.display.height - 72}px` }"
        >
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

<script lang="ts" setup>
import { shallowRef } from 'vue';
import { useDisplay } from 'vuetify';

import SlickteamSidebar from './SlickteamSidebar.vue';
import SlickteamSidebarIcon from './SlickteamSidebarIcon.vue';
import SlickteamToolbar from './SlickteamToolbar.vue';

const { mobile } = useDisplay();
const selectedModel = defineModel<string | undefined>('selected', { default: undefined });

withDefaults(
  defineProps<{
    hideToolbar?: boolean;
    hideSidebarLeft?: boolean;
    hideSidebarRight?: boolean;
    sidebarLeftElevation?: string | number;
    sidebarLeftShowHeaderBottomBorder?: boolean;
    sidebarLeftShowRailButton?: boolean;
    sidebarLeftIconRailButtonColor?: string;
    sidebarLeftBackgroundColor?: string;
    sidebarLeftShowBorder?: boolean;
    toolbarShowBottomBorder?: boolean;
    toolbarColor?: string;
    toolbarElevation?: string | number;
    toolbarHeight?: number;
    sidebarRightItems?: { icon: string; text: string; color: string; value: string; count: number | undefined }[];
    sidebarRightWidth?: number;
    sidebarRightHeight?: number;
    sidebarRightBackground?: string;
    sidebarRightShowBorder?: boolean;
    sidebarRightRounded?: string | number | boolean;
    sidebarRightElevation?: string | number;
    menuRightElevation?: string | number;
    menuRightRounded?: string | number | boolean;
    menuRightColor?: string;
  }>(),
  {
    hideToolbar: false,
    hideSidebarLeft: false,
    hideSidebarRight: false,
    sidebarLeftElevation: '2',
    sidebarLeftShowHeaderBottomBorder: true,
    sidebarLeftShowRailButton: true,
    sidebarLeftIconRailButtonColor: `aaaaaa`,
    sidebarLeftBackgroundColor: '#ffffff',
    sidebarLeftShowBorder: true,
    toolbarShowBottomBorder: true,
    toolbarColor: 'background',
    toolbarElevation: 0,
    toolbarHeight: 56,
    sidebarRightItems: () => [],
    sidebarRightWidth: 65,
    sidebarRightRounded: 'sm',
    sidebarRightElevation: '2',
    sidebarRightShowBorder: true,
    menuRightElevation: '4',
    menuRightRounded: 'lg',
    menuRightColor: '#ffffff',
  },
);

const drawerLeftState = shallowRef(!mobile.value);
const drawerRightState = shallowRef(!mobile.value);
const rail = shallowRef(false);

function updateRail(value: boolean) {
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
