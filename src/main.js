import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './plugins/element.js'
import { Button, Menu, Submenu, MenuItem, MenuItemGroup, Table, TableColumn } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/font/iconfont.css'
import './assets/css/reset.css'

Vue.use(Button)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Table)
Vue.use(TableColumn)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
