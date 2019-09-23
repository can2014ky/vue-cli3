// import Home from '@/views/home/Index.vue'
export default [
  {
    path: '/',
    name: 'home',
    // component: Home
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue'),
    redirect: {name: 'hello'},
    children: [
      {
        path: '',
        name: 'hello',
        component: () => import(/* webpackChunkName: "hello" */ '../views/home/components/Hello.vue')
      },
      {
        path: '/dashbord',
        name: 'dashbord',
        component: () => import(/* webpackChunkName: "dashbord" */ '../views/home/components/Dashbord.vue')
      },
      {
        path: '/pre',
        name: 'pre',
        component: () => import(/* webpackChunkName: "dashbord" */ '../views/home/components/PreProcessing.vue')
      },
      {
        path: '/post',
        name: 'post',
        component: () => import(/* webpackChunkName: "dashbord" */ '../views/home/components/PostProcessing.vue')
      },
      {
        path: '/transfer',
        name: 'transfer',
        component: () => import(/* webpackChunkName: "dashbord" */ '../views/home/components/TransferStation.vue')
      },
      {
        path: '/ad',
        name: 'ad',
        component: () => import(/* webpackChunkName: "dashbord" */ '../views/home/components/AdHoc.vue')
      },
      {
        path: '/recipe',
        name: 'recipe',
        component: () => import(/* webpackChunkName: "dashbord" */ '../views/home/components/RecipeManager.vue')
      },
      {
        path: '/indicator',
        name: 'indicator',
        component: () => import(/* webpackChunkName: "dashbord" */ '../views/home/components/Indicator.vue')
      },
      {
        path: '/setting',
        name: 'setting',
        component: () => import(/* webpackChunkName: "dashbord" */ '../views/home/components/Setting.vue')
      }
    ]
  },
  {
    path: '*',
    name: 'error',
    redirect: '/'
  }
]
