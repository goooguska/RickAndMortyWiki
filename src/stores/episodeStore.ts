import { useItemsFromAPI } from '@/composables/itemsFromAPI'
import type { IEpisode } from '@/interfaces/IEpisode'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
export const useEpisodeStore = defineStore('episodeStore', () => {
  const episodes: Ref<IEpisode[]> = ref([])

  async function getEpisodesFromAPI() {
    const data = await useItemsFromAPI('episode')
    episodes.value = [...data.results]
    console.log(episodes.value)
  }

  return { episodes, getEpisodesFromAPI }
})
