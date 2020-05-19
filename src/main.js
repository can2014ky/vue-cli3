import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './plugins/element.js'
import { Button, Menu, Submenu, MenuItem, MenuItemGroup, Table, TableColumn, Input, Dialog, Pagination, Row, Col, Breadcrumb, BreadcrumbItem, Tag, Message } from 'element-ui'
import '@/assets/font/iconfont.css'
import './assets/css/reset.css'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import VueHighcharts from 'vue-highcharts';
import Highcharts from 'highcharts';
import loadHighchartsMore from 'highcharts/highcharts-more.js';
// import xss from 'xss';
Vue.use(VueHighcharts, { Highcharts });
loadHighchartsMore(Highcharts);


Vue.use(Button)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.use(Row)
Vue.use(Col)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.prototype.$message = Message;
// use
Vue.use(mavonEditor)
// Vue.prototype.xss = xss;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
