<template>
  <v-card
    class="sidebar-icon-container"
    :style="{
      height: height ?? '',
      background: background ?? '',
    }"
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
        :active-color="item.color"
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
  </v-card>
</template>

<script setup>
import { shallowRef, onMounted, computed } from 'vue';

const emit = defineEmits(['update:selected']);

const props = defineProps({
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

onMounted(() => {
  internalModel.value = [model.value];
});

const convertedItems = computed(() => props.items.map((i) => ({ ...i, active: model.value === i.value })));

function updateSelected(values) {
  internalModel.value = values;
  if (values?.length > 0) {
    model.value = values[0];
  } else {
    model.value = undefined;
  }
}
</script>

<style scoped>
.sidebar-icon-container {
  max-height: 100%;
  height: 100%;
}
.sidebar-icon-list-container {
  height: 100%;
  padding: 8px 4px;
  padding: 0;
  overflow-y: scroll;
  background: transparent;
}
.sidebar-icon-list-container::-webkit-scrollbar {
  display: none;
}
.sidebar-icon-item-container {
  margin: 0 0 2px 0;
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
  font-size: smaller;
}
.sidebar-icon-menu-active .sidebar-icon-menu-item-icon {
  border-width: 2px;
  border-radius: 50%;
}
.sidebar-icon-menu-active .sidebar-icon-menu-item-text {
  font-weight: 700;
  font-size: small;
}
</style>
