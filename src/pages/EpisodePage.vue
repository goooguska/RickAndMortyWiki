<script setup lang="ts">
import EpisodeCard from '@/components/EpisodeCard.vue'
import { useEpisodeStore } from '@/stores/episodeStore'
import { onMounted } from 'vue'
const episodeStore = useEpisodeStore()
onMounted(async () => {
  episodeStore.getEpisodesFromAPI()
})
</script>

<template>
  <div>
    <h2 class="text-center my-10">Эпизоды</h2>
    <template v-if="episodeStore.episodes">
      <ul class="flex flex-col gap-2">
        <li v-for="episode in episodeStore.episodes" :key="episode.id">
          <EpisodeCard :episode />
        </li>
      </ul>
    </template>
    <template v-else>Данных нет</template>
  </div>
</template>

<style scoped></style>
