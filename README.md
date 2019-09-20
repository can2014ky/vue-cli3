# vue-cli3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
date: 2019/9/18

### 调整项目结构
![目录结构新增或调整的文件](./src/assets/img/目录结构调整的文件.jpg)

### 完善vue.config.js配置文件
该文件中，有的是开发环境需要的配置，有的是生产环境需要的配置，vue-cli3将他们参杂在一起配置了

### 搭建首页及创建相关组件

### 安装与按需引入 element-ui
**安装：**
vue add element    注意，win下要使用 winpty vue.cmd add element
**引入：**
import { Dialog, Menu } from 'element-ui'
Vue.use(Dialog)
Vue.use(Menu)
提示：按需加载element的样式不生效，需要安装插件 install babel-plugin-component -D
