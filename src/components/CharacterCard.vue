<script setup lang="ts">
import type { ICharacter } from '@/interfaces/ICharacter'

defineProps<{ character: ICharacter }>()
</script>

<template>
  <router-link :to="'/character/' + character.id">
    <div class="rounded-lg text-center">
      <img
        class="max-w-[320] w-3/4 rounded-lg mx-auto my-0"
        :src="character.image"
        alt="character-image"
      />
      <p>{{ character.name }}</p>
    </div>
  </router-link>
</template>

<style scoped></style>
