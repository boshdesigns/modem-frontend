<script setup>
  import SiteProductGrid from '../components/SiteProductGrid.vue';
</script>

<template>
 <main class="modem-site-container">
    <h1 class="page__heading">Shop</h1>
    <div class="shop-page__custom-dropdown">
      <div class="custom-dropdownn">
        <select>
          <option value="0">Catgories</option>
          <option value="1">Catgories 1</option>
          <option value="2">Catgories 2</option>
        </select>
      </div>
    </div>
    <SiteProductGrid />
  </main>
</template>