import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'home',
    path: '/',
    redirect: '/warmaHead',
  },
  {
    name: 'warmaHead',
    path: '/warmaHead',
    component: () => import('@/views/WarmaHead'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
