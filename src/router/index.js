import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/layout/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/layout/Contact.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/layout/About.vue'),
  },
  {
    path: '*',
    redirect: '/',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  linkExactActiveClass: 'active-exact',
  linkActiveClass: 'link-active',
});

export default router;
