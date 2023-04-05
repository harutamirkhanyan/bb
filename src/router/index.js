import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage/HomePage.vue'

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage, alias: '/home' },
    // { path: 'store', name: 'store', component: Store },
    // { path: '/', name: 'home', component: HomePage },
    // { path: '/', name: 'home', component: HomePage },
    // { path: '/', name: 'home', component: HomePage }
  ]
})