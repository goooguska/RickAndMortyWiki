<script setup lang="ts">
import { useCharacterStore } from '@/stores/characterStore'

const characterStore = useCharacterStore()
function a() {
  characterStore.getCharactersFormAPI()
}
</script>

<template>
  <div>
    <h2>Персонажи</h2>

    <button @click="a">adadad</button>
  </div>
</template>
