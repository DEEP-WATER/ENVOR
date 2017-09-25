<template>
  <div class="app-container calendar-list-container" style="padding: 20px;">
    <el-table
    :data="tableData"
    border
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="number"
      label="序号"
      sortable
      align="center"
      width="100">
    </el-table-column>
    <el-table-column
      prop="date_give"
      label="配送日期"
      sortable
      align="center"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="用户名"
      sortable
      align="center"
      width="100">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="手机号"
      align="center"
      width="150">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      align="center"
      width="250"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="date_pay"
      label="支付完成日期"
      sortable
      align="center"
      width="150">
    </el-table-column>
    <el-table-column
      prop="pay_status"
      label="支付状态"
      align="center"
      width="150">
    </el-table-column>
    <el-table-column
      prop="shopName"
      label="商店名称"
      align="center"
      width="150">
    </el-table-column>
    <el-table-column
      prop="shouldPay"
      label="应付金额"
      sortable
      align="center"
      width="150">
    </el-table-column>
    <el-table-column
      prop="realPay"
      label="实付金额"
      sortable
      align="center"
      width="150">
    </el-table-column>
    <el-table-column
      prop="paytype"
      label="支付方式"
      align="center"
      width="150">
    </el-table-column>
    <el-table-column
      prop="integration"
      label="积分支付金额"
      align="center"
      width="150">
    </el-table-column>
    <el-table-column
      prop="coupon"
      label="优惠券支付金额"
      align="center"
      width="150">
    </el-table-column>
    <el-table-column
      prop="pay_serial_number"
      label="支付系统流水号"
      align="center"
      width="150">
    </el-table-column>
    <el-table-column
      prop="order_sign"
      label="订单标记"
      align="center"
      width="100">
    </el-table-column>
    <el-table-column
      prop="has_invoice"
      label="是否已开发票"
      align="center"
      width="130">
    </el-table-column>
    <el-table-column
      prop="invoice_serial_number"
      label="发票流水号"
      align="center"
      width="150">
    </el-table-column>
    <el-table-column
      prop="date_comment"
      label="评价时间"
      sortable
      align="center"
      width="150">
    </el-table-column>
    <el-table-column
      prop="remark"
      label="备注"
      align="center"
      width="150">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableData: [{
          number: 1,
          date_pay: '2016-05-01',
          name: '吴彦祖',
          phone: '110',
          address: '上海市普陀区金沙江路 1518 弄',
          date_give: '2016-10-01',
          pay_status: '支付完成',
          shopName: '阿里巴巴',
          shouldPay: '999',
          realPay: '999',
          paytype: '支付宝',
          integration: '0',
          coupon: '0',
          pay_serial_number: '88888888',
          order_sign: '正常',
          has_invoice: '是',
          invoice_serial_number: '00000000',
          remark: '很好',
          date_comment: '2016-09-25'
        }, {
          number: 2,
          date_pay: '2016-05-02',
          name: '周杰伦',
          phone: '120',
          address: '上海市普陀区金沙江路 1517 弄',
          date_give: '2016-10-01',
          pay_status: '支付完成',
          shopName: '阿里巴巴',
          shouldPay: '9999',
          realPay: '9999',
          paytype: '支付宝',
          integration: '0',
          coupon: '0',
          pay_serial_number: '88888886',
          order_sign: '正常',
          has_invoice: '否',
          invoice_serial_number: '00000001',
          remark: '',
          date_comment: '2016-09-25'
        }, {
          number: 3,
          date_pay: '2016-05-03',
          name: '周星驰',
          phone: '114',
          address: '上海市普陀区金沙江路 1519 弄',
          date_give: '2016-10-01',
          pay_status: '支付完成',
          shopName: '阿里巴巴',
          shouldPay: '99',
          realPay: '99',
          paytype: '微信',
          integration: '0',
          coupon: '0',
          pay_serial_number: '18888888',
          order_sign: '正常',
          has_invoice: '是',
          invoice_serial_number: '00000002',
          remark: '',
          date_comment: ''
        }, {
          number: 4,
          date_pay: '2016-05-04',
          name: '成龙',
          phone: '112',
          address: '上海市普陀区金沙江路 1516 弄',
          date_give: '2016-10-01',
          pay_status: '支付完成',
          shopName: '阿里巴巴',
          shouldPay: '999',
          realPay: '999',
          paytype: '现金',
          integration: '0',
          coupon: '0',
          pay_serial_number: '88888880',
          order_sign: '正常',
          has_invoice: '否',
          invoice_serial_number: '00000003',
          remark: '',
          date_comment: ''
        }]
      }
    },
    methods: {
      formatter (row, column) {
        return row.address
      }
    }
  }
</script>

