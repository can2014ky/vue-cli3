// import Home from '@/views/home/Index.vue'
import Layout from '@/layout'
export default [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home'),
        meta: {
          name: '首页'
        }
      }
    ]
  },
  {
    path: '/dashbord',
    component: Layout,
    redirect: '/dashbord/dash1',
    meta: {
      name: 'dashbord'
    },
    children: [
      {
        path: 'dash1',
        name: 'Dash1',
        component: () => import(/* webpackChunkName: "dashbord" */ '@/views/dashbord/Dash1.vue'),
        meta: {
          name: 'dashbord1'
        }
      },
      {
        path: 'dash2',
        name: 'Dash2',
        component: () => import(/* webpackChunkName: "dashbord" */ '@/views/dashbord/Dash2.vue'),
        meta: {
          name: 'dashbord2'
        }
      },
      {
        path: 'file',
        name: 'File',
        component: () => import(/* webpackChunkName: "dashbord" */ '@/views/dashbord/File.vue'),
        meta: {
          name: 'file'
        }
      }
    ]
  },
  {
    path: '/pre',
    component: Layout,
    children: [
      {
        path: '',
        name: 'pre',
        component: () => import(/* webpackChunkName: "preProcessing" */ '@/views/preProcessing'),
        meta: {
          name: 'preProcessing'
        }
      }
    ]
  },
  {
    path: '/setting',
    component: Layout,
    children: [
      {
        path: '',
        name: 'setting',
        component: () => import(/* webpackChunkName: "setting" */ '@/views/setting'),
        meta: {
          name: 'setting'
        }
      }
    ]
  },
  {
    path: '*',
    name: '404',
    redirect: '/'
  }
]
