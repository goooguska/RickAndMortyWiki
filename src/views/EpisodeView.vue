<script setup lang="ts">
import CharacterCard from '@/components/CharacterCard.vue'
import type { ICharacter } from '@/interfaces/ICharacter'
import { useLoadCharactersFromAPI } from '@/services/loadCharactersFromAPI'
import { useEpisodeStore } from '@/stores/episodeStore'
import { useLoadItem } from '@/utils/loadItem'
import { onMounted, ref, type Ref } from 'vue'
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const episode = ref()
const episodeStore = useEpisodeStore()
const residents: Ref<ICharacter[]> = ref([])

onMounted(async () => {
  episode.value = await useLoadItem(props.id, episodeStore.episodes, 'episode')
  residents.value = await useLoadCharactersFromAPI(episode.value.characters)
})
</script>

<template>
  <template v-if="episode">
    <div class="location">
      <div class="text-center flex flex-col gap-2">
        <p>Название: {{ episode.name }}</p>
        <p>Тип: {{ episode.air_date }}</p>
      </div>
      <p class="text-center my-10">Персонажи эпизода</p>

      <ul class="flex-wrap max-w-[1300px] flex justify-between mx-auto my-0 gap-y-2.5">
        <li class="max-w-80" v-for="resident in residents" :key="resident.id">
          <CharacterCard :character="resident" />
        </li>
      </ul></div
  ></template>

  <template v-else> </template>
</template>

<style scoped></style>
