<template>
  <div>
    <h1>show message</h1>
    
  <el-row :gutter="10">
    <el-col :span="10" :offset="2" :push="2" :xs="3" :sm="6" :md="10">
      <div class="grid-content bg-purple-dark">
        <i class="el-icon-edit">
        </i>{{firstName}}
      </div>
      <div  v-bind:class="classObject"></div>
    </el-col>
  </el-row>

  </div>
</template>

<script>
  export default {
    name: 'tab1',
    data () {
      return {
        title: 'message',
        firstName: 'Foo',
        lastName: 'Bar',
        isActive: true,
        error: null
      }
    },
    computed: {
      fullName: {
        // getter
        get: function () {
          return this.firstName + ' ' + this.lastName
        },
        // // setter
        set: function (newValue) {
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
      },
      classObject: function () {
        return {
          active: this.isActive && !this.error,
          'text-danger': this.error && this.error.type === 'fatal'
        }
      }
    },
    methods: {
      reversedMessage () {
        return this.title.split('').reverse().join('')
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

