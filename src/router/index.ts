import { localCache } from '@/utils/cache'

import { createRouter, createWebHashHistory } from 'vue-router'
import { firstPage } from '../utils/mapMenusRouter'
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

// 导航守卫
router.beforeEach((to, from) => {
  // 登陆的守卫
  const token = localCache.getCache('cmssToken')
  if (to.path.startsWith('/main') && !token) {
    return '/login'
  }
  if (to.path === '/main') {
    return firstPage?.url
  }
})
export default router
