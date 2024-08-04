<script setup lang="ts">
import LocationCard from '@/components/LocationCard.vue'
import { useLocationStore } from '@/stores/locationStore'
import { onMounted } from 'vue'
const locationStore = useLocationStore()
onMounted(async () => {
  locationStore.getLocationsFromAPI()
})
</script>

<template>
  <div>
    <h2 class="text-center my-10">Локации</h2>
    <template v-if="locationStore.locations">
      <ul class="flex flex-col gap-2">
        <li v-for="location in locationStore.locations" :key="location.id">
          <LocationCard :location />
        </li>
      </ul>
    </template>
    <template v-else>Данных нет</template>
  </div>
</template>

<style scoped></style>
