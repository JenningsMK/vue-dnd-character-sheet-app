import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

import { updateTitle, insertMetaTags } from './insertMetaTags.ts';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'DnD Player App',
      metaTags: [
        {
          name: 'color-scheme',
          content: 'light dark'
        }
      ]
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  updateTitle(to.meta);
  insertMetaTags(to.meta);

  next();
});

export default router;
