<script setup lang="ts">
import type { ITraining } from '~/models/ITraining';
import TrainingTemplate from '../shared/TrainingTemplate.vue';
const { selectedDate, trainingData } = defineProps<{
  selectedDate: Date;
  trainingData: ITraining;
}>();

</script>

<template>
  <TrainingTemplate header="Running Training" state="not-started">
    <template #default>
      <p>Short run workout details...</p>
    </template>
  </TrainingTemplate>
</template>
