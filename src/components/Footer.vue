<template>
  <footer>
    <div class="modem-site-container">
      <section class="footer__container">
        <div class="footer__row footer__links">
          <div class="footer__links__container">
            <h3>Useful Links</h3>
            <ul class="footer-navigation__grid">
              <li class="footer-navigation__link">
                <RouterLink to="/">Link 1</RouterLink>
              </li>
              <li class="footer-navigation__link">
                <RouterLink to="/">Link 1</RouterLink>
              </li>
              <li class="footer-navigation__link">
                <RouterLink to="/">Link 1</RouterLink>
              </li>
            </ul>
          </div>
          <div class="footer__links__container">
            <h3>Contact</h3>
            <ul class="footer-navigation__grid">
              <li class="footer-navigation__link">
                <RouterLink to="/">Link 1</RouterLink>
              </li>
              <li class="footer-navigation__link">
                <RouterLink to="/">Link 1</RouterLink>
              </li>
              <li class="footer-navigation__link">
                <RouterLink to="/">Link 1</RouterLink>
              </li>
            </ul>
          </div>
          <div class="footer__links__container">
            <h3>Navigate</h3>
            <ul class="footer-navigation__grid">
              <li class="footer-navigation__link">
                <RouterLink to="/">Link 1</RouterLink>
              </li>
              <li class="footer-navigation__link">
                <RouterLink to="/">Link 1</RouterLink>
              </li>
              <li class="footer-navigation__link">
                <RouterLink to="/">Link 1</RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__row">
          <div class="newsletter-widget">Newsletter Widget</div>
        </div>
      </section>
    </div>
  </footer>
</template>

<style scoped>
  footer {
    width: 100%;
    background-color: #313131;
    padding: 20px 0;
    margin-top: 60px;
  }

  .footer__container {
    display: flex;
    flex-direction: column;
  }

  .footer__row {
    width: 100%;
    margin-bottom: 20px;
  }

  .footer__links {
    display: flex;
    flex-direction: column;
  }

  .footer-navigation__grid {
    display: flex;
    flex-direction: row;

    justify-content: center;
  }

  .footer-navigation__link a {
    font-size: 13px;
    margin: 0 10px;
  }

  .footer-navigation__link a:hover {
    color: #95482c;
  }

  .footer__links__container {
    width: 100%;
    margin: 5px 5px 25px;
  }

  .footer__links__container h3 {
    color: #95482c;
    margin-bottom: 5px;
    text-align: center;
  }

  /* PLACEHOLDER STYLING */
  .newsletter-widget {
    background-color: #fff;
    border: 1px grey solid;
    padding: 60px 20px;
  }

  /* Desktop styling */
  @media (min-width: 768px) {
    .footer__container {
      flex-direction: row;
    }
    .footer__row {
      width: 50%;
      margin-bottom: 0;
    }

    .footer__links {
      flex-direction: row;
    }

    .footer__links__container {
      width: calc(33.3% - 10px);
    }

    .footer-navigation__grid {
      flex-direction: column;
      justify-content: flex-start;

    }
    .footer-navigation__link a {
      margin: 0;
    }
    .footer__links__container h3 {
      text-align: left;
    }
  }

</style>
