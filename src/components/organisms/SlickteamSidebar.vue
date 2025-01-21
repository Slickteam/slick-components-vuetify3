<template>
  <v-navigation-drawer
    v-model="modelDrawer"
    :elevation="elevation"
    :rail="!mobile && rail"
    :color="backgroundColor"
    :border="false"
    :style="{ border: showBorder ? '' : 'none' }"
    @click="emit('update:rail', false)"
  >
    <div
      class="sidebar-header"
      :style="{
        backgroundColor: backgroundColor,
        padding: !rail ? '8px 12px' : '',
        borderBottom: showHeaderBottomBorder ? 'solid 1px #aaaaaa' : '',
      }"
    >
      <slot name="header" :rail="rail"></slot>
      <v-btn
        v-if="showRailButton && !rail && !mobile"
        density="compact"
        icon
        rounded="0"
        width="24"
        height="24"
        elevation="0"
        :color="backgroundColor"
        @click.stop="emit('update:rail', !rail)"
      >
        <v-icon icon="mdi-chevron-left" :color="iconRailButtonColor" />
      </v-btn>
    </div>
    <div class="sidebar-content-container">
      <slot :rail="rail"></slot>
    </div>
    <template v-slot:append>
      <slot name="footer" :rail="rail"></slot>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify';

const modelDrawer = defineModel<boolean>({ default: true });
const emit = defineEmits<{
  (e: 'update:rail', value: boolean): void;
}>();

withDefaults(
  defineProps<{
    rail?: boolean;
    elevation?: string | number;
    showHeaderBottomBorder?: boolean;
    showRailButton?: boolean;
    iconRailButtonColor?: string;
    backgroundColor?: string;
    showBorder?: boolean;
  }>(),
  {
    rail: false,
    elevation: '2',
    showHeaderBottomBorder: true,
    showRailButton: true,
    iconRailButtonColor: '#aaaaaa',
    backgroundColor: '#ffffff',
    showBorder: true,
  },
);
const { mobile } = useDisplay();
</script>

<style scoped>
.sidebar-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  height: 56px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.sidebar-content-container {
  margin-top: 57px;
}
:deep(::-webkit-scrollbar) {
  width: 0;
  background: transparent;
}
</style>
