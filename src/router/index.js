import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/pc/PcMain.vue'
import MobileMainView from '../views/mobile/MobileMain.vue'

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
      component: () => import('../views/pc/PcAbout.vue')
    },
    {
      path: '/archive',
      name: 'archive',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/pc/PcArchive.vue')
    }
  ]
})

export default router
