<template>
  <v-navigation-drawer v-model="modelDrawer" class="sidebar-root-container" elevation="2" :rail="rail" @click="emit('update:rail', false)">
    <div class="sidebar-header" :style="{ padding: !rail ? '8px 12px' : '' }">
      <slot name="header" :rail="rail"></slot>
      <v-btn v-if="!rail" density="compact" icon rounded="0" width="24" height="24" elevation="0" @click.stop="emit('update:rail', !rail)">
        <v-icon icon="mdi-chevron-left" color="#aaaaaa" />
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

<script setup>
const modelDrawer = defineModel({ default: true });
const emit = defineEmits(['update:rail']);
defineProps({
  rail: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.sidebar-header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 100;
  height: 56px;
  border-bottom: solid 1px #aaaaaa;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.sidebar-nav-footer {
  height: 188px;
  border-top: solid 1px #aaaaaa;
}
.sidebar-footer {
  height: 92px;
  border-top: solid 1px #aaaaaa;
}
.sidebar-content-container {
  margin-top: 57px;
}
:deep(::-webkit-scrollbar) {
  width: 0;
  background: transparent;
}
</style>
