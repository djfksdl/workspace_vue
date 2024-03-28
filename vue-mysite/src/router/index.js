import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/main/MainView.vue'
import LoginFormView from '@/views/user/LoginFormView'
import ModifyFormView from '@/views/user/ModifyFormView'
import JoinFormView from '@/views/user/JoinFormView'
import AttachFormView from '@/views/attach/AttachFormView'
import AttachResultView from '@/views/attach/AttachResultView'
import AddListView from '@/views/guestbook/AddListView.vue'
import DeleteFormView from '@/views/guestbook/DeleteFormView.vue'
import ListView from '@/views/board/ListView.vue'
import BoardModifyFormView from '@/views/board/ModifyFormView.vue'
import WriteFormView from '@/views/board/WriteFormView.vue'
import ReadView from '@/views/board/ReadView.vue'
import GalleryListView from '@/views/gallery/ListView.vue'

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
    path: '/guest/deleteform/:no',
    name: '/guest/deleteform',
    component: DeleteFormView
  },
  {
    path: '/board/list',
    name: '/board/list',
    component: ListView
  },
  {
    path: '/board/modifyform/:no',
    name: '/board/modifyform',
    component: BoardModifyFormView
  },
  {
    path: '/board/writeform',
    name: '/board/writeform',
    component: WriteFormView
  },
  {
    path: '/board/read/:no',
    name: '/board/read',
    component: ReadView
  },
  {
    path: '/gallery/list',
    name: '/gallery/list',
    component: GalleryListView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})//이것도 지우면 안됨. history mode쓰는 설정이니까!

export default router
