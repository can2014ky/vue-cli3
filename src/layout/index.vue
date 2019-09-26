<template>
  <div>
    <el-row>
      <el-col class="side-bar" :span="4">
        <side-bar></side-bar>
      </el-col>
      <el-col class="main-content" :span="20">
        <el-breadcrumb class="breadcrumb" separator="/">
          <template v-for="(item, index) in $route.matched">
            <el-breadcrumb-item v-if="item.meta.name" :key="index">
              <span class="title">{{item.meta.name}}</span>
            </el-breadcrumb-item>
          </template>
        </el-breadcrumb>
        <div>
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import SideBar from '_c/SideBar'
export default {
  components: {
    SideBar
  }
}
</script>
<style lang="scss" scope>
  .main-content {
    padding: 20px;
    height: 100vh;
    overflow: auto;
    .breadcrumb {
      margin-bottom: 10px;
      .title {
        font-size: 24px;
      }
    }
  }
</style>
