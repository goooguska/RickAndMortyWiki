<script setup lang="ts">
import EpisodeCard from '@/components/EpisodeCard.vue'
import { useEpisodeStore } from '@/stores/episodeStore'
import { useIntersectionObserver } from '@/utils/intersectionObserver'
import { onMounted, ref } from 'vue'
const episodeStore = useEpisodeStore()
const observer = ref<HTMLDivElement | null>(null)
onMounted(async () => {
  useIntersectionObserver(episodeStore.getMoreEpisodesFromAPI, observer.value)
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
      <div ref="observer" class="observer"></div>
    </template>
    <template v-else>Данных нет</template>
  </div>
</template>

<style scoped></style>
