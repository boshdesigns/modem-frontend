<template>
   <section class="product-order-table">
      <div class="product-order-table__row product-order-table__header">
        <div class="product-order-table__cell">Order ID</div>
        <div class="product-order-table__cell">Date</div>
        <div class="product-order-table__cell">VIA</div>
        <div class="product-order-table__cell">Status</div>
        <div class="product-order-table__cell">Items</div>
      </div>
      <div class="product-order-table__row" v-for="(data, index) in orderData" :key="index">
        <div class="product-order-table__cell">{{data.order_id}}</div>
        <div class="product-order-table__cell">{{data.date}}</div>
        <div class="product-order-table__cell">{{data.via}}</div>
        <div class="product-order-table__cell">{{data.status}}</div>
        <div class="product-order-table__cell">{{data.items }}</div>
      </div>
    
    </section>
</template>

<script>
  export default {
        props: {
            orderData: {
                type: Array,
                default: []
            },
        },
    };
</script>