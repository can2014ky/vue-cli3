// import Home from '@/views/home/Index.vue'

export default [
  {
    path: '/',
    name: 'home',
    // component: Home
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Index.vue'),
    redirect: '/hello',
    children: [
      {
        path: '/hello',
        name: 'hello',
        component: () => import(/* webpackChunkName: "hello" */ '../views/home/Hello.vue')
      },
      {
        path: '/dashbord',
        name: 'dashbord',
        component: () => import(/* webpackChunkName: "dashbord" */ '../views/home/Dashbord.vue')
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
