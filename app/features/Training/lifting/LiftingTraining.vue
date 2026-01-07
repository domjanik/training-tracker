<script setup lang="ts">
import type { ILiftingTraining } from '~/models/ITraining';
import TrainingTemplate from '../shared/TrainingTemplate.vue';
const { selectedDate, trainingData } = defineProps<{
  selectedDate: Date;
  trainingData: ILiftingTraining;
}>();
const formattedDate = computed(() => {
    const date = new Date(trainingData.date);
    return date.toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' });
  });
</script>

<template>
  <TrainingTemplate :header="`Lifting Training (${formattedDate})`" state="not-started">
    <template #default>
      <div>
        <div>Cel : {{ trainingData.session_goal  }}</div>
        <div>Partie : {{ trainingData.focus }}</div>
        <div>Intensywność (RPE): {{ trainingData.global_intensity.target_rpe_range[0] }} - {{ trainingData.global_intensity.target_rpe_range[1] }}</div>
        <div>Ćwiczenia:</div>
        <div>
          <div v-for="exercise in trainingData.exercises" :key="trainingData.session_id + '-' + exercise.exercise">
            {{ exercise }}
          </div>
          <div>
            <div>Przerywamy gdy:
              <div v-for="condition in trainingData.stop_conditions" :key="condition">
                - {{ condition }}
            </div>
          </div>
          </div>
          <div>
            Additional Notes: 
            <div v-for="note in trainingData.notes" :key="note">
              {{ note }}
            </div>
          </div>
        </div>
      </div>
    </template>
  </TrainingTemplate>
</template>