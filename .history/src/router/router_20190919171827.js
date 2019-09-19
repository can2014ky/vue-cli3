// import Home from '@/views/home/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    // component: Home
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue'),
    children: [
      {
        path: '',
        name: 'index',
        component: import(/* webpackChunkName: "home" */ '../views/home/Home.vue')
      },
      {
        path: '/Dashbord',
        name: '',
        component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
