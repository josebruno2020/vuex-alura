import Vue from 'vue';
import VueRouter from 'vue-router';
import Gerentes from '../views/Gerentes.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: Gerentes
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
  }
]

const router = new VueRouter({
  routes
})

export default router
