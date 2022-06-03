import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import('../views/auth/Login.vue')
  },
  {
    path: '/marketers/all',
    name: 'AllMarketers',
    component: () => import('../views/dashboard/AllMarketers.vue')
  },
  {
    path: '/marketers/new',
    name: 'NewMarketer',
    component: () => import('../views/dashboard/NewMarketer.vue')
  },
  {
    path: '/marketers/:id',
    name: 'MarketerDetail',
    component: () => import('../views/dashboard/MarketerDetails.vue')
  },
  {
    path: "/:catchAll(.*)",
    name: 'NotFound',
    component: () => import('../views/404.vue')
  },
  {
    path: '/',
    redirect: '/marketers/all'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
