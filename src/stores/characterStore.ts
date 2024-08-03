import type { ICharacter } from '@/interfaces/ICharacter'
import axios from 'axios'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
export const useCharacterStore = defineStore('characterStore', () => {
  const characters: Ref<ICharacter[]> = ref([])
  async function getCharactersFormAPI() {
    const { data } = await axios.get('https://rickandmortyapi.com/api/character')
    characters.value.push(data.results)
    console.log(characters.value)
  }
  return { characters, getCharactersFormAPI }
})
