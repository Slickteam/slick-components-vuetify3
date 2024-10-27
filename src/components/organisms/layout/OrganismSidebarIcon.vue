<template>
  <v-navigation-drawer
    v-model="stateInternalDrawer"
    class="sidebar-icon-container"
    :style="{
      height: height ?? '',
      background: background ?? '',
    }"
    location="right"
    :elevation="elevation"
    :width="width"
    :rounded="rounded"
  >
    <v-list
      :selected="internalModel"
      class="sidebar-icon-list-container"
      density="compact"
      open-strategy="single"
      :rounded="rounded"
      @update:selected="updateSelected"
    >
      <v-list-item
        v-for="(item, index) in convertedItems"
        :key="`sidebar-icon-${index}`"
        active-class="sidebar-icon-menu-active"
        :style="{
          color: item.active ? item.color : '',
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
  </v-navigation-drawer>
  <!-- <v-card
    class="sidebar-icon-container"
    :style="{
      height: height ?? '',
      background: background ?? '',
    }"
    :elevation="elevation"
    :width="width"
    :rounded="rounded"
  >
    
  </v-card> -->
</template>

<script setup>
import { shallowRef, onMounted, computed } from 'vue';

const emit = defineEmits(['update:selected']);

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  width: {
    type: Number,
    default: 64,
  },
  height: {
    type: String,
    default: undefined,
  },
  background: {
    type: String,
    default: 'transparent',
  },
  rounded: {
    type: String,
    default: undefined,
  },
  elevation: {
    type: [String, Number],
    default: '2',
  },
});

const model = defineModel({ default: undefined });
const internalModel = shallowRef([]);
const stateInternalDrawer = shallowRef(true);

onMounted(() => {
  internalModel.value = [model.value];
});

const convertedItems = computed(() => props.items.map((i) => ({ ...i, active: model.value === i.value })));

function updateSelected(values) {
  internalModel.value = values;
  const valueReceived = values?.[0];
  model.value = valueReceived;
  emit('update:selected', valueReceived);
}
</script>

<style scoped>
.sidebar-icon-container {
  max-height: 100%;
  height: 100%;
  padding: 4px 0;
}
.sidebar-icon-list-container {
  height: 100%;
  padding: 0 4px;
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
</style>
