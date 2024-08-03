<script setup lang="ts">
import type { ICharacter } from '@/interfaces/ICharacter'

defineProps<{ character: ICharacter }>()
</script>

<template>
  <router-link :to="'/character/' + character.id">
    <div class="flex items-center gap-2 rounded-lg bg-red-200">
      <img class="w-1/5 rounded-lg" :src="character.image" alt="character-image" />
      <p>{{ character.name }}</p>
    </div>
  </router-link>
</template>

<style scoped></style>
