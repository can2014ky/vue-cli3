// import Home from '@/views/home/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    // component: Home
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue'),
    redirect: { path: '/hello' },
    children: [
      {
        path: 'hello',
        name: 'hello',
        component: import(/* webpackChunkName: "home" */ '../views/home/hello.vue')
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
