<script setup lang="ts">
import { onMounted, ref } from 'vue'
import FooterTemplate from './templates/FooterTemplate.vue'
import HeaderTemplate from './templates/HeaderTemplate.vue'
</script>

<template>
  <div class="container px-2.5 mx-auto my-0">
    <HeaderTemplate />
    <main>
      <router-view></router-view>
    </main>
    <FooterTemplate />
  </div>
</template>

<style scoped>
.anchor-top {
  position: sticky;
  top: 20px;
}
</style>
