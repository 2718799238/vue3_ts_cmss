import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/view/login/Login.vue')
    },
    {
      name: 'main',
      path: '/main',
      component: () => import('@/view/main/Main.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../view/not-found/NotFound.vue')
    }
  ]
})

export default router
