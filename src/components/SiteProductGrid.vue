<script setup>
  import ProductCard from '@/components/cards/ProductCard.vue';
</script>

<template>
   <section class="product-card__grid">
      <ProductCard v-for="(index) in [1, 2, 3]" :key="index" />
    </section>
</template>
