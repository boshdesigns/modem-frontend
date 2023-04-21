<script setup>
  import IconAccount from './icons/IconAccount.vue'
  import IconBasket from './icons/IconBasket.vue'
</script>

<template>
  <header>
    <div class="modem-site-container">
      <div class="logo-container">
        <a href="/">
          <img alt="Modem logo" class="logo-image" src="@/assets/logo.png" width="268" height="49" />
        </a>
      </div>
      <div class="nav__container">
        <nav>
          <ul class="main-navigation__grid">
            <li class="main-navigation__link"><RouterLink to="/">Home</RouterLink></li>
            <li class="main-navigation__link"><RouterLink to="/shop">Shop</RouterLink></li>
            <li class="main-navigation__link"><RouterLink to="/refunds">Refunds</RouterLink></li>
          </ul>
        </nav>
        <section class="side-navigation">
          <ul class="side-navigation__grid">
            <li class="side-navigation__link"><RouterLink to="/account"><IconAccount /></RouterLink></li>
            <li class="side-navigation__link"><RouterLink to="/basket"><IconBasket /></RouterLink></li>
          </ul>
        </section>
      </div>
    </div>
  </header>
  <div class="site-banner__container">
    <img alt="Modem Site Banner" class="site-banner" src="@/assets/header_background.jpg" width="1280" height="600" />
  </div>
</template>

<style>
  header {
    width: 100%;
    background-color: #313131;
  }

  header .modem-site-container {
    padding: 30px 0 10px;

  }

  .logo-container {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }

  .site-banner {
    width: 100%;
  }

  .nav__container {
    width: 100%;
    position: relative;
  }

  /* Main Navigation */

  .main-navigation__grid {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 0 150px;
    min-height: 25px;
    align-items: center;
  }

  .main-navigation__link a {
    margin:  0 10px;
    color: #FFF;
    text-decoration: none;
    text-transform: uppercase;
  }

  .main-navigation__link a:hover,
  .main-navigation__link a.active,
  .main-navigation__link a.router-link-active {
   color: #da6937;
  }

  /* Side Navigation */

  .side-navigation__grid {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  .side-navigation {
    margin-top: 15px;
  }

  .side-navigation__link a {
    margin:  0 10px;
    height: 25px;
    width: 25px;
    display: inline-block;
  }

  .side-navigation__link a:hover .cls-1,
  .side-navigation__link a.router-link-active .cls-1 {
    stroke: #da6937;
  }


 /* Desktop styling */
  @media (min-width: 768px) {
    .side-navigation {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
       margin-top: 0;
    }
  }
</style>
