<script setup>
  import IconAccount from '../icons/IconAccount.vue'
  import IconBasket from '../icons/IconBasket.vue'
</script>

<template>
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
</template>