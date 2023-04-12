import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage/HomePage.vue'
import ProjectsPage from '@/views/ProjectsPage/ProjectsPage.vue'
import StorePage from '@/views/StorePage/StorePage.vue'
import MaisonPage from '@/views/MaisonPage/MaisonPage.vue'

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage, alias: '/home' },
    { path: '/projects', name: 'projects', component: ProjectsPage },
    { path: '/store', name: 'store', component: StorePage },
    { path: '/maison', name: 'maison', component: MaisonPage },
    // { path: '/', name: 'home', component: HomePage }
  ]
})