<template>
  <div>
    <h1>show message</h1>
    
  <el-row :gutter="10">
    <el-col :span="10" :offset="2" :push="2" :xs="3" :sm="6" :md="10" :tag="a">
      <div class="grid-content bg-purple-dark">
        <i class="el-icon-edit">
        </i>
      </div>
    </el-col>
  </el-row>

  </div>
</template>

<script>
  export default {
    name: 'layout-container',
    data () {
      return {
        title: 'message'
      }
    }
  }
</script>

<style scoped>

.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

</style>

