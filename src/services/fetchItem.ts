import type { unionType } from '@/interfaces/unionType'

import axios, { type AxiosResponse } from 'axios'
export async function useFetchItem(id: string, nameQuery: string | undefined) {
  const { data }: AxiosResponse<unionType> = await axios.get(
    `https://rickandmortyapi.com/api/${nameQuery}/${id}`
  )

  return data
}
