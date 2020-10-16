<template>
  <div>
    {{ msg }}
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
  @function px2rem($value){
    @return $value * 0.02rem
  }
  div {
    font-size: px2rem(10);
  }
</style>
