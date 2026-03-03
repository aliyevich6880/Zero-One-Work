import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'
import Dashboard from '@/views/dashboard/Dashboard.vue'
import Tables from '@/views/dashboard/Tables.vue'
import Billing from '@/views/dashboard/Billing.vue'
import RTL from '@/views/dashboard/RTL.vue'
import Profile from '@/views/dashboard/Profile.vue'

const routes = [
  {
    path: '/',
    redirect: '/auth/login'
  },
  {
    path: '/auth',
    children: [
      { path: 'login', name: 'Login', component: Login },
      { path: 'register', name: 'Register', component: Register }
    ]
  },
  {
    path: '/',
    component: DashboardLayout,
    meta: { requiresAuth: true },
    children: [
      { path: 'dashboard', name: 'Dashboard', component: Dashboard },
      { path: 'table', name: 'Tables', component: Tables },
      { path: 'billing', name: 'Billing', component: Billing },
      { path: 'rtl', name: 'RTL', component: RTL },
      { path: 'profile', name: 'Profile', component: Profile },
      { path: 'team', name: 'Team', component: Profile }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/auth/login'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore()
  authStore.hydrateSession()

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next({ name: 'Login' })
    return
  }

  if (to.meta.guestOnly && authStore.isLoggedIn) {
    next({ name: 'Dashboard' })
    return
  }

  next()
})

export default router
