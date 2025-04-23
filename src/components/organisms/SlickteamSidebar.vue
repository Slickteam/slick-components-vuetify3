<template>
  <v-navigation-drawer
    v-model="modelDrawer"
    :elevation="elevation"
    :color="backgroundColor"
    :width="width"
    :border="false"
    :style="{ border: 'none', borderRight: showBorderRight ? `1px solid ${borderColor}` : 'none' }"
  >
    <div
      class="sidebar-header"
      :style="{
        backgroundColor: backgroundColor,
        borderBottom: showHeaderBottomBorder ? `solid 1px ${borderColor}` : '',
        height: `${heightHeader}px`,
      }"
    >
      <slot name="header"></slot>
    </div>
    <div
      :style="{
        marginTop: `calc(${heightHeader}px + 1px)`,
        height: `calc(100% - ${heightHeader}px - 1px)`,
      }"
    >
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
    showBorderRight?: boolean;
    borderColor?: string;
    width?: string | number;
    heightHeader?: string | number;
  }>(),
  {
    elevation: '2',
    showHeaderBottomBorder: true,
    backgroundColor: '#ffffff',
    showBorderRight: true,
    borderColor: '#aaa',
    heightHeader: '64',
  },
);
</script>

<style scoped>
.sidebar-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
:deep(::-webkit-scrollbar) {
  width: 0;
  background: transparent;
}
</style>
