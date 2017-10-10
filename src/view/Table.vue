<template>
  <div class="app-container calendar-list-container" style="padding: 20px;">
    <el-table
      :data="tableData"
      border
    >
      <el-table-column
        v-for="(item,index) in labels"
        :key="index"
        :label="item"
        :prop="datas[index]"
        sortable
        align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import tableData from '@/mock/table'// 从mock读取的数据
  export default {
    data () {
      var tableDataArr = []
      for (var key in tableData[0]) { // 遍历json对象，获取key值
        tableDataArr.push(key) // 将key值放到新数组里
      }
      return {
        labels: ['序号', '日期', '姓名', '地址'],
        tableData: tableData,
        datas: tableDataArr // 这里返回的就是后台传过来的 json的key值，因为 el-table-column 组件 prop 的就是 json的key值
      }
    },
    methods: {
      formatter (row, column) {
        return row.address
      }
    }
  }
</script>

