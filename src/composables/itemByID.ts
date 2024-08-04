import type { ICharacter } from '@/interfaces/ICharacter'
import type { IEpisode } from '@/interfaces/IEpisode'
import type { ILocation } from '@/interfaces/ILocation'
import { ref } from 'vue'
type unionType = ICharacter | ILocation | IEpisode
export function useItemByID(id: string, items: unionType[]) {
  const item = ref()
  item.value = items.find((el) => el.id === parseInt(id, 10))
  return item.value
}
