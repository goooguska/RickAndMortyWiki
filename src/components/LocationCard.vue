<script setup lang="ts">
import type { ILocation } from '@/interfaces/ILocation'

defineProps<{ location: ILocation }>()
</script>

<template>
  <router-link :to="'/locations/' + location.id">
    <ul class="items-center p-3 gap-2 rounded-lg border-2 border-primary border-solid">
      <li class="text-primary">
        <p>Название:</p>
        <p>{{ location.name }}</p>
      </li>
      <li class="text-primary">
        <p>Тип:</p>
        <p>{{ location.type }}</p>
      </li>
    </ul>
  </router-link>
</template>

<style scoped>
ul > li {
  @apply flex gap-2 justify-center;
}
ul:hover {
  @apply border-secondary ease-in-out duration-300;
}
ul:hover > li {
  @apply text-secondary ease-in-out duration-300;
}
</style>
