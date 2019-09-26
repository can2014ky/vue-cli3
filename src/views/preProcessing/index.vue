<template>
  <div>
    <el-table
      :data="tableData.data"
      style="width: 100%">
      <template v-for="(item, index) in tableData.header">
        <el-table-column v-if="item.prop === 'selection'" :key="index"  type="selection" :width="item.width">
        </el-table-column>
        <el-table-column v-else-if="item.prop === 'options'" :label="item.label" :key="index"  type="options" :width="item.width">
            <template slot-scope="scope">
              <template v-for="(btn, idx) in tableData.options">
                <div :key='idx' class="btn">
                  <el-button
                  :size='btn.size'
                  :type="btn.type"
                  @click="operate(idx, scope.$index, scope.row)"
                >{{btn.label}}</el-button>
                </div>
              </template>
            </template>
        </el-table-column>
        <el-table-column v-else-if="item.prop === 'move'" :label="item.label" :key="index"  type="options" :width="item.width">
            <template slot-scope="scope">
              <template v-for="(btn, idx) in tableData.move">
                <div :key='idx' class="btn">
                  <el-button
                  :size='btn.size'
                  :type="btn.type"
                  @click="move(idx, scope.$index, scope.row)"
                >{{btn.label}}</el-button>
                </div>
              </template>
            </template>
        </el-table-column>
        <el-table-column v-else-if="item.prop === 'link'" sortable :key="index" :label="item.label" show-overflow-tooltip :width="item.width">
            <template slot-scope="scope">
              <a :href="scope.row.link" target="blank">{{scope.row.link}}</a>
            </template>
          </el-table-column>
        <el-table-column v-else-if="item.prop === 'tags'" sortable :key="index" :label="item.label" :width="item.width">
            <template slot-scope="scope">
              <div ref="tagContainer" @click="cliclTagContainer(scope.$index, scope.row)" class="tag-container">
                <el-tag
                  :key="idx"
                  v-for="(item, idx) in scope.row.tags"
                  closable
                  :disable-transitions="false"
                  @close="handleClose(idx, scope.$index, scope.row)">
                  {{item}}
                </el-tag>
                <el-input
                  ref="elInput"
                  v-model="scope.row.inputValue"
                  size="small"
                  @keyup.enter.native="handleInputConfirm(scope.$index, scope.row)">
                </el-input>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            v-else
            sortable
            :key="index"
            :prop="item.prop"
            :label="item.label"
            :width="item.width">
          </el-table-column>
      </template>
    </el-table>

    <el-dialog :title="dialog.title" :visible.sync="dialog.dialogVisible">
      <el-input v-model="dialog.article" :autosize="{ minRows: 8, maxRows: 8}" type="textarea"></el-input>
      <el-input v-model="dialog.ioc" :autosize="{ minRows: 4, maxRows: 4}" type="textarea"></el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialog.dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialog.dialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page.currentPage"
        :page-size="page.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        currentRow: '',
        page: {
          currentPage: 1,
          pageSize: 20,
          total: 0
        },
        dialog: {
          title: '文章标题',
          article: '',
          ioc: '',
          dialogVisible: false
        },
        tableData: {
          data: [
            {
              date: '2016-05-02',
              name: 'name',
              source: 'adHOc',
              link: 'https://www.baidu.com/',
              tags: [],
              inputValue: '',
              title: 'wwe',
              article: 'ewe',
              ioc: 'wee'
            },
            {
              date: '2016-05-04',
              name: 'name',
              source: 'adHOc',
              link: 'https://www.baidu.com/',
              tags: [],
              inputValue: '',
              title: '33',
              article: '34',
              ioc: '45'
            },
            {
              date: '2016-05-01',
              name: 'name',
              source: 'adHOc',
              link: 'https://www.baidu.com/',
              tags: [],
              inputValue: '',
              title: '',
              article: '',
              ioc: ''
            },
            {
              date: '2016-05-03',
              name: 'name',
              source: 'adHOc',
              link: 'https://www.baidu.com/',
              tags: [],
              inputValue: '',
              title: '',
              article: '',
              ioc: ''
            }
          ],
          header: [
            // {
            //   prop: 'selection',
            //   width: '55'
            // },
            {
              prop: 'date',
              label: '日期',
              width: '120'
            },
            {
              prop: 'name',
              label: '文章名称',
              width: '120'
            },
            {
              prop: 'source',
              label: '来源',
              width: '180',
              tooltip: false
            },
            {
              prop: 'link',
              label: '原始链接'
            },
             {
              prop: 'tags',
              label: '标签',
              width: '180'
            },
            {
              prop: 'options',
              label: '操作',
              width: '120'
            },
            {
              prop: 'move',
              label: '移动',
              width: '120'
            }
          ],
          options: [
            {
              size: 'mini',
              type: 'success',
              label: '手动摘取'
            },
            {
              size: 'mini',
              type: 'success',
              label: '全选'
            }
          ],
           move: [
            {
              size: 'mini',
              type: 'success',
              label: '删除'
            },
            {
              size: 'mini',
              type: 'success',
              label: '递交'
            },
            {
              size: 'mini',
              type: 'success',
              label: '多选'
            }
          ]
        }
      }
    },
    mounted() {
      this.page.total = this.tableData.data.length
    },
    methods: {
      // 操作
      operate(index, $index, row) {
        let { data } = this.tableData
        this.currentRow = $index
        if (index === 0) { // 摘取
          this.dialog.dialogVisible = true;
          this.dialog.title = data[$index].title
          this.dialog.article = data[$index].article
          this.dialog.ioc = data[$index].ioc
        }
        if (index === 1) {
          // 全选
        }
      },
      // 移动
      move(index, $index, row) {
        if (index === 0) {
          this.tableData.data.splice($index, 1)
        }
        if (index === 1) {
          // 递交
        }
        if (index === 2) {
          // 多选
        }
      },
      // 标签
      handleInputConfirm($index, row) { // 添加tag标签
        let inputValue = row.inputValue;
        let { data } = this.tableData
        if (inputValue) {
          data[$index].tags.push(inputValue);
        }
        data[$index].inputValue = '';
      },
      handleClose(index, $index, row) { // 删除tag标签
        let { data } = this.tableData
        data[$index].tags.splice(index, 1);
      },
      cliclTagContainer(index, row) { // input聚焦输入
        this.$refs.elInput[index].$refs.input.focus()
      },
      // 分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>
<style lang="scss" scope>
  a {
    color: blue;
  }
  .btn {
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .tag-container {
    width: 100%;
    height: fit-content;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 0px 4px;
    overflow: auto;
  }
  .el-input__inner {
    height: 16px;
    margin: 0;
    border: none;
    padding: 0;
    background-color: inherit;
  }
  .el-textarea  {
    margin-bottom: 20px;
  }
  .el-tag {
    margin-right: 4px;
  }
  .pagination {
    margin-top: 10px;
  }
</style>
