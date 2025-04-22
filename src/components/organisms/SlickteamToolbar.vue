<template>
  <v-app-bar
    :style="{ height: `${height}px`, borderBottom: showBottomBorder ? 'solid 1px #aaaaaa' : '' }"
    :color="color"
    :elevation="elevation"
    :height="height"
  >
    <template v-if="mobile" v-slot:prepend>
      <v-app-bar-nav-icon @click="emit('toggle:menu')" />
    </template>
    <template v-slot:append>
      <slot name="toolbar-right"></slot>

      <v-tooltip v-if="sidebarRightIcon" text="Ouvrir le menu d'édition">
        <template #activator="{ props }">
          <v-btn
            icon="mdi-dock-right"
            variant="text"
            size="small"
            elevation="0"
            rounded="0"
            v-bind="props"
            @click="emit('toggle:right-menu')"
          />
        </template>
      </v-tooltip>
    </template>
    <div class="app-bar-container">
      <slot></slot>
    </div>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify';

const emit = defineEmits<{
  (e: 'toggle:menu'): void;
  (e: 'toggle:right-menu'): void;
}>();

withDefaults(
  defineProps<{
    sidebarRightIcon?: boolean;
    showBottomBorder?: boolean;
    color?: string;
    elevation?: string | number;
    height?: number;
  }>(),
  {
    sidebarRightIcon: false,
    showBottomBorder: true,
    color: 'background',
    elevation: 0,
    height: 64,
  },
);
const { mobile } = useDisplay();
</script>

<style scoped>
.app-bar-container {
  width: 100%;
  padding: 8px 12px;
}
</style>
