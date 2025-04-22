<template>
  <v-navigation-drawer
    v-model="modelDrawer"
    :elevation="elevation"
    :color="backgroundColor"
    :width="width"
    :border="false"
    :style="{ border: showBorder ? '' : 'none' }"
  >
    <div
      class="sidebar-header"
      :style="{
        backgroundColor: backgroundColor,
        borderBottom: showHeaderBottomBorder ? 'solid 1px #aaaaaa' : '',
      }"
    >
      <slot name="header"></slot>
    </div>
    <div class="sidebar-content-container">
      <slot></slot>
    </div>
    <template v-slot:append>
      <slot name="footer"></slot>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
const modelDrawer = defineModel<boolean>({ default: true });

withDefaults(
  defineProps<{
    elevation?: string | number;
    showHeaderBottomBorder?: boolean;
    backgroundColor?: string;
    showBorder?: boolean;
    width?: string | number;
  }>(),
  {
    elevation: '2',
    showHeaderBottomBorder: true,
    backgroundColor: '#ffffff',
    showBorder: true,
  },
);
</script>

<style scoped>
.sidebar-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  height: 64px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.sidebar-content-container {
  margin-top: 65px;
  height: calc(100% - 65px);
}
:deep(::-webkit-scrollbar) {
  width: 0;
  background: transparent;
}
</style>
