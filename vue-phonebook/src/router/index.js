import { createRouter, createWebHistory } from 'vue-router'
import listView from "../views/listView.vue"
import modifyFormView from "../views/modifyFormView.vue"
import writeFormView from "../views/writeFormView.vue"

const routes = [
  {
    path: '/',
    name: '/',
    component: listView
  },
  {
    path: '/modifyform',
    name: '/modifyform',
    component: modifyFormView
  },
  {
    path: '/writeform',
    name: '/writeform',
    component: writeFormView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
