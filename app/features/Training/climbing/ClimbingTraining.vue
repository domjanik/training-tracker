<script setup lang="ts">
import type { ITraining } from '~/models/ITraining';
import TrainingTemplate from '../shared/TrainingTemplate.vue';
const { selectedDate, trainingData } = defineProps<{
  selectedDate: Date;
  trainingData: ITraining
}>();

</script>

<template>
  <TrainingTemplate header="Climbing Training" state="not-started">
    <template #default>
      <p>Climbing training details...</p>
    </template>
  </TrainingTemplate>
</template>
