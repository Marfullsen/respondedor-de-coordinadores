import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import TardaremosTanto from '../views/TardaremosTanto.vue';
import RespuestaFinal from '../views/RespuestaFinal.vue';
import NotFound from '../components/NotFound.vue';

const routes = [
  {
    path: '/',
    redirect: '/tardaremos_tanto',
  },
  {
    path: '/inicio',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/tardaremos_tanto',
    name: 'TardaremosTanto',
    component: TardaremosTanto,
  },
  {
    path: '/respuesta_final',
    name: 'RespuestaFinal',
    component: RespuestaFinal,
  },
  {
    path: '/about',
    name: 'AboutMe',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutMe.vue'),
  },
  // pathMatch is the name of the param, e.g., going to /not/found yields
  // { params: { pathMatch: ['not', 'found'] }}
  // this is thanks to the last *, meaning repeated params and it is necessary if you
  // plan on directly navigating to the not-found route using its name
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
  // if you omit the last `*`, the `/` character in params will be encoded when resolving or pushing
  { path: '/:pathMatch(.*)', name: 'bad-not-found', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
