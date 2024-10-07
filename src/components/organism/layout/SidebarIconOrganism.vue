<template>
  <v-navigation-drawer class="pa-2" :width="width" :location="location" permanent>
    <v-list class="pa-0" active-class="sidebar-icon-menu-active" density="compact" nav>
      <v-list-item v-for="(item, index) in items" :key="`sidebar-icon-${index}`" class="pa-0" :value="item.value">
        <div
          class="sidebar-icon-menu-item-icon"
          :style="{
            'border-color': selectedItem === item.value ? item.color : '',
            'background-color': selectedItem === item.value ? `transparentize(${item.color}, 1)` : '',
          }"
        >
          <v-icon :style="{ color: item.color }">{{ item.icon }}</v-icon>
        </div>
        <p class="sidebar-icon-menu-item-text" align="center">{{ item.text }}</p>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { shallowRef } from 'vue';

const emit = defineEmits(['selected-value']);

defineProps({
  location: {
    type: String,
    default: 'left',
  },
  selectedItem: {
    type: String,
    default: 'menu01',
  },
  items: {
    type: Array,
    default: () => [],
  },
  width: {
    type: Number,
    default: 64,
  },
});
</script>

<style scoped>
.sidebar-icon-menu-item-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 47px;
  height: 47px;
  border: solid #aaa 0.5px;
  border-radius: 50%;
}
.sidebar-icon-menu-active .sidebar-icon-menu-item-icon {
  border-width: 2px;
  border-radius: 50%;
  font-weight: 700;
}
.sidebar-icon-menu-active .sidebar-icon-menu-item-text {
  font-weight: 700;
}
</style>
