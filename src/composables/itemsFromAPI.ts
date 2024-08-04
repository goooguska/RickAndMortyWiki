import axios from 'axios'

export async function useItemsFromAPI(nameQuery: string) {
  const { data } = await axios.get(`https://rickandmortyapi.com/api/${nameQuery}`)
  return data
}
