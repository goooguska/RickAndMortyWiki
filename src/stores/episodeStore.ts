import type { IEpisode } from '@/interfaces/IEpisode'
import { useItemsFromAPI } from '@/services/itemsFromAPI'
import { useMoreItemsFromAPI } from '@/services/moreItemsFromAPI'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
export const useEpisodeStore = defineStore('episodeStore', () => {
  const episodes: Ref<IEpisode[]> = ref([])
  const pageNumber = ref(0)

  async function getEpisodesFromAPI() {
    const data = await useItemsFromAPI('episode')
    episodes.value = [...data.results]
  }
  async function getMoreEpisodesFromAPI() {
    pageNumber.value += 1
    const data = await useMoreItemsFromAPI('episode', pageNumber.value)
    episodes.value = [...episodes.value, ...(data.results as IEpisode[])]
  }
  return { episodes, getEpisodesFromAPI, getMoreEpisodesFromAPI }
})
