<template>
  <div class="home">
    <header v-if='false' class="header">
      <el-button type="primary" disabled>头部</el-button>
      <el-button type="primary" disabled>主要按钮</el-button>
      <el-button type="success" disabled>成功按钮</el-button>
      <i class="iconfont  icon-fail"></i>
      <i class="iconfont  icon-address"></i>
      <i class="iconfont  icon-success"></i>
    </header>
    <div class="main">
      <div class="left">
        <p class="title">G O S I N T</p>
        <el-menu
          class="self-el-menu"
          :default-active="activeIndex"
          unique-opened
          router>
          <template v-for="(item, index) in tabList">
            <el-submenu v-if="item.hasNode" :index="item.url" :key="index">
              <template slot="title">
                <span>{{item.title}}</span>
              </template>
              <el-menu-item-group>
                <template v-for="(child, idx) in item.children">
                  <el-menu-item :index="child.url" :key='idx'>{{child.title}}</el-menu-item>
                </template>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item v-else :index="item.url" :key="index">
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '/dashbord',
      index: '',
      tabList: [
         {
          hasNode: false,
          title: 'Dashbord',
          url: '/dashbord'
        },
        {
          hasNode: false,
          title: 'Pre-Processing',
          url: '/pre'
        },
        {
          hasNode: false,
          title: 'Post-Processing',
          url: '/post'
        },
        {
          hasNode: false,
          title: 'Transfer Station',
          url: '/transfer'
        },
        {
          hasNode: false,
          title: 'Ad Hoc Operations',
          url: '/ad'
        },
        {
          hasNode: false,
          title: 'Recipe Manager',
          url: '/recipe'
        },
        {
          hasNode: false,
          title: 'Indicator Metrics',
          url: '/indicator'
        },
        {
          hasNode: true,
          title: 'Setting',
          url: '/1',
          children: [
            {
              hasNode: false,
              title: '设置一',
              url: '/setting'
            },
            {
              hasNode: false,
              title: '设置二',
              url: '/pre'
            },
            {
              hasNode: false,
              title: '设置三',
              url: '/indicator'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="scss" scope>
  .header {
    height: 80px;
    line-height: 80px;
    background-color: #ccc;
    padding: 0 20px;
  }
  .main {
    display: flex;
    height: 100vh;
    .left {
      max-height: 100%;
      overflow: auto;
      flex-basis: 240px;
      border-right: 1px solid#e6e6e6;
      .self-el-menu {
        max-height: calc(100% - 50px);
        border-right: none;
      }
      .title {
        height: 50px;
        line-height: 50px;
        font-size: 28px;
        padding-left: 20px;
        box-sizing: border-box;
      }
    }
    .right {
      max-height: 100%;
      overflow: auto;
      padding: 20px;
      flex: 1;
    }
  }
</style>
