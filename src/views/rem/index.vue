<template>
  <div>
    <van-button type="primary">主要按钮</van-button>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '这是一段文本，主要用来测试rem'
    }
  }
}
</script>

<style lang="scss">
div {
  font-size: 16px;
}
.van-button {
  font-size: 20px;
}
  // @function px2rem($value){
  //   @return $value * 0.02rem
  // }
  // div {
  //   font-size: px2rem(10);
  // }
</style>
