import { ref } from 'vue'

export function useItemByID(id: string, items) {
  const item = ref()
  item.value = items.find((el) => el.id === parseInt(id, 10))
  return item.value
}
