import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/Three00-Global',
    component: () => import('../views/Three00-Global.vue')
  },
  {
    path: '/Three01-Geometry',
    component: () => import('../views/Three01-Geometry.vue')
  },
  {
    path: '/Three02-Shadow',
    component: () => import('../views/Three02-Shadow.vue')
  },
  {
    path: '/Three03-model3d',
    component: () => import('../views/Three03-model3d.vue')
  }, {
    path: '/Three04-Texture',
    component: () => import('../views/Three04-Texture.vue')
  }, {
    path: '/Three05-Texture-notImage',
    component: () => import('../views/Three05-Texture-notImage.vue')
  }, {
    path: '/Three06-bubbles',
    component: () => import('../views/Three06-bubbles.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
