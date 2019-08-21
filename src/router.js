import Vue from 'vue'
import VueRouter from 'vue-router'
import Signing from '@/views/Signing.vue'
import store from './store'

// Inject VueRouter plugin into Vue application
Vue.use(VueRouter)

// Function to ensure authentication
const requireAuth = (to, from, next) => {
  store
    .dispatch('isAuthenticated')
    .then(res => {
      if (res) {
        next()
      } else {
        next({ name: 'auth' })
      }
    })
}

// Define routes and router configuration
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/entrar',
      name: 'auth',
      component: Signing
    },
    {
      path: '/',
      component: () => import('@/views/Home.vue'),
      beforeEnter: requireAuth,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/app/Library.vue')
        },
        {
          path: 'meus-livros',
          name: 'myBooks',
          component: () => import('@/views/app/MyBooks.vue')
        },
        {
          path: 'meus-emprestimos',
          name: 'myLoans',
          component: () => import('@/views/app/MyLoans.vue')
        },
        {
          path: 'perfil',
          name: 'myProfile',
          component: () => import('@/views/app/MyProfile.vue')
        }
      ]
    }
  ]
})
