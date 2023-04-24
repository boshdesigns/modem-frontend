<script setup>
  import Navgiation from '@/components/sections/Navigation.vue';
</script>

<template>
  <header>
    <div class="modem-site-container">
      <div class="logo-container">
        <a href="/">
          <img alt="Modem logo" class="logo-image" src="@/assets/logo.png" width="268" height="49" />
        </a>
      </div>
      <Navgiation />
    </div>
  </header>
  <div class="site-banner__container">
    <img alt="Modem Site Banner" class="site-banner" src="@/assets/header_background.jpg" width="1280" height="600" />
  </div>
</template>