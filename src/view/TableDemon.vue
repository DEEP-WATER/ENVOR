<template>
  <div>
    <el-button type="primary" icon="document" @click="handleDownload" :loading="downloadLoading" style="margin: 10px;">导出已选项</el-button>
    <div style="width: 596px">
        <el-table
        ref="multipleTable"
        :data="tableData3"
        border
        tooltip-effect="dark"
        :default-sort = "{prop: 'date', order: 'descending'}"
        @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
            prop="date"
            label="日期"
            align="center"
            sortable
            width="120">
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            align="center"
            width="120">
            </el-table-column>
            <el-table-column
            prop="address"
            label="地址"
            align="center"
            width="300">
            </el-table-column>
        </el-table>
    </div>
    <div style="margin-top: 20px">
        <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: [],
        downloadLoading: false
      }
    },

    methods: {
      toggleSelection (rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      handleDownload () {
        if (this.multipleSelection.length) {
          console.log(111)
          this.downloadLoading = true
        } else {
          this.$message({
            message: '请至少选择一项',
            type: 'warning'
          })
        }
      }
    }
  }
</script>