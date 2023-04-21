<script setup>
  import SiteProductGrid from './SiteProductGrid.vue'
</script>

<template>
   <h3 class="site-product__heading">Featured Products</h3>
   <SiteProductGrid />
</template>

<style scoped>
  .site-product__heading {
    font-size: 25px;
    text-align: center;
    margin: 30px 0 10px;
    text-transform: uppercase;
  }

  @media only screen and (min-width: 768px) {
    .site-product__heading {
      font-size: 45px;
      margin: 60px 0 10px;
    }
  }

</style>
