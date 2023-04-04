import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import './assets/scss/_main.scss'
import router from './router'
import store from './store'

const app = createApp(App)

app
  .use(MotionPlugin)
  .use(store)
  .use(router)
  .mount('#app')


