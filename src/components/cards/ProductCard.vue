<template>
    <article class="product-card__item">
        <RouterLink :to="url">
          <figure v-if="image !== ''">
            <GenericPicture alt="Feature Product" class-names="extra-class" :src="image" width="350" height="350" />
          </figure>
          <figure v-else>
            <img alt="Feature Product Placeholder" src="@/assets/product_placeholder.jpg" width="350" height="350" />
          </figure>
         </RouterLink>
          <div class="product-card__details">
            <div class="product-card__title">{{title}}</div>
            <div class="product-card__category">{{ category }}</div>
            <div class="product-card__price">{{price}}</div>
            <div class="product-card__cart-button">
              <GenericButton text="Add to cart"/>          
            </div>
          </div> 
      </article>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: "Mo:Dem Express 2023 - Festival to Zagreb Airport TEST"
            },
            category: {
                type: String,
                default: "Category"
            },
            image: {
                type: String,
                default: ''
            },
            price: {
                type: [String, Number],
                default: "29,00€"
            },
            url: {
                type: String,
                default: "/product"
            }
        }
    }   
</script>

<script setup>
    import GenericButton from '@/components/generic/GenericButton.vue';  
    import GenericPicture from '@/components/generic/GenericPicture.vue';
</script>
