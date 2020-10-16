<template>
  <div class="hello input-con">
    <label>输入框</label>
    <el-input v-bind="$attrs" v-model="myc" @input="hinput"></el-input>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data () {
    return {
      myc: ''
    }
  },
  methods: {
    hinput () {
      this.$emit('change-input-success')
    }
  }
}
</script>
