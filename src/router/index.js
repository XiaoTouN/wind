import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/wind',
    },
    {
      path: '/wind',
      name: 'wind',
      component: () => import('../views/Wind.vue'),
    },
  ],
})

export default router
