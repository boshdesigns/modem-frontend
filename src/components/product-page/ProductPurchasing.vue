<script setup>
  // import components
  import GenericButton from '@/components/generic/GenericButton.vue';
  
  import { ref } from 'vue';
  const count = ref(0);
</script>

<template>
     <div class="product-page__product-purchasing">
        <div class="product-page__availablity">Availability: <span class="product-page__availablity--in-stock">{{availability}}</span></div>
        <div class="product-page__purchase-group">
          <div class="product-page__counter">
            <input type="number" v-model="count" @input="event => count = event.target.value">
            <div class="product-page__counter__up-arrow" @click="count++">></div>
            <div class="product-page__counter__down-arrow" @click="$event => {count > 0 ? count-- : 0}">></div>
          </div>
          <GenericButton class="product-page__cart-button" text="Add to Cart" />
        </div>
      </div>
</template>


<script>
    /* NOTES: */
    /*
      class name 'product-page__availablity--in-stock'

      --in-stock can be changed to:
      --low-stock
      --out-of-stock
      
      to update the colour of the text ie:
      --in-stock = green
      --low-stock = yellow
      --out-of-stock = red
    */

    export default {
        props: {
           availability:{
                type: String,
            }
        }
    }
</script>