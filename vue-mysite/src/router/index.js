import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/main/MainView.vue'
import LoginFormView from '@/views/user/LoginFormView'
import ModifyFormView from '@/views/user/ModifyFormView'
import JoinFormView from '@/views/user/JoinFormView'
import AttachFormView from '@/views/attach/AttachFormView'
import AttachResultView from '@/views/attach/AttachResultView'
import AddListView from '@/views/guestbook/AddListView.vue'
import DeleteFormView from '@/views/guestbook/DeleteFormView.vue'

const routes = [
  {
    path: '/',
    name: '/',
    component: MainView
  },
  {
    path: '/user/loginform',
    name: '/user/loginform',
    component: LoginFormView
  },
  {
    path: '/user/modifyform',
    name: '/user/modifyform',
    component: ModifyFormView
  },
  {
    path: '/user/joinform',
    name: '/user/joinform',
    component: JoinFormView
  },
  {
    path: '/attach/form',
    name: '/attach/form',
    component: AttachFormView
  },
  {
    path: '/attach/result',
    name: '/attach/result',
    component: AttachResultView
  },
  {
    path: '/guest/addlist',
    name: '/guest/addlist',
    component: AddListView
  },
  {
    path: '/guest/deleteform',
    name: '/guest/deleteform',
    component: DeleteFormView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})//이것도 지우면 안됨. history mode쓰는 설정이니까!

export default router
