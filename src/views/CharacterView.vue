<script setup lang="ts">
import { useCharacterStore } from '@/stores/characterStore'
import { useItemByID } from '@/utils/itemByID'
import { onMounted, ref } from 'vue'
const characterStore = useCharacterStore()
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
const character = ref()
onMounted(() => {
  character.value = useItemByID(props.id, characterStore.characters)
})
</script>

<template>
  <template v-if="character">
    <article class="xs:flex gap-2 items-center justify-center mt-2">
      <img class="max-w-80 w-2/4 rounded-lg" :src="character.image" alt="character-image" />
      <ul class="list-characters">
        <li>
          <p>Имя:</p>
          <p>{{ character.name }}</p>
        </li>
        <li>
          <p>Статус:</p>
          <p>{{ character.status }}</p>
        </li>
        <li>
          <p>species:</p>
          <p>{{ character.species }}</p>
        </li>
        <li v-if="character.type">
          <p>Тип:</p>
          <p>{{ character.type }}</p>
        </li>
        <li>
          <p>Пол:</p>
          <p>{{ character.gender }}</p>
        </li>
        <li>
          <p>Планета:</p>
          <p>{{ character.location.name }}</p>
        </li>
      </ul>
    </article>
  </template>
  <template v-else>Загрузка... </template>
</template>

<style scoped>
img {
  @apply max-xs:mx-auto;
}
.list-characters {
  margin-top: 5px;
}
.list-characters > li {
  @apply flex max-xs:justify-center max-xs:gap-2;
}
</style>
