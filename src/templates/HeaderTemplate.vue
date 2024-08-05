<script setup lang="ts">
import NavigationBar from '@/components/NavigationBar.vue'
</script>

<template>
  <header class="sticky top-0 py-7 bg-white">
    <router-link to="/">
      <div class="logo flex items-center gap-2 justify-center">
        <img src="../assets/icon.svg" alt="Иконка" />
        <h1 class="text-base sm:text-xl md:text-2xl xl:text-3xl">RickAndMortyWiki</h1>
      </div>
    </router-link>

    <NavigationBar />
  </header>
</template>

<style scoped></style>
