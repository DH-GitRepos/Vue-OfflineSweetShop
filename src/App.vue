<script setup>
import { RouterLink, RouterView } from 'vue-router';
import PageHeader from './components/page_sections/HeaderPageTop.vue';
import PageFooter from './components/page_sections/PageFooter.vue';
</script>

<template>
 
  <header class="sticky top-0 w-[100vw] z-999">
    <PageHeader />
  </header>

  <main class="w-[100vw] z-50">
    <RouterView />
  </main>

  <footer class="w-[100vw] z-50">
    <PageFooter />
  </footer>

</template>

<style scoped>

</style>
