<script setup lang="ts">
import TrainingCalendar from '~/components/TrainingCalendar.vue';
import type { DateValue } from '@internationalized/date'
import TrainingType from '~/features/Training/TrainingType.vue';
const modelValue = ref<Date>(new Date());

const dateUpdated = (newDate: DateValue) => {
  modelValue.value = newDate.toDate('UTC');
}

const getTrainingType = (date: Date) => {
  const day = date.getDay();
  if (day % 3 === 0) {
    return 'running';
  } else if (day % 3 === 1) {
    return 'lifting';
  } else {
    return 'climbing';
  }
}
</script>

<template>
  <div class="flex flex-row">
    <div class="flex-1 p-4 flex flex-col justify-center items-center">
      <TrainingCalendar :initial-date="modelValue" @date-updated="dateUpdated" />
      <UButton class="mt-4 cursor-pointer">Podsumuj tydzień</UButton>
    </div>
    <div class="flex-4 p-4">
      <TrainingType :selected-date="modelValue" :type="getTrainingType(modelValue)" />
    </div>
  </div>
</template>
