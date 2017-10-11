<template>
  <div>
    <template>
      <div class="block" style="float: left; margin: 10px;">
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions0">
        </el-date-picker>
      </div>
    </template>
    <el-button class="filter-item" type="primary" icon="search" @click="handleSearch">搜索</el-button>
    <el-button class="filter-item" style="margin-left: 10px;" @click="handleCreate" type="primary" icon="edit">添加</el-button>
    <el-button type="primary" icon="document" @click="handleDownload" :loading="downloadLoading" style="margin: 10px;">导出已选项</el-button>
    <div>
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
            v-for="(item,index) in tableData3Label"
            :prop="tableData3Arr[index]"
            :key="index"
            :label="item"
            sortable
            align="center"
            width="300">
            </el-table-column>
            <el-table-column align="center" label="操作" width="150">
              <template scope="scope">
                <el-button size="small" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              </template>
            </el-table-column>
        </el-table>
    </div>
    <div style="margin-top: 20px">
        <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
    <div>
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="地址" :label-width="formLabelWidth">
            <el-input v-model="form.address" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="makeSure">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import tableData3 from '@/mock/tableData3'
  import format from '@/utils/format'
  export default {
    data () {
      var tableData3Arr = []
      var tableData3Label = ['日期', '姓名', '地址']
      var saveData = []
      for (var a = 0; a < tableData3.length; a++) {
        saveData.push(tableData3[a])
      }
      for (var key in tableData3[0]) {
        tableData3Arr.push(key)
      }
      return {
        tableData3: tableData3,
        saveData: saveData,
        multipleSelection: [],
        downloadLoading: false,
        tableData3Arr: tableData3Arr,
        tableData3Label: tableData3Label,
        dialogFormVisible: false,
        value1: '',
        pickerOptions0: {},
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          address: '',
          index: 0
        },
        dataItem: {
          date: '',
          name: '',
          address: ''
        },
        formLabelWidth: '120px'
      }
    },

    methods: {
      handleSearch () {
        var searchData = []
        for (var i = 0; i < tableData3.length; i++) {
          if (tableData3[i].date === format(this.value1)) {
            searchData.push(tableData3[i])
          }
        }
        if (searchData.length !== 0) {
          tableData3.splice(0, tableData3.length)
          for (var c = 0; c < searchData.length; c++) {
            tableData3.push(searchData[c])
          }
        } else {
          tableData3.splice(0, tableData3.length)
          for (var k = 0; k < this.saveData.length; k++) {
            tableData3.push(this.saveData[k])
          }
        }
        // console.log(searchData)
        // console.log(tableData3)
        // console.log(this.saveData)
      },
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
          // console.log(111)
          this.downloadLoading = true
        } else {
          this.$message({
            message: '请至少选择一项',
            type: 'warning'
          })
        }
      },
      handleEdit (index, row) {
        this.dialogFormVisible = true
        this.dialogStatus = 'edit'
        this.form.index = index
        this.form.row = row
        console.log(index, row)
      },
      handleCreate () {
        this.dialogStatus = 'create'
        this.dialogFormVisible = true
      },
      makeSure () {
        if (this.dialogStatus === 'create') {
          this.resetTemp()
        }
        if (this.dialogStatus === 'edit') {
          this.update()
        }
        this.dialogFormVisible = false
      },
      resetTemp () {
        tableData3.push({date: format(new Date()), name: this.form.name, address: this.form.address})
        // console.log(tableData3)
      },
      update () {
        const rowIndex = tableData3.indexOf(this.form.row)
        tableData3.splice(rowIndex, 1, {
          date: this.form.row.date,
          name: this.form.name !== '' ? this.form.name : this.form.row.name,
          address: this.form.address !== '' ? this.form.address : this.form.row.address
        })
        // 直接赋值方法有问题，数据没有存进 __ob__:Observer 里面
        // tableData3[rowIndex] = {
        //   date: this.form.row.date,
        //   name: this.form.name !== '' ? this.form.name : this.form.row.name,
        //   address: this.form.address !== '' ? this.form.address : this.form.row.address
        // }
        // console.log(tableData3)
        console.log(tableData3[rowIndex])
      }
    }
  }
</script>