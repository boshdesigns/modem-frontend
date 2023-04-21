<script setup>
  import SiteProductGrid from '../components/SiteProductGrid.vue';
</script>

<template>
 <main class="modem-site-container">
    <h1 class="page__heading">Shop</h1>
    <div class="shop-page__catgories-dropdown">
      <div class="catgories-dropdown">
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

<style scoped>
  .page__heading {
    font-size: 25px;
    text-align: center;
    margin: 30px 0 10px;
    text-transform: uppercase;
  }

  @media only screen and (min-width: 768px) {
    .page__heading {
      font-size: 45px;
      margin: 60px 0 10px;
    }
  }
  .shop-page__catgories-dropdown {
    width: 100%;
    margin: 20px 0;
  }

  .catgories-dropdown {
    position: relative;
    width: 100%;
    max-width: 240px;
  }
  .catgories-dropdown select {
    width: 100%;
    padding: 5px 35px 5px 5px;
    font-size: 16px;
    border: 1px solid #ccc;
    height: 40px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    text-transform: uppercase;
    position: relative;
    z-index: 1;
  }
  
  .catgories-dropdown::after {
    content: "";
    height: 13px;
    width: 13px;
    border-right: 1px #000 solid;
    border-bottom: 1px #000 solid;
    position: absolute;
    right: 10px;
    top: 38%;
    transform: translateY(-50%) rotate(45deg);
    z-index: 100;
  }

  @media (min-width: 1024px) {
   
  }
</style>
