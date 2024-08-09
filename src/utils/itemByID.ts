import type { unionType } from '@/interfaces/unionType'

export function useItemByID(id: string, items: unionType[] | undefined) {
  if (items) return items.find((el) => el.id === parseInt(id, 10))
}
