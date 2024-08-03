<script setup lang="ts">
import CharacterCard from '@/components/CharacterCard.vue'
import { useCharacterStore } from '@/stores/characterStore'
import { onMounted } from 'vue'
const characterStore = useCharacterStore()
onMounted(async () => {
  characterStore.getCharactersFromAPI()
})
</script>

<template>
  <div>
    <h2 class="text-center my-10">Персонажи</h2>
    <template v-if="characterStore.characters">
      <ul class="flex flex-col gap-2">
        <li v-for="character in characterStore.characters" :key="character.id">
          <CharacterCard :character />
        </li>
      </ul>
    </template>
    <template v-else>Данных нет</template>
  </div>
</template>

<style scoped></style>
