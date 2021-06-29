import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../state/store';

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
    meta: {
        publica:true
    },
  },
  {
    path: '/login',
    name:'login',
    component:() => import('../views/Login.vue'),
    meta: {
        publica:true
    },
  },
  {
    path:'*',
    name:'notFound',
    component: () => import('../views/NotFound/NotFound.vue'),
    meta: {
        publica:true
    },
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((route, routeFrom, routeNext) => {
    if(!route.meta.publica && !store.state.token) {
        return routeNext({path:'/login'})
    }
    routeNext();
});

export default router
