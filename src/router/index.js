import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/pc/Main.vue'
import MobileMainView from '../views/mobile/Main.vue'
import AboutView from '../views/pc/About.vue'
import MobileAboutView from '../views/mobile/About.vue'
import ArchiveView from '../views/pc/Archive.vue'
import MobileArchiveView from '../views/mobile/Archive.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: MainView,
        mobile: MobileMainView
      }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        default: AboutView,
        mobile: MobileAboutView
      }
    },
    {
      path: '/archive',
      name: 'archive',
      components: {
        default: ArchiveView,
        mobile: MobileArchiveView
      }
    },
  ]
})

export default router
