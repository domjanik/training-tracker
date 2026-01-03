<script lang="ts" setup>
import { CalendarDate, type DateValue } from '@internationalized/date'
const {initialDate} = defineProps<{
  initialDate: Date
}>();
const emits = defineEmits<{
  (e: 'dateUpdated', value: DateValue): void
}>();

const modelValue = shallowRef(new CalendarDate(initialDate.getFullYear(), initialDate.getMonth() + 1, initialDate.getDate()))
function getColorByDate(date: Date) {
  const isWeekend = date.getDay() % 6 == 0
  const isDayMeeting = date.getDay() % 3 == 0

  if (isWeekend) {
    return undefined
  }

  if (isDayMeeting) {
    return 'error'
  }

  return 'success'
}
</script>
<template>
     <UCalendar 
        @update:modelValue="$emit('dateUpdated', $event)"
        :weekStartsOn="0"
        :weekdayFormat="'short'"
        :initialFocus="true"
        v-model="modelValue">
        <template #day="{ day }">
          <UChip 
            :show="!!getColorByDate(day.toDate('UTC'))" 
            :color="getColorByDate(day.toDate('UTC'))" 
            size="2xs"
            class="cursor-pointer">
            {{ day.day }}
          </UChip>
        </template>
      </UCalendar>
</template>
<style>

</style>