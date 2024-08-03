import { ref } from 'vue'

export function useCharacterByID(id: string, items) {
  const item = ref()
  item.value = items.find((item) => item.id === parseInt(id, 10))
  return item.value
}
