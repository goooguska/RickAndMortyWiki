import type { unionType } from '@/interfaces/unionType'
import { useFetchItem } from '@/services/fetchItem'
import { ref } from 'vue'
import { useItemByID } from './itemByID'

const item = ref()
export async function useLoadItem(id: string, items?: unionType[], nameQuery?: string) {
  item.value = useItemByID(id, items)
  if (item.value == null) {
    item.value = useFetchItem(id, nameQuery)
  }
  return item.value
}
