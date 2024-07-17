<template>
  <v-btn
    :size="calculatedSize"
    :variant="variant"
    :color="color"
    :to="to"
    @click="emit('click')"
  >
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script setup>
import { computed } from "vue";
import { useDisplay } from "vuetify";
const emit = defineEmits(["click"]);

const { name } = useDisplay();

const props = defineProps({
  size: {
    type: String,
    default: undefined,
  },
  variant: {
    type: String,
    default: "text",
  },
  color: {
    type: String,
    default: "secondary",
  },
  icon: {
    type: String,
    default: "mdi-eye",
  },
  to: {
    type: String,
    default: undefined,
  },
});
const calculatedSize = computed(() => {
  if (props.size !== undefined) {
    return props.size;
  }
  let result = "small";
  switch (name.value) {
    case "xs":
      result = "x-small";
      break;
    case "sm":
      result = "x-small";
      break;
    case "md":
      result = "small";
      break;
    case "lg":
      result = "small";
      break;
    case "xl":
      result = "default";
      break;
    case "xxl":
      result = "large";
      break;
  }
  return result;
});
</script>
