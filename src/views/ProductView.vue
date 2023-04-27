<script setup>
  import ProductDisclaimer from '@/components/product-page/ProductDisclaimer.vue'
  import ProductDetails from '@/components/product-page/ProductDetails.vue'
  import ProductPurchasing from '@/components/product-page/ProductPurchasing.vue'
</script>

<template>
    <section class="product-page">
      <div class="product-page__body">
        <div class="product-page__left-col">
          <div class="product-page__gallery">
            <div> 
              Placehodler Image Gallery
            </div>
          </div>
        </div>
        <div class="product-page__right-col">
          <div class="product-page__description">
            <h1 class="product-page__description__header">Mo:Dem Express 2023 - Festival to Zagreb Airport TEST</h1>
            <div class="product-page__description__price">€29.00</div>
            <div class="product-page__description__body">
              <p>This year we have a new transport option, The Mo:Dem Express.</p> 
              <p>This transport option will leave from the Festival location to Zagreb Airport.</p> 
              <p>Shuttle tickets for the arrival and return will be sold separately. You can buy the arrival ticket on Mo:Dem Shop.</p> 
              <p>As most travel plans are only decided closer to the event date, for now you will book an open ticket and final confirmation will be done on the Mo:DemSpace portal closer to the event date. In the meantime you will receive a booking code and confirmation email. Bookings will close at 23:59 CEST on the 28th of July 2023.</p>
              <p>Mo:Dem Express – Festival to Zagreb Airport departure time and day options are below :</p> 
              <p>
                <ul>
                  <li>Sunday 13.08.2023.</li>
                  <li>10:00</li>
                  <li>16:00</li>
                  <li>22:00</li>
                </ul>
              </p>
              <p>
                <ul>
                  <li>Sunday 13.08.2023.</li>
                  <li>10:00</li>
                  <li>16:00</li>
                  <li>22:00</li>
                </ul>
              </p>
            </div>
            <ProductPurchasing availability="In Stock" />
          </div>
         <ProductDetails :details="[{id: 'Category', value: 'Ticket'},{id: 'Limit per order:', value: 'No limit'},{id: 'Refundable:', value: 'Not'},{id: 'Name changes:', value: 'Yes (until 04 April 2022 - 23:59 CET)'}, {id:'Email changes', value: 'Yes'}]"/>
        </div>
      </div>
      <ProductDisclaimer />
    </section>
</template>