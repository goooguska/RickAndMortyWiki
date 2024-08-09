import type { ICharacter } from '@/interfaces/ICharacter'
import axios, { type AxiosResponse } from 'axios'

const residentsFromAPI: ICharacter[] = []
export async function useLoadCharactersFromAPI(residents: ICharacter[]) {
  for (const link of residents) {
    const { data }: AxiosResponse<ICharacter> = await axios.get(`${link}`)
    residentsFromAPI.push(data)
  }
  return residentsFromAPI
}
