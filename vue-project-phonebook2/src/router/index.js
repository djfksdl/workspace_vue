import { createRouter, createWebHistory } from 'vue-router'
import ListView from '../views/ListView.vue'

const routes = [
  {
    path: '/',
    name: 'ListView',
    component: ListView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
