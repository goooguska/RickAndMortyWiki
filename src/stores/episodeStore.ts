import { useItemsFromAPI } from '@/composables/itemsFromAPI'
import { useMoreItemsFromAPI } from '@/composables/moreItemsFromAPI'
import type { IEpisode } from '@/interfaces/IEpisode'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
export const useEpisodeStore = defineStore('episodeStore', () => {
  const episodes: Ref<IEpisode[]> = ref([])
  const pageNumber = ref(0)

  async function getEpisodesFromAPI() {
    const data = await useItemsFromAPI('episode')
    episodes.value = [...data.results]
    console.log(episodes.value)
  }
  async function getMoreEpisodesFromAPI() {
    pageNumber.value += 1
    const data = await useMoreItemsFromAPI('episode', pageNumber.value)
    episodes.value = [...episodes.value, ...data.results]
  }
  return { episodes, getEpisodesFromAPI, getMoreEpisodesFromAPI }
})
