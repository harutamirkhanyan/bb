import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import './assets/scss/_main.scss'


const app = createApp(App)

app.use(MotionPlugin).mount('#app')


