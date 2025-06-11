/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import AdminHome from '@/pages/admin-home.vue'
import UserHome from '@/pages/user-home.vue'
import Codes from '@/pages/codes.vue'
import Users from '@/pages/users.vue'
import About from '@/pages/about.vue'
import UserProfile from "@/pages/user-profile.vue";
const routes = [
  {
    path: '/',
    redirect: '/user-home',
  },
  {
    path: '/user-home',
    component: UserHome,
    meta: { layout: 'user' }
  },
  {
    path: '/admin-home',
    component: AdminHome,
    meta: { layout: 'admin' }
  },
  {
    path: '/codes',
    component: Codes,
    meta: { layout: 'admin' }
  },
  {
    path: '/users',
    component: Users,
    meta: { layout: 'admin' }
  },
  {
    path: '/about',
    component: About,
    meta: { layout: 'user' }
  },

  {
    path: '/user-profile',
    component: UserProfile,
    meta: { layout: 'user' }
  },
  // ... 기타 라우트
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (localStorage.getItem('vuetify:dynamic-reload')) {
      console.error('Dynamic import error, reloading page did not fix it', err)
    } else {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
