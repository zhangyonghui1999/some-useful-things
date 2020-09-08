<template>
  <div class="element">
    <el-collapse v-model="activeNames" @change="handleChange" accordion>
      <el-collapse-item title="1. 使用 vue add element 引入组件不生效" name="1">
        <div>如果引入 ele 之后，在页面测试不生效，此时需要重启服务，重启之后即可显示正常情况</div>
      </el-collapse-item>
      <el-collapse-item title="2. 按需加载引入组件 Message ，每次进入页面时都会弹出空的message框" name="2">
        <div>解决方式：</div>
        <div>1. 将使用 Vue.use(Message) 修改为使用 Vue.component(Message)</div>
        <div>Vue.prototype.$message = Message</div>
        <div>2. 不使用 Vue.use(Message) 或者 Vue.component(Message)</div>
        <div>在import后，直接Vue.prototype.$message = Message(官方示例)</div>
        <div>注：引入第三方组件库，应该严格按照第三方组件库的方式来，不要想当然地去自己写(官方地址：https://element.eleme.io/#/zh-CN/component/quickstart)</div>
      </el-collapse-item>
      <el-collapse-item title="3. table表格中的输入框如何增加校验" name="3">
        <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="textarea">
        </el-input>
      </el-collapse-item>
      <el-collapse-item title="ELE - 4" name="4">
        <div></div>
        <div></div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeNames: '',
      textarea:
      `<el-form :model="form">
  <el-table :data="form.tableData">
    <el-table-column prop="name" label="姓名">
      <template slot-scope="scope">
        <el-form-item :prop=" 'tableData' + scope.$index + '.name' " :rules="rules.name”>
          <el-input v-model="scope.row.name"></el-input>
        </el-form-item>
      </template>
    </el-table-column>
  </el-table>
</el-form>`
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss">
  .element {
    .el-collapse {
      .el-collapse-item {
        .el-collapse-item__header {
          padding-left: 15px;
          padding-right: 15px;
          font-weight: 600;
        }
        .el-collapse-item__content {
          padding-left: 15px;
          padding-right: 15px;
          padding-bottom: 15px;
        }
      }
    }
  }
</style>
