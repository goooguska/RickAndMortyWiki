import type { ILocation } from '@/interfaces/ILocation'
import { useMoreItemsFromAPI } from '@/services/moreItemsFromAPI'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
export const useLocationStore = defineStore('locationStore', () => {
  const locations: Ref<ILocation[]> = ref([])
  const pageNumber = ref(0)

  const locationsFromLocalStorage = localStorage.getItem('locations')
  if (locationsFromLocalStorage !== null) {
    const parsedLocationsFromLocalStorage = JSON.parse(locationsFromLocalStorage)
    locations.value = parsedLocationsFromLocalStorage
  }

  async function getMoreLocationsFromAPI() {
    pageNumber.value += 1
    const data = await useMoreItemsFromAPI('location', pageNumber.value)
    locations.value = [...locations.value, ...(data.results as ILocation[])]
    localStorage.setItem('locations', JSON.stringify(locations.value))
  }

  return { locations, getMoreLocationsFromAPI }
})
