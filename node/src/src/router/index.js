import { createRouter, createWebHistory } from 'vue-router'
import AdminDashboard from '../views/admin/AdminDashboard.vue'
import RegisterUser from '../views/RegisterUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin/dashboard',
      name: 'AdminDashboard',
      component: AdminDashboard
    },
    {
      path: '/register',
      name: 'registerUser',
      component: RegisterUser
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
