import type { IEpisode } from '@/interfaces/IEpisode'
import { useMoreItemsFromAPI } from '@/services/moreItemsFromAPI'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
export const useEpisodeStore = defineStore('episodeStore', () => {
  const episodes: Ref<IEpisode[]> = ref([])
  const pageNumber = ref(0)

  const episodesFromLocalStorage = localStorage.getItem('episodes')
  if (episodesFromLocalStorage !== null) {
    const parsedEpisodesFromLocalStorage = JSON.parse(episodesFromLocalStorage)
    episodes.value = parsedEpisodesFromLocalStorage
  }

  async function getMoreEpisodesFromAPI() {
    pageNumber.value += 1
    const data = await useMoreItemsFromAPI('episode', pageNumber.value)
    episodes.value = [...episodes.value, ...(data.results as IEpisode[])]
    localStorage.setItem('episodes', JSON.stringify(episodes.value))
  }
  return { episodes, getMoreEpisodesFromAPI }
})
