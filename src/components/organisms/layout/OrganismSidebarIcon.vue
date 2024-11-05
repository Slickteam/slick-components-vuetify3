<template>
  <v-navigation-drawer
    v-model="drawerModel"
    class="sidebar-icon-container"
    :style="{
      height: height ?? '',
      background: background ?? '',
    }"
    location="right"
    permanent
    :elevation="elevation"
    :width="width"
  >
    <slot>
      <v-btn
        icon="mdi-page-layout-sidebar-right"
        class="sidebar-icon-top-button"
        variant="text"
        rounded="0"
        @click="drawerModel = !drawerModel"
      />
      <v-list
        :selected="internalModel"
        class="sidebar-icon-list-container"
        density="compact"
        open-strategy="single"
        :rounded="rounded"
        @update:selected="updateSelected"
      >
        <v-list-item
          v-for="item in convertedItems"
          :key="`sidebar-icon-${item.value}`"
          active-class="sidebar-icon-menu-active"
          :style="{
            color: item.active ? `${item.color} !important` : '',
          }"
          :active="item.active"
          class="sidebar-icon-item-container"
          :rounded="rounded"
          :value="item.value"
        >
          <div
            class="sidebar-icon-menu-item-icon"
            :style="{
              'border-color': item.active ? item.color : '',
            }"
          >
            <v-icon :color="item.color">{{ item.icon }}</v-icon>
          </div>
          <p class="sidebar-icon-menu-item-text" align="center">{{ item.text }}</p>
        </v-list-item>
      </v-list>
    </slot>
  </v-navigation-drawer>
</template>

<script setup>
import { shallowRef, onMounted, computed, watch } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  width: {
    type: Number,
    default: 65,
  },
  height: {
    type: String,
    default: undefined,
  },
  background: {
    type: String,
    default: undefined,
  },
  rounded: {
    type: String,
    default: 'sm',
  },
  elevation: {
    type: [String, Number],
    default: '2',
  },
});

const selectedModel = defineModel('selected', { default: undefined, type: String });
const drawerModel = defineModel('drawer', { default: undefined, type: Boolean });
const internalModel = shallowRef([]);

onMounted(() => {
  internalModel.value = [selectedModel.value];
});

watch(selectedModel, () => {
  internalModel.value = [selectedModel.value];
});

const convertedItems = computed(() => props.items.map((i) => ({ ...i, active: selectedModel.value === i.value })));

function updateSelected(values) {
  internalModel.value = values;
  const valueReceived = values?.[0];
  selectedModel.value = valueReceived;
  // emit('update:selected', valueReceived);
}
</script>

<style scoped>
.sidebar-icon-container {
  max-height: 100%;
  height: 100%;
  padding: 4px;
}
.sidebar-icon-list-container {
  height: calc(100% - 52px);
  padding: 0;
  overflow-y: scroll;
  background: transparent;
}
.sidebar-icon-list-container::-webkit-scrollbar {
  display: none;
}
.sidebar-icon-item-container {
  margin: 0 0 4px 0;
  padding: 6px 4px !important;
}
.sidebar-icon-menu-item-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 48px;
  height: 48px;
  border: solid #aaa 0.5px;
  border-radius: 50%;
}
.sidebar-icon-menu-item-text {
  font-size: x-small;
  overflow: hidden;
  white-space: nowrap;
}
.sidebar-icon-menu-active .sidebar-icon-menu-item-icon {
  border-width: 2px;
  border-radius: 50%;
}
.sidebar-icon-menu-active .sidebar-icon-menu-item-text {
  font-weight: 700;
}
:deep(::-webkit-scrollbar) {
  width: 0;
  background: transparent;
}
.sidebar-icon-top-button {
  margin: 0 4px 2px 4px;
  color: #aaaaaa;
}
</style>
