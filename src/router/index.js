import { createRouter, createWebHistory } from "vue-router";
import characters from "./views/characters"
import home from "./views/home"
import Layout from '@/layout/index.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/home/characters'
  }, {
    path: '/home',
    name: 'home',
    component: Layout,
    redirect: '/home/characters',
    children: [...home, ...characters]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router