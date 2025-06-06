<template>
  <slickteam-sidebar
    v-if="!hideSidebarLeft"
    v-model="drawerLeftState"
    :elevation="sidebarLeftElevation"
    :show-header-bottom-border="sidebarLeftShowHeaderBottomBorder"
    :background-color="sidebarLeftBackgroundColor"
    :show-border-right="sidebarLeftShowBorderRight"
    :border-color="sidebarLeftBorderColor"
    :width="sidebarLeftWidth"
    :height-header="sidebarLeftHeightHeader"
  >
    <template #header>
      <slot name="sidebar-left-header"></slot>
    </template>
    <template #default>
      <slot name="sidebar-left"></slot>
    </template>
    <template #footer>
      <slot name="sidebar-left-footer"></slot>
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
    :border-color="sidebarRightBorderColor"
    :margin-y-close-button="sidebarRightMarginYCloseButton"
    :default-active-color="sidebarRightDefaultActiveColor"
    :default-item-color="sidebarRightDefaultItemColor"
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
    :bottom-border-color="toolbarBottomBorderColor"
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
    <div class="page-container-content" :style="{ padding: `${paddingY} ${paddingX}` }">
      <slot></slot>
    </div>
    <Transition name="slide-fade">
      <div
        v-if="stateMenuRight"
        :style="{
          width: `${menuRightWidth} !important`,
        }"
      >
        <v-card
          class="sidebar-menu d-flex flex-column"
          :elevation="menuRightElevation"
          :rounded="menuRightRounded"
          :color="menuRightColor"
          :style="{
            height: `calc(${$vuetify.display.height - 64}px - ${menuRightMarginY} - ${menuRightMarginY})`,
            borderLeft: menuRightBorder ? `1px solid ${menuRightBorder}` : '',
            top: `${toolbarHeight}px`,
            margin: `${menuRightMarginY} ${menuRightMarginY}`,
          }"
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
import { computed, shallowRef, watch } from 'vue';
import { onMounted } from 'vue';
import { useDisplay } from 'vuetify';

import SlickteamSidebar from './SlickteamSidebar.vue';
import SlickteamSidebarIcon from './SlickteamSidebarIcon.vue';
import SlickteamToolbar from './SlickteamToolbar.vue';

const { mobile } = useDisplay();
const selectedModel = defineModel<string | undefined>('selected', { default: undefined });

const props = withDefaults(
  defineProps<{
    hideToolbar?: boolean;
    hideSidebarLeft?: boolean;
    hideSidebarRight?: boolean;
    sidebarLeftElevation?: string | number;
    sidebarLeftShowHeaderBottomBorder?: boolean;
    sidebarLeftBackgroundColor?: string;
    sidebarLeftShowBorderRight?: boolean;
    sidebarLeftBorderColor?: string;
    sidebarLeftWidth?: string | number;
    sidebarLeftHeightHeader?: string | number;
    toolbarShowBottomBorder?: boolean;
    toolbarBottomBorderColor?: string;
    toolbarColor?: string;
    toolbarElevation?: string | number;
    toolbarHeight?: number;
    sidebarRightItems?: { icon: string; text: string; color?: string; value: string; count?: number }[];
    sidebarRightWidth?: number;
    sidebarRightHeight?: number;
    sidebarRightBackground?: string;
    sidebarRightShowBorder?: boolean;
    sidebarRightRounded?: string | number | boolean;
    sidebarRightElevation?: string | number;
    sidebarRightBorderColor?: string;
    sidebarRightDefaultItemColor?: string;
    sidebarRightDefaultActiveColor?: string;
    sidebarRightMarginYCloseButton?: string | number;
    menuRightBorder?: string;
    menuRightColor?: string;
    menuRightElevation?: string;
    menuRightRounded?: string;
    menuRightMarginX?: string;
    menuRightMarginY?: string;
    menuRightForceShow?: boolean;
    menuRightWidth?: string;
    paddingX?: string;
    paddingY?: string;
  }>(),
  {
    hideToolbar: false,
    hideSidebarLeft: false,
    hideSidebarRight: false,
    sidebarLeftElevation: '2',
    sidebarLeftShowHeaderBottomBorder: true,
    sidebarLeftBackgroundColor: '#ffffff',
    sidebarLeftShowBorderRight: true,
    sidebarLeftBorderColor: '#aaa',
    sidebarLeftWidth: '256',
    sidebarLeftHeightHeader: '64',
    toolbarShowBottomBorder: true,
    toolbarColor: 'background',
    toolbarBottomBorderColor: '#aaa',
    toolbarElevation: 0,
    toolbarHeight: 56,
    sidebarRightItems: () => [],
    sidebarRightWidth: 65,
    sidebarRightRounded: 'sm',
    sidebarRightElevation: '2',
    sidebarRightShowBorder: true,
    sidebarRightBorderColor: '#aaa',
    sidebarRightDefaultActiveColor: 'var(--v-primary-base)',
    sidebarRightDefaultItemColor: '#ccc',
    sidebarRightMarginYCloseButton: '10',
    menuRightColor: '#ffffff',
    menuRightElevation: '0',
    menuRightRounded: '0',
    menuRightMarginX: '0px',
    menuRightMarginY: '0px',
    menuRightForceShow: false,
    menuRightWidth: '283px',
    paddingX: '24px',
    paddingY: '12px',
  },
);

const drawerLeftState = shallowRef(!mobile.value);
const drawerRightState = shallowRef(!mobile.value);

const stateMenuRight = computed(
  () => props.menuRightForceShow || (!props.hideSidebarRight && drawerRightState.value && selectedModel.value),
);

onMounted(() => {
  if (selectedModel.value === undefined) {
    drawerRightState.value = false;
  }
});

watch(selectedModel, (value) => {
  if (value !== undefined) {
    drawerRightState.value = true;
  }
});
watch(drawerRightState, (value) => {
  if (!value) {
    selectedModel.value = undefined;
  }
});
</script>

<style scoped>
.page-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.page-container-content {
  flex-grow: 3;
}

.sidebar-menu {
  position: sticky;
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
