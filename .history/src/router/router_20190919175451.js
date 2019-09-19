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
      },
      {
        path: '/pre',
        name: 'pre',
        component: () => import(/* webpackChunkName: "dashbord" */ '../views/home/PreProcessing.vue')
      },
      {
        path: '/post',
        name: 'post',
        component: () => import(/* webpackChunkName: "dashbord" */ '../views/home/PostProcessing.vue')
      },
      {
        path: '/Transfer',
        name: 'transfer',
        component: () => import(/* webpackChunkName: "dashbord" */ '../views/home/TransferStation.vue')
      },
      {
        path: '/ad',
        name: 'ad',
        component: () => import(/* webpackChunkName: "dashbord" */ '../views/home/AdHoc.vue')
      },
      {
        path: '/recipe',
        name: 'recipe',
        component: () => import(/* webpackChunkName: "dashbord" */ '../views/home/RecipeManager.vue')
      },
      {
        path: '/indicator',
        name: 'indicator',
        component: () => import(/* webpackChunkName: "dashbord" */ '../views/home/Indicator.vue')
      },
      {
        path: '/setting',
        name: 'setting',
        component: () => import(/* webpackChunkName: "dashbord" */ '../views/home/Setting.vue')
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
