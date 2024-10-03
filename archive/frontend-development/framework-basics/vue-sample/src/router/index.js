import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      children: [
        {
          path: '/',
          component: () => import('../components/Home.vue'),
        },
        {
          path: '/beers',
          component: () => import('../components/lists/BeerList.vue'),
        },
        {
          path: '/beers2',
          component: () => import('../components/lists/BeerList2.vue'),
        },
        {
          path: '/beers3',
          component: () => import('../components/lists/BeerList3.vue'),
        },
        {
          path: '/beers/:beerId',
          component: () => import('../components/details/BeerDetail.vue'),
        }
      ]
    }
  ]
})

export default router
