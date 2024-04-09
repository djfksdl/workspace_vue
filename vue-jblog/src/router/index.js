import { createRouter, createWebHistory } from 'vue-router'
import MainIndex from '@/views/main/index.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainIndex
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
