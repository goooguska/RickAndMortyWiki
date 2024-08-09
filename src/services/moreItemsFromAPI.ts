import type { unionType } from '@/interfaces/unionType'

import axios from 'axios'
type unionTypeFromAPI = {
  info: {
    count: number
    next: null | string
    pages: number
    prev: null | string
  }
  results: [unionType]
}

export async function useMoreItemsFromAPI(
  nameQuery: string,
  pageNumber: number
): Promise<unionTypeFromAPI> {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/${nameQuery}?page=${pageNumber}`
  )
  return data
}
