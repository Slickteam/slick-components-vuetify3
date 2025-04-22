<template>
  <v-navigation-drawer
    v-model="drawerModel"
    class="sidebar-icon-container"
    :style="{
      height: height ? `${height}px` : '',
      background: background ?? '',
      border: showLeftBorder ? '' : 'none',
    }"
    location="right"
    permanent
    :elevation="elevation"
    :width="width"
  >
    <slot>
      <v-btn
        icon="mdi-dock-right"
        class="sidebar-icon-top-button"
        variant="text"
        size="small"
        elevation="0"
        rounded="0"
        @click="drawerModel = !drawerModel"
      ></v-btn>
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
            color: item.active ? `${item.color ?? 'var(--v-primary-base)'} !important` : '#CCCCCC',
          }"
          :active="item.active"
          class="sidebar-icon-item-container"
          :rounded="rounded"
          :value="item.value"
        >
          <div
            class="sidebar-icon-menu-item-icon"
            :style="{
              'border-color': item.active ? (item.color ?? 'orange') : '#CCCCCC',
            }"
          >
            <template v-if="item.count !== undefined">
              <v-badge
                :color="item.active ? (item.color ?? 'primary') : '#CCCCCC'"
                :content="item.count > 9 ? '9+' : item.count"
                bordered
                :offset-x="item.count > 9 ? 2 : -4"
                :offset-y="-4"
              >
                <v-icon size="24" :color="item.active ? (item.color ?? 'primary') : '#CCCCCC'">{{ item.icon }}</v-icon>
              </v-badge>
            </template>
            <template v-else>
              <v-icon size="24" :color="item.active ? (item.color ?? 'primary') : '#CCCCCC'">{{ item.icon }}</v-icon>
            </template>
          </div>
          <p
            class="sidebar-icon-menu-item-text"
            align="center"
            :style="{
              color: item.active ? (item.color ?? 'orange') : '#CCCCCC',
            }"
          >
            {{ item.text }}
          </p>
        </v-list-item>
      </v-list>
    </slot>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { computed, onMounted, shallowRef, watch } from 'vue';

const selectedModel = defineModel<string | undefined>('selected', { default: undefined });
const drawerModel = defineModel<boolean>('drawer', { default: false });

const props = withDefaults(
  defineProps<{
    items?: { icon: string; text: string; color?: string; value: string; count?: number }[];
    width?: number;
    height?: number;
    background?: string;
    showLeftBorder?: boolean;
    rounded?: string | number | boolean;
    elevation?: string | number;
  }>(),
  {
    items: () => [],
    width: 65,
    rounded: 'sm',
    elevation: '2',
    showLeftBorder: true,
  },
);

const internalModel = shallowRef<string[]>([]);

onMounted(() => {
  if (selectedModel.value) {
    internalModel.value = [selectedModel.value];
  } else {
    internalModel.value = [];
  }
});

watch(selectedModel, () => {
  if (selectedModel.value) {
    internalModel.value = [selectedModel.value];
  } else {
    internalModel.value = [];
  }
});

const convertedItems = computed(() => props.items.map((i) => ({ ...i, active: selectedModel.value === i.value })));

function updateSelected(values: string[]) {
  internalModel.value = values;
  selectedModel.value = values?.[0];
}
</script>

<style scoped>
.sidebar-icon-container {
  max-height: 100%;
  height: 100%;
  padding: 4px 4px 8px 4px;
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
  padding: 4px 4px !important;
}
.sidebar-icon-menu-item-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 48px;
  height: 48px;
  border: solid #cccccc 3px;
  border-radius: 50%;
}
.sidebar-icon-menu-item-text {
  height: 19px;
  line-height: 19px;
  font-size: 10px;
  font-weight: 700;
  margin-top: 2px;
  overflow: hidden;
  white-space: nowrap;
}
:deep(::-webkit-scrollbar) {
  width: 0;
  background: transparent;
}
.sidebar-icon-top-button {
  margin: 10px 8px 14px 8px;
  color: #cccccc;
}
</style>
