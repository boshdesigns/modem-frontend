import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import RefundsView from '../views/RefundsView.vue'
import BasketView from '../views/BasketView.vue'
import AccountView from '../views/AccountView.vue'
import ProductView from '../views/ProductView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/refunds',
      name: 'refunds',
      component: RefundsView
    },
    {
      path: '/basket',
      name: 'basket',
      component: BasketView
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
  ]
})

export default router
