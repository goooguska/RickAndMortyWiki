import type { ICharacter } from '@/interfaces/ICharacter'
import axios from 'axios'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
export const useCharacterStore = defineStore('characterStore', () => {
  const characters: Ref<ICharacter[]> = ref([])
  const pageNumber = ref(0)
  async function getCharactersFromAPI() {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character`)
    characters.value = [...data.results]
  }
  async function getMoreCharactersFromAPI() {
    pageNumber.value += 1
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${pageNumber.value}`
    )
    characters.value = [...characters.value, ...data.results]
    console.log(characters.value)
  }
  return { characters, getCharactersFromAPI, getMoreCharactersFromAPI }
})
