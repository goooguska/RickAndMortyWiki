import { defineStore } from 'pinia'
export const useMainStore = defineStore('mainStore', () => {
  const MAIN_API = 'https://rickandmortyapi.com/api/'
  return { MAIN_API }
})
