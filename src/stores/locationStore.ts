import { useItemsFromAPI } from '@/composables/itemsFromAPI'
import type { ILocation } from '@/interfaces/ILocation'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
export const useLocationStore = defineStore('locationStore', () => {
  const locations: Ref<ILocation[]> = ref([])

  async function getLocationsFromAPI() {
    const data = await useItemsFromAPI('location')
    locations.value = [...data.results]
    console.log(locations.value)
  }

  return { locations, getLocationsFromAPI }
})
