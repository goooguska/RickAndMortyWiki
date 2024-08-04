<script setup lang="ts">
import HeaderTemplate from './templates/HeaderTemplate.vue'
</script>

<template>
  <div class="container px-2.5">
    <HeaderTemplate />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped></style>
