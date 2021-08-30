import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import TardaremosTanto from '../views/TardaremosTanto.vue';
import RespuestaFinal from '../views/RespuestaFinal.vue';
import AboutMe from '../views/AboutMe.vue';
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
    component: AboutMe,
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
  { path: '/:pathMatch(.*)', name: 'bad-not-found', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(() => {
  window.scrollTo(0, 0);
});

export default router;
