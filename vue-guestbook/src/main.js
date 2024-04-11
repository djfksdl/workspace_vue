import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './sotre/storage'

createApp(App).use(store).use(router).use(router).mount('#app')
