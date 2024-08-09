import type { ICharacter } from '@/interfaces/ICharacter'
import { useMoreItemsFromAPI } from '@/services/moreItemsFromAPI'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
export const useCharacterStore = defineStore('characterStore', () => {
  const pageNumber = ref(0)
  const characters: Ref<ICharacter[]> = ref([])

  const charactersFromLocalStorage = localStorage.getItem('characters')
  if (charactersFromLocalStorage !== null) {
    const parsedCharactersFromLocalStorage = JSON.parse(charactersFromLocalStorage)
    characters.value = parsedCharactersFromLocalStorage
  }

  async function getMoreCharactersFromAPI() {
    pageNumber.value += 1
    const data = await useMoreItemsFromAPI('character', pageNumber.value)
    characters.value = [...characters.value, ...(data.results as ICharacter[])]
    localStorage.setItem('characters', JSON.stringify(characters.value))
  }
  return { characters, getMoreCharactersFromAPI }
})
