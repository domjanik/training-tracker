<script setup lang="ts">
import TrainingTemplate from '../shared/TrainingTemplate.vue';
const { selectedDate } = defineProps<{
  selectedDate: string;
}>();

</script>

<template>
  <TrainingTemplate header="Climbing Training" state="not-started">
    <template #default>
      <p>Climbing training details...</p>
    </template>
  </TrainingTemplate>
</template>
