import { useItemsFromAPI } from '@/composables/itemsFromAPI'
import { useMoreItemsFromAPI } from '@/composables/moreItemsFromAPI'
import type { ILocation } from '@/interfaces/ILocation'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
export const useLocationStore = defineStore('locationStore', () => {
  const locations: Ref<ILocation[]> = ref([])
  const pageNumber = ref(0)

  async function getLocationsFromAPI() {
    const data = await useItemsFromAPI('location')
    locations.value = [...data.results]
    console.log(locations.value)
  }
  async function getMoreLocationsFromAPI() {
    pageNumber.value += 1
    const data = await useMoreItemsFromAPI('location', pageNumber.value)
    locations.value = [...locations.value, ...data.results]
  }

  return { locations, getLocationsFromAPI, getMoreLocationsFromAPI }
})
