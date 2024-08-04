import axios from 'axios'

export async function useMoreItemsFromAPI(nameQuery: string, pageNumber: number) {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/${nameQuery}?page=${pageNumber}`
  )
  return data
}
