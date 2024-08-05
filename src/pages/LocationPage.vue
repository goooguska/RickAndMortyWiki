<script setup lang="ts">
import LocationCard from '@/components/LocationCard.vue'
import { useLocationStore } from '@/stores/locationStore'
import { useIntersectionObserver } from '@/utils/intersectionObserver'
import { onMounted, ref } from 'vue'
const locationStore = useLocationStore()
const observer = ref<HTMLDivElement | null>(null)
onMounted(async () => {
  useIntersectionObserver(locationStore.getMoreLocationsFromAPI, observer.value)
})
</script>

<template>
  <div>
    <h2 class="text-center my-10">Локации</h2>
    <template v-if="locationStore.locations">
      <ul class="max-w-[1300px] flex flex-col mx-auto my-0 gap-y-2.5">
        <li v-for="location in locationStore.locations" :key="location.id">
          <LocationCard :location />
        </li>
      </ul>
      <div ref="observer" class="observer"></div>
    </template>

    <template v-else>Данных нет</template>
  </div>
</template>

<style scoped></style>
