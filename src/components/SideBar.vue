<template>
    <div class="left">
      <p @click="goHome" class="title">G O S I N T</p>
      <el-menu
        class="self-el-menu"
        :default-active="$route.path"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        unique-opened
        router>
        <template v-for="(item, index) in barList">
          <el-submenu v-if="item.hasNode" :index="item.url" :key="index">
            <template slot="title">
              <i class="iconfont" :class="item.icon"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item-group>
              <template v-for="(child, idx) in item.children">
                <el-menu-item :index="child.url" :key='idx'>
                  <i class="iconfont" :class="child.icon"></i>
                  <span>{{child.title}}</span>
                </el-menu-item>
              </template>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item v-else :index="item.url" :key="index">
            <i class="iconfont" :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
</template>
<script>
import { getNewsLetters } from '@/api/home'
export default {
  data() {
    return {
      barList: [
         {
          hasNode: true,
          title: 'Dashbord',
          url: '/dashbord',
          icon: 'icon-homepage',
          children: [
            {
              hasNode: false,
              title: 'Dashbord1',
              url: '/dashbord/dash1',
              icon: 'icon-integral'
            },
            {
              hasNode: false,
              title: 'Dashbord2',
              url: '/dashbord/dash2',
              icon: 'icon-address'
            },
            {
              hasNode: false,
              title: 'File',
              url: '/dashbord/file',
              icon: 'icon-address'
            }
          ]
        },
        {
          hasNode: false,
          title: 'Pre-Processing',
          url: '/pre',
          icon: 'icon-orderclick'
        },
        {
          hasNode: false,
          title: 'Setting',
          url: '/setting',
          icon: 'icon-bevigilant'
        }
      ]
    }
  },
  methods: {
    async goHome() {
      const res = await getNewsLetters({id: 123})
      console.log(99, res)
      this.$router.push({name: 'home'})
    }
  }
}
</script>
<style lang="scss" scope>
  .left {
      height: 100vh;
      overflow: auto;
      background-color: #545c64;
      overflow: auto;
      .self-el-menu {
        max-height: calc(100% - 50px);
        border-right: none
      }
      .title {
        height: 50px;
        line-height: 50px;
        font-size: 28px;
        padding-left: 20px;
        box-sizing: border-box;
        color: #fff;
        &:hover {
          cursor: pointer;
        }
      }
      i {
        margin-right: 8px;
      }
    }
</style>
