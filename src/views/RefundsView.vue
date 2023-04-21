<template>
  <main class="modem-site-container">
    <h1 class="page__heading">Refunds</h1>
    <div class="page__description">
      <p>Completed refund request forms and refund cancellations for 2023 tickets must be received by 23:59 CEST on 31st May 2023. No late refund requests will be accepted.</p>
      <p>If you have a ticket you purchased for a friend and they would like to request a refund with their own bank details you will need to first re-assign the ticket to them so they can manage the ticket and request the refund themselves. If you do not re-assign it to them, you can only request a refund with your own bank details.</p>
      <p>The pace of refunded ticket payments depends on achievement of additional sales of refunded tickets. Refunded tickets will go on sale in June 2023.</p>
      <p>Refunds are not possible for tickets bought in the June 2023 resale phase.</p>
      <p>E-ticket refunds will be processed from the 1st of June 2023 onwards. Due to different laws and bank policies, the payment process may last until the 30th of June 2023 or longer.</p>
      <p>The ticket buyer is able to request refunds for any ticket purchased within their order, unless they re-assign a ticket to a new customer.</p>
      <p> Please make sure your bank info is correct, if the correct banking information is not provided this will delay your payment and possibly incur extra bank fees for returned funds.</p>
      <p>Note that all ticket refunds are subject to a fee of 25 € due to administrative costs, as specified in our Terms and Conditions.</p>
    </div>
    <section class="page__button-group">
      <button>New refund request</button>
      <button>Back to orders</button>
    </section>
  </main>
</template>

<style scoped>
  .page__heading {
    font-size: 25px;
    text-align: center;
    margin: 30px 0;
    text-transform: uppercase;
  }

  .page__description {
    margin-bottom: 40px;
  }

  .page__button-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .page__button-group button {
    background-color: #da6937;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    min-width: 200px;
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 768px) {
    .page__heading {
      font-size: 45px;
      margin: 60px 0 30px;
    }

    .page__button-group {
      display: flex;
    flex-direction: row;

      justify-content: space-around;
    }
  }
</style>
