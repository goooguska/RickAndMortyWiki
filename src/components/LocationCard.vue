<script setup lang="ts">
import type { ILocation } from '@/interfaces/ILocation'

defineProps<{ location: ILocation }>()
</script>

<template>
  <router-link :to="'/locations/' + location.id">
    <div class="flex items-center gap-2 rounded-lg bg-red-200">
      <p>{{ location.name }}</p>
    </div>
  </router-link>
</template>

<style scoped></style>
