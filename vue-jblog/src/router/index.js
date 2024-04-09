import { createRouter, createWebHistory } from 'vue-router'
import MainIndex from '@/views/main/index.vue'
import LoginForm from '@/views/user/LoginForm.vue'
import JoinForm from '@/views/user/JoinForm.vue'
import JoinSuccess from '@/views/user/JoinSuccess.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainIndex
  },
  {
    path: '/loginform',
    name: 'LoginForm',
    component: LoginForm
  },
  {
    path: '/joinform',
    name: 'JoinForm',
    component: JoinForm
  },
  {
    path: '/joinsuccess',
    name: 'JoinSuccess',
    component: JoinSuccess
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
