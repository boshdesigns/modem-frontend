<template>
  <footer>
    <div class="base-content-container">
      <section class="footer__container">
        <div class="footer__row footer__links">
          <FooterNavigation :links="links" heading="Useful Links" />
          <FooterNavigation :links="links" heading="Contact" />
          <FooterNavigation :links="links" heading="Navigate" />
        </div>
        <div class="footer__row">
          <div class="newsletter-widget">Newsletter Widget</div>
        </div>
      </section>
    </div>
  </footer>
</template>

<script>
  import FooterNavigation from '@/components/sections/FooterNavigation.vue';
  export default {
    components: {
      FooterNavigation
    },
    data() {
      return {
        links: [
          { label: "Link 1", url: "/" },
          { label: "Link 2", url: "/" },
          { label: "Link 3", url: "/" },
        ],
      };
    },
  };
</script>
