import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/pc/Main.vue'
import MobileMainView from '../views/mobile/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/mhome',
      name: 'mhome',
      component: MobileMainView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/pc/About.vue')
    },
    {
      path: '/mabout',
      name: 'mabout',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/mobile/About.vue')
    },
    {
      path: '/archive',
      name: 'archive',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/pc/Archive.vue')
    }
  ]
})

export default router
