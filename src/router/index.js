import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage/HomePage.vue'
import ProjectsPage from '@/views/ProjectsPage/ProjectsPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage, alias: '/home' },
    { path: '/projects', name: 'projects', component: ProjectsPage },
    // { path: '/', name: 'home', component: HomePage },
    // { path: '/', name: 'home', component: HomePage },
    // { path: '/', name: 'home', component: HomePage }
  ]
})