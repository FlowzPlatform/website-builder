import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Login from '@/views/login'
import Register from '@/views/register'
import ForgotPassword from '@/views/ForgotPassword'
import Homepage from '@/views/Homepage'
import UserDashboard from '@/views/UserDashboard'
import EmailVerification from '@/views/EmailVerification'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/user-dashboard',
      name: 'UserDashboard',
      component: UserDashboard,
      meta: { description: 'User Dashboard', requiresAuth: true },
    },
    {
      path: '/editor',
      name: 'Index',
      component: Index,
      meta: { description: 'Website Editor', requiresAuth: true },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/email-verification',
      name: 'email-verification',
      component: EmailVerification
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/forgot_password',
      name: 'ForgotPassword',
      component: ForgotPassword
    }
  ]
})
