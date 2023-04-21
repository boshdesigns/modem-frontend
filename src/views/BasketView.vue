<script setup>
  import OrderTable from '../components/OrderTable.vue';
</script>

<template>
  <main class="modem-site-container">
    <h1 class="page__heading">Shopping Cart</h1>
    <h2 class="page__subheading">Manage your orders</h2>
    <div class="page__description">
      <p>Email address changes are allowed.</p>
      <p>Name changes are NOT allowed for all tickets except Campervan Passes.</p>
      <p>Tickets need to be presented with a valid ID document that matches the name on the ticket to access the festival. You cannot enter the festival with a ticket that is not in your name.</p>
      <p>If you have a ticket you no longer require, please request a refund.</p>
      <p>You can download your ticket by clicking the manage option of the order.</p>
      <p>If you have purchased a ticket for someone else, you can re-assign the ticket to their account and allow them to manage their own ticket.</p>
      <p>Transport ticket travel day and time options will be available closer to the event date. You will receive an email when this becomes available.</p> 
    </div>
    <OrderTable />
  </main>
</template>

<style scoped>
  .page__heading {
    font-size: 25px;
    text-align: center;
    margin: 30px 0;
    text-transform: uppercase;
  }

  .page__subheading {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .page__description {
    margin-bottom: 40px;
  }

  .page__description p {
    font-size: 14px; 
  }

  @media only screen and (min-width: 768px) {
    .page__heading {
      font-size: 45px;
      margin: 60px 0 30px;
    }

    .page__subheading {
      font-size: 30px;
    }

  }
</style>
