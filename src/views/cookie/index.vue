<template>
  <div>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="1. 种cookie问题" name="1">
        <div>打开控制台 -> application -> cookies -> http://localhost:8080 -> 清除其他无用cookie -> 将 name、value、domain分别填写上 -> 查看ajax请求 -> 会看到请求头中存在刚才填写的cookie已经存在并随ajax请求发送到了服务端</div>
      </el-collapse-item>
      <el-collapse-item title="反馈 Feedback" name="2">
        <div></div>
        <div></div>
      </el-collapse-item>
      <el-collapse-item title="效率 Efficiency" name="3">
        <div></div>
        <div></div>
        <div></div>
      </el-collapse-item>
      <el-collapse-item title="可控 Controllability" name="4">
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
      activeNames: ['1']
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

</style>
