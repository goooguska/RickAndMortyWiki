<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useCharacterStore } from './stores/characterStore'
import HeaderTemplate from './templates/HeaderTemplate.vue'
const observer = ref<HTMLDivElement | null>()
const characterStore = useCharacterStore()

onMounted(async () => {
  const options = {
    rootMargin: '0px',
    threshold: 1.0
  }
  const callback = async (entries, obs) => {
    if (entries[0].isIntersecting) {
      console.log('есть')
      // characterStore.getMoreCharactersFromAPI()
    }
  }
  const obs = new IntersectionObserver(callback, options)
  obs.observe(observer.value)
})
</script>

<template>
  <div class="container">
    <HeaderTemplate />
    <main>
      <router-view></router-view>
      <div ref="observer" class="observer"></div>
    </main>
  </div>
</template>

<style scoped>
.observer {
  height: 30px;
  background-color: aqua;
}
</style>
