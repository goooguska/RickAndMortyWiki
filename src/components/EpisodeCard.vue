<script setup lang="ts">
import type { IEpisode } from '@/interfaces/IEpisode'

defineProps<{ episode: IEpisode }>()
</script>

<template>
  <router-link :to="'/episodes/' + episode.id">
    <ul class="items-center p-3 gap-2 rounded-lg border-2 border-primary border-solid">
      <li class="text-primary">
        <p>Название:</p>
        <p>{{ episode.name }}</p>
      </li>
      <li class="text-primary">
        <p>Тип:</p>
        <p>{{ episode.air_date }}</p>
      </li>
    </ul>
  </router-link>
</template>

<style scoped>
ul > li {
  @apply flex gap-2 justify-center;
}
ul:hover {
  @apply border-secondary ease-in-out duration-300;
}
ul:hover > li {
  @apply text-secondary ease-in-out duration-300;
}
</style>
