import { createRouter, createWebHistory } from 'vue-router';
import CharacterSelection from '../views/CharacterSelection.vue';

import { updateTitle } from './insertMetaTags';

const routes = [
  {
    path: '/',
    name: 'CharacterSelection',
    component: CharacterSelection,
    meta: {
      title: 'DnD Player App'
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
  updateTitle(to);

  next();
});

export default router;
