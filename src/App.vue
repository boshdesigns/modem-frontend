<script setup>
  import { RouterView } from 'vue-router'
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

<style>
  /* 
  Can override the default styling like so
  :root {
    --portal-primary-button: #000000 !important;
    --portal-background-color: #999999 !important;
  } */
</style>
