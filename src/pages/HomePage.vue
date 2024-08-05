<script setup lang="ts">
import CharacterCard from '@/components/CharacterCard.vue'
import { useCharacterStore } from '@/stores/characterStore'
import { useIntersectionObserver } from '@/utils/intersectionObserver'
import { onMounted, ref } from 'vue'
const characterStore = useCharacterStore()
const observer = ref<HTMLDivElement | null>(null)
onMounted(() => {
  useIntersectionObserver(characterStore.getMoreCharactersFromAPI, observer.value)
})
</script>

<template>
  <div>
    <h2 class="text-center my-10">Персонажи</h2>
    <template v-if="characterStore.characters">
      <ul class="flex-wrap max-w-[1300px] flex justify-between mx-auto my-0 gap-y-2.5">
        <li class="max-w-80" v-for="character in characterStore.characters" :key="character.id">
          <CharacterCard :character />
        </li>
      </ul>
      <div ref="observer" class="observer"></div>
    </template>

    <template v-else>Данных нет</template>
  </div>
</template>

<style scoped></style>
