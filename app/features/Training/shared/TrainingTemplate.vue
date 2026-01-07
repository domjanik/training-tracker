<script setup lang="ts">
const {header} = defineProps<{
    header: string;
    state: 'completed' | 'in-progress' | 'not-started';
}>()

</script>

<template>
    <UCard>
    <template #header>
      <div>{{ header }}</div>
    </template>

    <slot />

    <template #footer>
      <div>
        <UButton v-if="state === 'not-started'">Rozpocznij trening</UButton>
        <div v-else-if="state === 'in-progress'" class="flex flex-col">
            <UInput label="Notatki do treningu" type="textarea" rows="3" />
            <UButton >Zapisz trening</UButton>
        </div>
        
        <div v-else-if="state === 'completed'">
            <p>Trening zakończony. Świetna robota!</p>
        </div>
    </div>
    </template>
  </UCard>
</template>
