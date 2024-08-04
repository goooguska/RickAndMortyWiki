<script setup lang="ts">
import { useItemByID } from '@/composables/itemByID'
import { useCharacterStore } from '@/stores/characterStore'
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
    <div>
      <img :src="character.image" alt="character-image" />
    </div>
    <div>
      <p>Имя{{ character.name }}</p>
      <p>Статус{{ character.status }}</p>
      <p>Имя{{ character.species }}</p>
      <p>Тип {{ character.type }}</p>
      <div>
        <p>Происхождение</p>
        <p>Название{{ character.origin.name }}</p>
      </div>
      <div>
        <p>Локация</p>
        <p>Название{{ character.location.name }}</p>
      </div>
    </div>
  </template>
  <template v-else>Загрузка... </template>
</template>

<style scoped></style>
