<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Header from './components/sections/Header.vue'
  import Footer from './components/sections/Footer.vue'
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>
