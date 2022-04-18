import { createRouter, createWebHistory } from "vue-router";
import characters from "./views/characters"
import home from "./views/home"
import Layout from '@/layout/index.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/home/index'
  }, {
    path: '/home',
    name: 'home',
    component: Layout,
    redirect: '/home/index',
    children: [...home, ...characters]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router