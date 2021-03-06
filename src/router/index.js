import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HotView from '../views/HotView.vue'
import IcedView from '@/views/IcedView.vue'
import Reviews from '@/views/Reviews.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/hot',
    name: 'hot',
    component: HotView
  },
  {
    path: '/iced',
    name: 'iced',
    component: IcedView
  },
  {
    path: '/reviews/:drinkName',
    name: 'reviews',
    component: Reviews,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
