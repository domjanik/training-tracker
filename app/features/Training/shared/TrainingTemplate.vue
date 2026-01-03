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
        <UButton v-else-if="state === 'in-progress'">Zapisz trening</UButton>
    </div>
    </template>
  </UCard>
</template>
