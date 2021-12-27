export const routes = [
  {
    path: '/',
    name: 'main-page',
    component: () => import(/* webpackChunkName: "main" */ '../views/main-page/main-page.vue'),
  },
  {
    path: '/movie-detail',
    name: 'movie-detail',
    component: () => import(/* webpackChunkName: "movieDetail" */ '../views/movie-detail/movie-detail.vue'),
  },
]