<template>
  <div class="delete">
    <div class="slider">
      <div class="out-side">
        <div class="content" @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd' :style="deleteSlider">
        <slot></slot>
        </div>
        <div class="remove" ref='remove' @click="deleteInfo">
          删除
        </div>
      </div>
    </div>

    <div class="images-select">
      <div class="fixed" @click="getShowList()">
        <img :src="fixedList" alt="">
        <span>{{ fixedName }}</span>
      </div>
      <ul class="absolute" v-if="show">
        <li v-for="item in list" :key="item.id" @click="getActually(item)">
          <img :src="item.icon" alt="">
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      fixedList: '',
      fixedName: '',
      show: false,
      list: [
        {
          icon: require('../../assets/img/Logout.png'),
          id: 1,
          name: 'logout'
        },
        {
          icon: require('../../assets/img/phone.png'),
          id: 2,
          name: 'phone'
        }
      ],
      startX: 0, // 触摸位置
      endX: 0, // 结束位置
      moveX: 0, // 滑动时的位置
      disX: 0, // 移动距离
      deleteSlider: '' // 滑动时的效果,使用v-bind:style="deleteSlider"
    }
  },
  methods: {
    getShowList () {
      if (this.show) {
        this.show = false
      } else {
        this.show = true
      }
    },
    getActually (item) {
      this.fixedList = item.icon
      this.fixedName = item.name
      if (this.show) {
        this.show = false
      }
    },
    touchStart (ev) {
      ev = ev || event // tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
      if (ev.touches.length === 1) {
        // 记录开始位置
        this.startX = ev.touches[0].clientX
      }
    },
    touchMove (ev) {
      ev = ev || event // 获取删除按钮的宽度，此宽度为滑块左滑的最大距离
      const wd = this.$refs.remove.offsetWidth
      if (ev.touches.length === 1) {
        // 滑动时距离浏览器左侧实时距离
        this.moveX = ev.touches[0].clientX
        // 起始位置减去 实时的滑动的距离，得到手指实时偏移距离
        this.disX = this.startX - this.moveX
        console.log(this.disX)
        // 如果是向右滑动或者不滑动，不改变滑块的位置
        if (this.disX < 0 || this.disX === 0) {
          this.deleteSlider = 'transform:translateX(0px)'
        } else if (this.disX > 0) { // 大于0，表示左滑了，此时滑块开始滑动
          this.deleteSlider = 'transform:translateX(-' + this.disX * 5 + 'px)' // 具体滑动距离我取的是 手指偏移距离*5
          // 最大也只能等于删除按钮宽度
          if (this.disX * 5 >= wd) {
            this.deleteSlider = 'transform:translateX(-' + wd + 'px)'
          }
        }
      }
    },
    deleteInfo () {
      console.log('1111111111')
    },
    touchEnd (ev) {
      ev = ev || event
      const wd = this.$refs.remove.offsetWidth
      if (ev.changedTouches.length === 1) {
        const endX = ev.changedTouches[0].clientX
        this.disX = this.startX - endX
        console.log(this.disX)
        // 如果距离小于删除按钮一半,强行回到起点
        if ((this.disX * 5) < (wd / 2)) {
          this.deleteSlider = 'transform:translateX(0px)'
        } else {
          // 大于一半 滑动到最大值
          this.deleteSlider = 'transform:translateX(-' + wd + 'px)'
        }
      }
    }
  }
}
</script>

<style lang="scss">
.slider{
  width: 100%;
  height:200px;
  position: relative;
  user-select: none;
  .content{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background:green;
    z-index: 100;
    transition: 0.3s;
  }
  .remove{
    position: absolute;
    width:200px;
    height:200px;
    background:red;
    right: 0;
    top: 0;
    color:#fff;
    text-align: center;
    font-size: 40px;
    line-height: 200px;
  }
}
.images-select {
  .fixed {
    img {
      height: 30px;
      width: 30px;
    }
  }
  .absolute {
    img {
      height: 30px;
      width: 30px;
    }
    span {
      font-size: 14px;
    }
  }
}
</style>
