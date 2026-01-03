<script setup lang="ts">
import TrainingTemplate from '../shared/TrainingTemplate.vue';
const { selectedDate } = defineProps<{
  selectedDate: string;
}>();

</script>

<template>
  <TrainingTemplate header="Lifting Training" state="not-started">
    <template #default>
      <p>Strength training details...</p>
    </template>
  </TrainingTemplate>
</template>
