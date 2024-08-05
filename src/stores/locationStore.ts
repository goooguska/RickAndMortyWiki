import type { ILocation } from '@/interfaces/ILocation'
import { useItemsFromAPI } from '@/services/itemsFromAPI'
import { useMoreItemsFromAPI } from '@/services/moreItemsFromAPI'
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
    locations.value = [...locations.value, ...(data.results as ILocation[])]
  }

  return { locations, getLocationsFromAPI, getMoreLocationsFromAPI }
})
