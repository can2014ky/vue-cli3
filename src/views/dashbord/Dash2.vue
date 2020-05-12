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
    <div>
      <div>类型二：借助 vue-text-highlight 插件</div>
      <div>
        <TextHighlight :queries="queries">{{ description }}</TextHighlight>
      </div>
    </div>
    <div>
      <div>类型三：正则匹配</div>
      <div v-html="str"></div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import TextHighlight from 'vue-text-highlight';

export default {
  components: {
    TextHighlight
  },
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
      resultList: [],
      // 类型二
      queries: ['birds', 'scatt', '<H3>'],
      description: '<h3>Tropical</h3> birds scattered as Drake veered the Jeep <html>sffsd</html>',
      str: 'Http version 1.0 name'
    }
  },
  mounted() {
    this.resultList = _.cloneDeep(this.deviceList);
    this.heightLight(this.str, 'h');
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
    },
    heightLight(string, keyword) {
      const reg = new RegExp(keyword, 'gi');
      string = string.replace(reg, function(txt){
          return `<font color='#F56C6C'>${txt}</font>`;
      })
      this.str = string;
    }
  }
}
</script>
