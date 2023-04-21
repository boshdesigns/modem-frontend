<template>
   <section class="product-order-table">
      <div class="product-order-table__row product-order-table__header">
        <div class="product-order-table__cell">Order ID</div>
        <div class="product-order-table__cell">Date</div>
        <div class="product-order-table__cell">VIA</div>
        <div class="product-order-table__cell">Status</div>
        <div class="product-order-table__cell">Items</div>
      </div>
      <div class="product-order-table__row">
        <div class="product-order-table__cell">1001</div>
        <div class="product-order-table__cell">2023-04-21</div>
        <div class="product-order-table__cell">Web</div>
        <div class="product-order-table__cell">Shipped</div>
        <div class="product-order-table__cell">2</div>
      </div>
      <div class="product-order-table__row">
        <div class="product-order-table__cell">1001</div>
        <div class="product-order-table__cell">2023-04-21</div>
        <div class="product-order-table__cell">Web</div>
        <div class="product-order-table__cell">Shipped</div>
        <div class="product-order-table__cell">2</div>
      </div>
    </section>
</template>

<style scoped>
 .product-order-table {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-collapse: collapse;
}

.product-order-table__row {
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid #ccc;
  background-color: #fff;

  padding: 5px;
}

.product-order-table__cell {
  flex: 1;
  padding: 10px;
  text-align: center;
}

.product-order-table__header {
  font-weight: bold;
  border: 1px solid #7e7e7e;
}

.product-order-table .product-order-table__row:nth-child(even) {
  background-color: rgb(243, 243, 243);
}

@media (max-width: 600px) {
  .product-order-table {
    flex-direction: column;
    overflow-x: auto;
  }
  
  .product-order-table__row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: max-content;
    min-width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
  }
  
  .product-order-table__cell {
    flex: 1 0 auto;
    width: 100%;
    text-align: left;
  }
}
</style>
