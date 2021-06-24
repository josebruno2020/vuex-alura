import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: () => import('../views/Gerentes.vue')
  },
  {
    path: '/cadastre-se',
    name: 'usuario.novo',
    component:() => import('../views/NovoUsuario.vue'),
  },
  {
    path: '/login',
    name:'login',
    component:() => import('../views/Login.vue')
  },
  {
    path:'*',
    name:'notFound',
    component: () => import('../views/NotFound/NotFound.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router
