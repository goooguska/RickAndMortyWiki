<script setup lang="ts">
import CharacterCard from '@/components/CharacterCard.vue'
import type { ICharacter } from '@/interfaces/ICharacter'
import { useLoadCharactersFromAPI } from '@/services/loadCharactersFromAPI'
import { useLocationStore } from '@/stores/locationStore'
import { useLoadItem } from '@/utils/loadItem'
import { onMounted, ref, type Ref } from 'vue'
const locationStore = useLocationStore()
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
const location = ref()
const residents: Ref<ICharacter[]> = ref([])
onMounted(async () => {
  location.value = await useLoadItem(props.id, locationStore.locations, 'location')
  residents.value = await useLoadCharactersFromAPI(location.value.residents)
})
</script>

<template>
  <template v-if="location">
    <div class="location">
      <div class="text-center flex flex-col gap-2">
        <p>Название: {{ location.name }}</p>
        <p>Тип: {{ location.type }}</p>
        <p>Измерение: {{ location.dimension }}</p>
      </div>
      <p class="text-center my-10">Персонажи локации</p>

      <ul class="flex-wrap max-w-[1300px] flex justify-between mx-auto my-0 gap-y-2.5">
        <li class="max-w-80" v-for="resident in residents" :key="resident.id">
          <CharacterCard :character="resident" />
        </li>
      </ul>
    </div>
  </template>
  <template v-else> </template>
</template>

<style scoped></style>
