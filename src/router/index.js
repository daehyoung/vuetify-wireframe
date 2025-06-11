/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import AdminLayout from '@/layouts/admin.vue'
import UserLayout from '@/layouts/user.vue'
import AdminHome from '@/pages/admin-home.vue'
import Codes from '@/pages/codes.vue'
import Users from '@/pages/users.vue'
import UserHome from '@/pages/user-home.vue'
import UserProfile from '@/pages/profile.vue'
import About from "@/pages/about.vue";
import Login from "@/pages/login.vue";
import Logout from "@/pages/logout.vue";

const routes = [
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      { path: '', component: AdminHome },
      { path: 'codes', component: Codes },
      { path: 'users', component: Users },
    ]
  },
  {
    path: '/user',
    component: UserLayout,
    children: [
      { path: '', component: UserHome },
      { path: 'profile', component: UserProfile },
      { path: 'about', component: About },
    ]
  },
  {
    path: '/', redirect: '/user'
  },
  {
    path: '/login',   component: Login,
  },
  {
    path: '/logout',   component: Logout,
  }
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
