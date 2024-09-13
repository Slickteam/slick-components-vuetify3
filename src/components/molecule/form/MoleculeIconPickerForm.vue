<template>
  <v-autocomplete
    label="Icône"
    class="mt-4"
    :items="icons"
    @update:model-value="onUpdateInternalValue"
    v-model="internalModel"
    :custom-filter="filter"
    :prepend-inner-icon="modelValue"
    item-title="label"
    :item-value="(item) => item"
  >
    <template v-slot:item="{ item: { raw: item }, props }">
      <v-list-item v-bind="props" :title="null"> <v-icon :icon="`mdi-${item.icon}`" /> {{ item.label }}</v-list-item>
    </template>
  </v-autocomplete>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';

const internalModel = ref(undefined);
const model = defineModel({ type: String, default: undefined });
const emit = defineEmits(['update:modelValue']);

const icons = ref([
  { icon: 'account', label: 'Utilisateur' },
  { icon: 'lightning-bolt', label: 'Éclair' },
  { icon: 'air-humidifier', label: "Humidificateur d'air" },
  { icon: 'map-marker', label: 'Marqueur' },
  { icon: 'view-dashboard', label: 'Tableau de bord' },
  { icon: 'home-lightning-bolt', label: 'Éclair - Maison' },
  { icon: 'battery-medium', label: 'Batterie' },
  { icon: 'wind-turbine', label: 'Éolienne' },
  { icon: 'solar-panel', label: 'Panneau solaire' },
  { icon: 'transmission-tower', label: 'Ligne électrique' },
  { icon: 'power', label: 'Power' },
  { icon: 'power-plug', label: 'Prise électrique' },
  { icon: 'power-socket-fr', label: 'Prise électrique' },
  { icon: 'radiator', label: 'Radiateur' },
  { icon: 'radiator-off', label: 'Radiateur coupé' },
  { icon: 'thermometer', label: 'Thermomètre' },
  { icon: 'thermometer-plus', label: 'Thermomètre - plus' },
  { icon: 'thermometer-minus', label: 'Thermomètre - moins' },
  { icon: 'thermometer-probe', label: 'Sonde' },
  { icon: 'home', label: 'Maison' },
  { icon: 'office-building', label: 'Bureau' },
  { icon: 'lightbulb', label: 'Ampoule' },
  { icon: 'lightbulb-cfl', label: "Ampoule à économie d'énergie" },
  { icon: 'light-switch', label: 'Interrupteur' },
  { icon: 'help-circle-outline', label: "Point d'interrogation" },
  { icon: 'meter-electric-outline', label: 'Compteur électrique' },
  { icon: 'smoke-detector', label: 'Détecteur de fumée' },
  { icon: 'motion-sensor', label: 'Détecteur de mouvement' },
  { icon: 'chart-line', label: 'Graphique' },
]);

onMounted(() => {
  updateValueInternal(model.value);
});

watch(
  () => model.value,
  (value) => {
    updateValueInternal(value);
  },
);

function onUpdateInternalValue(value) {
  emit('update:modelValue', `mdi-${value.icon}`);
}
function updateValueInternal(value) {
  internalModel.value = icons.value.find((icon) => `mdi-${icon.icon}` === value);
}

function filter(_title, query, { raw: item }) {
  return (
    item.icon.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || item.label.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );
}
</script>

<style scoped>
.v-input :deep(.v-input__append) {
  padding-top: 8px;
  margin-left: 4px;
}
.v-input :deep(.v-input__prepend) {
  margin-right: 8px;
}
</style>
