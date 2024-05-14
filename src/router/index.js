import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/Register',
      name:'DynamicRouId',
      props:true,
      component:()=>import('../views/login/Register.vue')
    },
  ]
})

export default router
