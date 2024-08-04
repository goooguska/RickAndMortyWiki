<script setup lang="ts">
import type { IEpisode } from '@/interfaces/IEpisode'

defineProps<{ episode: IEpisode }>()
</script>

<template>
  <router-link :to="'/episodes/' + episode.id">
    <div class="flex items-center gap-2 rounded-lg bg-red-200">
      <p>{{ episode.name }}</p>
    </div>
  </router-link>
</template>

<style scoped></style>
