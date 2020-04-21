<template>
  <div>
    <div>
      <el-input
        @keyup.native="search"
        v-model="keyword"
        size="small"
        placeholder="请输入内容"
        style="width: 300px"/>
    </div>
    <div class="content-card" v-for="(item ,index) in resultList" :key="index">
      <span v-html="item.name" style="color:#000;"></span>
      <span><span v-html="item.address"></span></span>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  data () {
    return {
      keyword: '',
      deviceList: [
        {
          name: '王二小',
          address: '北京'
        },
        {
          name: '张三',
          address: '北京'
        },
        {
          name: '李四',
          address: '上海'
        },
        {
          name: '李小龙',
          address: '南京'
        }
      ],
      resultList: []
    }
  },
  mounted() {
    this.resultList = _.cloneDeep(this.deviceList);
  },
  methods: {
    search () {
      this.resultList = _.cloneDeep(this.deviceList);
      this.resultList.map((item) => {
        item.name = this.brightKeyword(item.name)
        item.address = this.brightKeyword(item.address)
      })
    },
    brightKeyword (val) {
      let keyword = this.keyword
      if (val.indexOf(keyword) !== -1) {
        return val.replace(keyword, `<font color='#42cccc'>${keyword}</font>`)
      } else {
        return val
      }
    }
  }
}
</script>
