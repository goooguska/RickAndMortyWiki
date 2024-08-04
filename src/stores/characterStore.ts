import { useItemsFromAPI } from '@/composables/itemsFromAPI'
import { useMoreItemsFromAPI } from '@/composables/moreItemsFromAPI'
import type { ICharacter } from '@/interfaces/ICharacter'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
export const useCharacterStore = defineStore('characterStore', () => {
  const characters: Ref<ICharacter[]> = ref([])
  const pageNumber = ref(0)

  async function getCharactersFromAPI() {
    const data = await useItemsFromAPI('character')
    characters.value = [...data.results]
  }
  async function getMoreCharactersFromAPI() {
    pageNumber.value += 1
    const data = await useMoreItemsFromAPI('character', pageNumber.value)
    characters.value = [...characters.value, ...data.results]
    console.log(characters.value)
  }
  return { characters, getCharactersFromAPI, getMoreCharactersFromAPI }
})
