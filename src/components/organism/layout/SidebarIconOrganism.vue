<template>
  <v-navigation-drawer class="pa-2" :width="width" :location="location" permanent>
    <v-list :selected="internalModel" class="pa-0" density="compact" open-strategy="single" nav @update:selected="updateSelected">
      <v-list-item
        v-for="(item, index) in convertedItems"
        :key="`sidebar-icon-${index}`"
        active-class="sidebar-icon-menu-active"
        :active="item.active"
        class="px-1 py-2"
        :value="item.value"
      >
        <div
          class="sidebar-icon-menu-item-icon"
          :style="{
            'border-color': item.active ? item.color : '',
            'background-color': item.active ? `transparentize(${item.color}, 1)` : '',
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
import { shallowRef, onMounted, computed } from 'vue';

const emit = defineEmits(['update:selected']);

const props = defineProps({
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
.sidebar-icon-menu-active .sidebar-icon-menu-item-icon {
  border-width: 2px;
  border-radius: 50%;
  font-weight: 700;
}
.sidebar-icon-menu-active .sidebar-icon-menu-item-text {
  font-weight: 700;
}
</style>
