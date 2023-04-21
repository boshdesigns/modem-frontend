<template>
   <section class="site-product__grid">
      <article class="site-product__item">
        <RouterLink to="/product">
          <figure>
            <img alt="Feature Product"  src="@/assets/product_placeholder.jpg" width="350" height="350" />
          </figure>
         </RouterLink>
          <div class="site-product__details">
            <div class="site-product__title">Mo:Dem Express 2023 - Festival to Zagreb Airport TEST</div>
            <div class="site-product__category">Category</div>
            <div class="site-product__price">29,00€</div>
            <div class="site-product__cart-button">
              <button>Add to cart</button>            
            </div>
          </div> 
      </article>
      <article class="site-product__item">
        <RouterLink to="/product">
          <figure>
            <img alt="Feature Product"  src="@/assets/product_placeholder.jpg" width="350" height="350" />
          </figure>
         </RouterLink>
          <div class="site-product__details">
            <div class="site-product__title">Mo:Dem Express 2023 - Festival to Zagreb Airport TEST</div>
            <div class="site-product__category">Category</div>
            <div class="site-product__price">29,00€</div>
            <div class="site-product__cart-button">
              <button>Add to cart</button>            
            </div>
          </div> 
      </article>
      <article class="site-product__item">
        <RouterLink to="/product">
          <figure>
            <img alt="Feature Product"  src="@/assets/product_placeholder.jpg" width="350" height="350" />
          </figure>
         </RouterLink>
          <div class="site-product__details">
            <div class="site-product__title">Mo:Dem Express 2023 - Festival to Zagreb Airport TEST</div>
            <div class="site-product__category">Category</div>
            <div class="site-product__price">29,00€</div>
            <div class="site-product__cart-button">
              <button>Add to cart</button>            
            </div>
          </div> 
      </article>
      <article class="site-product__item">
        <RouterLink to="/product">
          <figure>
            <img alt="Feature Product"  src="@/assets/product_placeholder.jpg" width="350" height="350" />
          </figure>
         </RouterLink>
          <div class="site-product__details">
            <div class="site-product__title">Mo:Dem Express 2023 - Festival to Zagreb Airport TEST</div>
            <div class="site-product__category">Category</div>
            <div class="site-product__price">29,00€</div>
            <div class="site-product__cart-button">
              <button>Add to cart</button>            
            </div>
          </div> 
      </article>
      <article class="site-product__item">
        <RouterLink to="/product">
          <figure>
            <img alt="Feature Product"  src="@/assets/product_placeholder.jpg" width="350" height="350" />
          </figure>
         </RouterLink>
          <div class="site-product__details">
            <div class="site-product__title">Mo:Dem Express 2023 - Festival to Zagreb Airport TEST</div>
            <div class="site-product__category">Category</div>
            <div class="site-product__price">29,00€</div>
            <div class="site-product__cart-button">
              <button>Add to cart</button>            
            </div>
          </div> 
      </article>
    </section>
</template>

<style scoped>
  .site-product__grid {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .site-product__item {
    width: 100%;
    margin: 30px 0;
    position: relative;
  }

  .site-product__item a {
    color: #313131;
  }

  .site-product__item img {
    width: 100%;
  }

  .site-product__details {
    padding: 10px;
    border: 1px #313131 solid;
    border-top: none;
  }

  .site-product__title {
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 15px;
  }

  .site-product__category,
  .site-product__price {
    margin-bottom: 5px;
    font-size: 13px;

  }

  .site-product__cart-button {
    display: flex;
    justify-content: center;
    margin: 5px 0;
  }

  .site-product__cart-button button {
    background-color: #da6937;
    color: #fff;
    padding: 8px 15px;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    font-size: 13px;
    cursor: pointer;
  }

  @media only screen and (min-width: 500px) {
    .site-product__item img {
      width: auto;
    }
    .site-product__item {
      width: calc(50% - 30px * 2);
      margin: 30px;
    }
    .site-product__grid {
      flex-direction: row;
      margin-left: -30px;
      margin-right: -30px;
    }
  }

  @media only screen and (min-width: 768px) {
    .site-product__heading {
      font-size: 45px;
      margin: 60px 0 10px;
    }
    
    .site-product__item {
      width: calc(33.3% - 30px * 2);
      margin: 30px;
    }
  }

</style>
