import { createRouter, createWebHistory } from 'vue-router'
import AddListView from '../views/AddListView.vue'
import DelFormView from '../views/DelFormView.vue'


const routes = [
  {
    path: '/',
    name: '/',//별명 주는거임- main이라고 표현하기도함. 그냥 우리는 path랑 name이랑 같게 쓰자
    component: AddListView
  },
  {
    path: '/delete/',
    name: '/delform',
    component: DelFormView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
