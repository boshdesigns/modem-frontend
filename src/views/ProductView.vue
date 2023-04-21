<script setup>
  import { ref } from 'vue';
  const count = ref(0);
</script>

<template>
  <main class="modem-site-container">
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
            
          </div>
          <div class="product-page__product-details">
            <ul>
              <li><strong>Category:</strong>Ticket</li>
              <li><strong>Limit per order:</strong>No limit</li>
              <li><strong>Refundable:</strong>No</li>
              <li><strong>Name changes:</strong>Yes (until 04 April 2022 - 23:59 CET)</li>
              <li><strong>Email changes:</strong>Yes</li>
            </ul>
          </div>

          <div class="product-page__product-purchasing">
            <div class="product-page__availablity">Availability: <span class="product-page__availablity--in-stock">In Stock</span></div>
            <div class="product-page__purchase-group">
              <div class="product-page__counter">
                <input type="number" v-model="count" @input="event => count = event.target.value">
                <div class="product-page__counter__up-arrow" @click="count++">></div>
                <div class="product-page__counter__down-arrow" @click="$event => {count > 0 ? count-- : 0}">></div>
              </div>
              <button class="product-page__cart-button">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <aside class="product-page__disclaimer">
        <div class="product-page__disclaimer__header">DESCRIPTION</div>
        <p>Mo:Dem Express tickets are personalised and need to be registered with a valid name and surname. Name changes are not possible, tickets cannot be exchanged, transferred or resold.</p> 
        <p>Mo:Dem Express tickets are refundable. Refund requests will be accepted from the start of the new year, 2023, through Mo:DemSpace on the Mo:Dem website.</p>  
        <p>Completed refund request forms and refund cancellations for Mo:Dem Express 2023 tickets must be received by 23:59 CEST on 31st May 2023. Any Mo:Dem Express tickets bought after this date are not refundable.</p> 
        <p>Please print your Mo:Dem Express ticket out or have it downloaded on your phone and present it to the shuttle driver upon arrival.</p>
        <p>Please notice that this ticket is valid only with an official document (ID or passport) that contains your picture and personal information that matches with the name on the ticket.</p>
        <p>Mo:Dem Express 2023 tickets are personalized, and can only be used by the person mentioned in the heading. We do not accept a written mandate to transfer personalized tickets.</p>
        <p>Gates open at 12:00 on 5th of August and close at the same time on 14th August 2023. No persons will be permitted entrance to the festival location before or after these dates.</p>
        <p>Entrance to Mo:Dem Festival is only possible at the minimum age of 18 years. People under 18 years of age may only enter the festival accompanied by their parents.</p>
      </aside>
    </section>
  </main>
</template>


<style scoped>
  .product-page__body {
    display: flex;
    flex-direction: column;
    padding: 30px 0;
  }
  .product-page__left-col,
  .product-page__right-col {
    width: 100%;
    padding: 0 30px;
  }

  .product-page__description {
    margin-bottom: 40px;
  }
  .product-page__description__header,
  .product-page__description__price {
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 30px;
  }

  .product-page__disclaimer {
    max-width: 90%;
    margin: 40px auto;
  }
  .product-page__disclaimer__header {
    border: 1px solid #7e7e7e;
    text-align: center;
    padding: 15px;
    font-size: 20px;
    margin-bottom: 20px;
  }

  .product-page__product-details {
    margin-bottom: 40px;
  }
  .product-page__product-details li {
    font-size: 18px;
    margin-bottom: 15px;
  }
  .product-page__product-details strong {
    font-weight: bold;
    color: #da6937;
    margin-right: 15px;
  }

  .product-page__purchase-group {
    display: flex;
    align-items: center;
  }

  .product-page__cart-button {
    background-color: #da6937;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    min-width: 200px;
    margin-left: 40px;
  }


  /* Number counter styling */
  
  .product-page__counter  {
    position: relative;
    height: 40px;
    width: 60px;
  }
  .product-page__counter input {
    font-size: 20px;
    padding: 10px;
    width: 100%;
    height: 100%;
    border: 1px solid #e5e5e5;
  }

  .product-page__counter input::-webkit-outer-spin-button,
  .product-page__counter input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }

  .product-page__counter__up-arrow,
  .product-page__counter__down-arrow {
    position: absolute;
    background-color: #da6937;
    top: 3px;
    right: 3px;
    height: 40%;
    width: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    transform: rotate(-90deg);
    cursor: pointer;

    /* prevent highlighting of the arrow characters */
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
       -khtml-user-select: none; /* Konqueror HTML */
         -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
  }

  .product-page__counter__down-arrow {
    bottom: 3px;
    top: auto;
    transform: rotate(90deg);
  }

  /* availablity styling */
  .product-page__availablity {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 600;
  }

  .product-page__availablity--in-stock {
    color: #00B100;
  }
  .product-page__availablity--low-stock {
    color: #da6937;
  }
  .product-page__availablity--out-of-stock {
    color: #e01e1e;
  }

  /* PLACEHOLDER STYLING FOR THE GALLERY */
  .product-page__gallery div {
    width: 100%;
    height: 400px;
    background-color: #313131;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }

  @media only screen and (min-width: 768px) {
    .product-page__body {
      flex-direction: row;
      padding: 80px 0 30px;
    }
    .product-page__disclaimer__header {
      margin-bottom: 40px;
    }
    .product-page__left-col {
      width: 40%;
    }
    .product-page__right-col {
      width: 60%;
    }
  }

  

</style>
