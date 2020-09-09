<template>
  <div class="apps">
    <el-collapse v-model="activeNames" @change="handleChange" accordion>
      <el-collapse-item title="1. 混合开发下，app内嵌 H5 如何调试" name="1">
        <div style="white-space: pre-line;">{{ content1 }}</div>
      </el-collapse-item>
      <el-collapse-item title="2. 动态绑定本地图片，src绑定的值，如果不生效，可以使用require引入" name="2">
        <div>require('图片路径')</div>
      </el-collapse-item>
      <el-collapse-item title="3. 跟客户端的交互" name="3">
        <div>详情请查看客户端专栏</div>
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
      content1: `1. 打开手机开发者模式 设置 --> 其他设置 --> 开发者选项 --> 打开并选择USB调试(如果之前并未打开过开发者模式，则顺序为 设置 --> 关于手机 --> 连续点击版本号 --> 其他设置 --> 开发者选项 --> 打开并选择USB调试
      2. 将手机用USB与电脑相连
      3. Chrome浏览器输入chrome://inspect
      4. 打开App中要调试的WebView网页
      5. 点击 inspect即可在网页中看到在app中打开的内容
      注意：这种调试方式需要注意一下几点：
      1. 需要客户端同学打包一个专门用于调试的app供前端使用
      2. 调试过程中需要手机连接外网(fq)
      3. 目前只知道安卓可以这样使用，苹果是否能以此方式使用暂时不清楚`
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
  .apps {
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
