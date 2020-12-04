<template>
  <div>
    <h5>1. [Vue warn]: You may have an infinite update loop in a component render function.</h5>
    <a href="https://blog.csdn.net/u011584949/article/details/83821278">参考文档：https://blog.csdn.net/u011584949/article/details/83821278</a>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'vueerror',
  data () {
    return {
      timer: '',
      count: 0
    }
  },
  created () {
    this.getTimes()
  },
  mounted () {

  },
  methods: {
    getTimes () {
      this.timer = setInterval(() => {
        this.count++
        console.log('count', this.count)
      }, 1000)
    }
  },
  beforeDestroy () {
    if (this.timer) {
      console.log('count-destroy', this.count)
      clearInterval(this.timer)
    }
  }
}
</script>

<style>

</style>
