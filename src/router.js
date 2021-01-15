import { createRouter, createWebHashHistory } from 'vue-router'
import threeRoutes from './three-examples/routes'


const routes = [
  {
    path:'',
    redirect:'/Three06-bubbles'
  },
  ...threeRoutes
  ,{
    path: '/test',
    component: () => import('./other-pages/TestPage.vue')
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
