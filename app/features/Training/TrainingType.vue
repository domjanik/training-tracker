<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import RunningTraining from './running/RunningTraining.vue'
import LiftingTraining from './lifting/LiftingTraining.vue'
import ClimbingTraining from './climbing/ClimbingTraining.vue'

const props = defineProps<{
  type: 'running' | 'lifting' | 'climbing'
  selectedDate?: Date
}>()

const { type } = toRefs(props) // zachowuje reaktywność

const trainingComponent = computed(() => {
  switch (type.value) {
    case 'running':
      return RunningTraining
    case 'lifting':
      return LiftingTraining
    case 'climbing':
      return ClimbingTraining
    default:
      return null
  }
})

const training = computed(() => {
    switch(type.value) {
        case 'running':
            return {
  "session_id": "run-2026-01-08",
  "date": "2026-01-08",
  "type": "running",
  "focus": "easy_aerobic",
  "session_goal": "Budowa bazy tlenowej bez przeciążania łydki",
  "intensity": {
    "target_rpe_range": [5, 6],
    "pace_guidance": "konwersacyjny",
    "heart_rate_zone": "Z2"
  },
  "structure": [
    {
      "segment": "warmup",
      "duration_minutes": 10,
      "notes": "lekki trucht + mobilizacja łydki"
    },
    {
      "segment": "main",
      "duration_minutes": 30,
      "notes": "utrzymać równy rytm, bez przyspieszeń"
    },
    {
      "segment": "cooldown",
      "duration_minutes": 5,
      "notes": "schłodzenie + rozciąganie łydki"
    }
  ],
  "risk_watch": [
    "sztywność soleusa",
    "RPE >6"
  ],
  "abort_conditions": [
    "ból łydki",
    "RPE >7 utrzymujące się >5 minut"
  ],
  "notes": [
    "Jeśli RPE rośnie, skrócić część główną o 5–10 minut"
  ]
};
        case 'lifting':
            return {
  "session_id": "strength-2026-01-06",
  "date": "2026-01-06",
  "type": "strength",
  "focus": "upper_body",
  "session_goal": "Utrzymanie siły z kontrolowaną intensywnością (RPE 7–8)",
  "global_intensity": {
    "target_rpe_range": [7, 8],
    "autoregulation": true
  },
  "exercises": [
    {
      "exercise": "bench_press",
      "sets": 4,
      "reps": 6,
      "load_guidance": "ostatni trening +0–2.5kg jeśli RPE <=7.5",
      "target_rpe": 8,
      "rest_seconds": 180
    },
    {
      "exercise": "pull_ups_weighted",
      "sets": 4,
      "reps": 5,
      "target_rpe": 7.5,
      "rest_seconds": 150
    },
    {
      "exercise": "overhead_press",
      "sets": 3,
      "reps": 6,
      "target_rpe": 7,
      "rest_seconds": 150
    },
    {
      "exercise": "face_pulls",
      "sets": 3,
      "reps": 12,
      "target_rpe": 6,
      "rest_seconds": 90
    }
  ],
  "stop_conditions": [
    "RPE >=9",
    "RIR <=0 w dwóch seriach z rzędu"
  ],
  "notes": [
    "Priorytet: technika i kontrola",
    "Nie dokładać objętości jeśli zmęczenie narasta szybciej niż zwykle"
  ]
};
        case 'climbing':
            return {
  "session_id": "climb-2026-01-09",
  "date": "2026-01-09",
  "type": "climbing",
  "focus": "volume_technique",
  "session_goal": "Budowa objętości z naciskiem na jakość ruchu",
  "intensity": {
    "difficulty_range": "60–75% max",
    "rpe_target": [6, 7]
  },
  "structure": [
    {
      "block": "warmup",
      "description": "łatwe drogi + aktywacja",
      "duration_minutes": 15
    },
    {
      "block": "volume_block",
      "description": "drogi poniżej maksymalnego poziomu",
      "routes": {
        "target_count": 12,
        "attempts_per_route": "1–2"
      }
    },
    {
      "block": "technique_focus",
      "description": "kontrola stóp i precyzja",
      "routes": {
        "target_count": 4,
        "constraints": ["no_regrip", "silent_feet"]
      }
    }
  ],
  "quality_checks": [
    "utrata precyzji stóp",
    "spadek kontroli ciała"
  ],
  "stop_conditions": [
    "spadek jakości ruchu w 2 kolejnych drogach",
    "RPE >8"
  ],
  "notes": [
    "Nie dokładać trudności kosztem jakości",
    "Zakończyć sesję przy pierwszych oznakach chaosu ruchowego"
  ]
}

        default:
            return null;
    }
})
</script>

<template>
  <div class="p-8">
    <component :is="trainingComponent" :selected-date="props.selectedDate" :training="training" />
  </div>
</template>