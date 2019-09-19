<template>
  <div class="home">
    <header class="header">头部</header>
    <div class="main">
      <div class="left">
        <div v-for='(item, index) in tabLists' :key="index" class="tab-item">{{item}}</div>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabLists: ['Dashbord', 'Pre-Processing', 'Post-Processing', 'Transfer Station', 'Ad Hoc Operations', 'Recipe Manager', 'Indicator Metrics', 'Setting']
    }
  }
}
</script>
<style lang="scss">
  .header {
    height: 80px;
    line-height: 80px;
    background-color: #ccc;
    padding: 0 20px;
  }
  .main {
    display: flex;
    .left {
      flex-basis: 200px;
      height: calc(100vh - 80px);
      border-right: 1px solid #ccc;
      padding: 20px;
      .tab-item {
        line-height: 32px;
      }
    }
    .right {
      padding: 20px;
    }
  }
</style>
