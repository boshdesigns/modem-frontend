<template>
   <section class="home-ctas__grid">
      <div class="home-ctas__item">
        <RouterLink to="/">
          <figure>
            <img alt="call to action 1" class="" src="@/assets/home_cta_1.jpg" width="352" height="502" />
            <figcaption>Title</figcaption>
          </figure>    
        </RouterLink>    
      </div>
      <div class="home-ctas__item">
        <RouterLink to="/">
          <figure>
            <img alt="call to action 1" class="" src="@/assets/home_cta_1.jpg" width="352" height="502" />
            <figcaption>Title</figcaption>
          </figure>    
        </RouterLink>    
      </div>
      <div class="home-ctas__item">
        <RouterLink to="/">
          <figure>
            <img alt="call to action 1" class="" src="@/assets/home_cta_1.jpg" width="352" height="502" />
            <figcaption>Title</figcaption>
          </figure>    
        </RouterLink>    
      </div>
    </section>
</template>

<style scoped>
  .home-ctas__grid {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .home-ctas__item {
    width: 100%;
    margin: 30px 0;
    position: relative;
  }

  .home-ctas__item img {
    width: 100%;
  }

  .home-ctas__item figcaption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #fff;
    background-color: rgba(218, 105, 55, 0.75);

    text-transform: uppercase;
    font-weight: 600;
    font-size: 20px;

  }

  @media only screen and (min-width: 500px) {
    .home-ctas__item img {
      width: auto;
    }
    .home-ctas__item {
      width: calc(50% - 30px * 2);
      margin: 30px;
    }
    .home-ctas__grid {
      flex-direction: row;
      margin-left: -30px;
      margin-right: -30px;
    }
  }

  @media only screen and (min-width: 768px) {
    .home-ctas__grid {
      flex-direction: row;
      margin-left: -30px;
      margin-right: -30px;
    }
    .home-ctas__item {
      width: calc(33.3% - 30px * 2);
      margin: 30px;
    }
  }

</style>
