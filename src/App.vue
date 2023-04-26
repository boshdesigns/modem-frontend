<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Header from '@/components/sections/Header.vue'
  import Footer from '@/components/sections/Footer.vue'
</script>

<template>
  <Header />
  <main class="base-content-container">
    <RouterView />
  </main>
  <Footer />
</template>
