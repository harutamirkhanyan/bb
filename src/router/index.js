import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage/HomePage.vue'
import ProjectsPage from '@/views/ProjectsPage/ProjectsPage.vue'
import StorePage from '@/views/StorePage/StorePage.vue'

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage, alias: '/home' },
    { path: '/projects', name: 'projects', component: ProjectsPage },
    { path: '/store', name: 'store', component: StorePage },
    // { path: '/', name: 'home', component: HomePage },
    // { path: '/', name: 'home', component: HomePage }
  ]
})