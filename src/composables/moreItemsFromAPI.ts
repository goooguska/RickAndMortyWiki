import type { ICharacter } from '@/interfaces/ICharacter'
import type { IEpisode } from '@/interfaces/IEpisode'
import type { ILocation } from '@/interfaces/ILocation'

import axios from 'axios'
type unionTypeFromAPI = {
  info: {
    count: number
    next: null | string
    pages: number
    prev: null | string
  }
  results: [ICharacter | ILocation | IEpisode]
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
