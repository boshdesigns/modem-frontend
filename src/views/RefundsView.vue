<template>
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
      <GenericButton text="New refund request" />
      <GenericButton text="Back to orders" />
    </section>
</template>

<script setup>
  import GenericButton from '@/components/generic/GenericButton.vue';
</script>