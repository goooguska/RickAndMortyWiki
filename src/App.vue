<script setup lang="ts">
import { onMounted } from 'vue'
import { useCharacterStore } from './stores/characterStore'
import HeaderTemplate from './templates/HeaderTemplate.vue'
const characterStore = useCharacterStore()
onMounted(async () => {})
</script>

<template>
  <div class="container">
    <HeaderTemplate />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.observer {
  height: 30px;
  background-color: aqua;
}
</style>
