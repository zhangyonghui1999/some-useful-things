<template>
  <div>
    <button @click="generateImages">点击生成图片并将图片保存在本地</button>
    <el-upload
      class="upload-demo"
      action=""
      :on-change="handleChange"
      :show-file-list="false"
      :auto-upload="false">
      <el-button size="small" type="primary" style="margin-bottom:15px;">读取word文件</el-button>
    </el-upload>
    <!-- 卡片部分 -->
    <div class="card">
      <!-- 卡片头部 -->
      <div class="card_head">
        <p>姓名：</p>
        <p>张三丰</p>
      </div>
      <!-- 卡片内容区域 -->
      <div class="card_content">
        <p>age：</p>
        <p>22岁</p>
      </div>
      <!-- 卡片尾部 -->
      <div class="card_footer">
        <p>技能：</p>
        <p>打太极</p>
      </div>
    </div>
    <div class="content"></div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
import QRCode from 'qrcode'
export default {
  data () {
    return {
    }
  },
  mounted () {
    // this.generateCanvas()
    this.qrcode()
  },
  methods: {
    handleChange (file, fileList) {
      const fileContent = file.raw
      const reader = new FileReader()
      const blob = fileContent.slice(0, fileContent.size)
      reader.readAsText(blob)
      // reader.readAsDataURL(blob)
      reader.onloadend = function (e) {
        console.log('e', e)
        console.log('e.target.result', e.target.result)
      }
    },
    // html2canvas
    generateImages () {
      html2canvas(document.querySelector('.card')).then(canvas => {
        // // document.querySelector('.content').appendChild(canvas)
        // const img = canvas.toDataURL('image/jpeg')
        // const image = document.createElement('img')
        // image.src = img
        // document.querySelector('.content').appendChild(image)
        // const isa = document.createElement('a')
        // isa.href = img
        // isa.download = 'study_download'
        // isa.click()

        const imgUrl = canvas.toDataURL('image/jpeg')
        const image = document.createElement('img')
        image.src = imgUrl
        // 将生成的图片放到 类名为 content 的元素中
        document.querySelector('.content').appendChild(image)
        const a = document.createElement('a')
        a.href = imgUrl
        // a.download 后面的内容为自定义图片的名称
        a.download = 'study_download'
        a.click()
      })
    },
    qrcode () {
      // QRCode.toDataURL('世界那么大，我想多挣点儿钱').then(url => {
      //   console.log(url)
      //   const image = document.createElement('img')
      //   image.src = url
      //   document.querySelector('.content').appendChild(image)
      // }).catch(err => {
      //   console.error(err)
      // })
      QRCode.toCanvas(document.getElementById('canvas'), 'sample text', { width: 220 }, err => {
        if (err) {
          console.log(err)
        }
        console.log('success')
      })
    }
  }
}
</script>

<style lang="scss">
  // canvas {
  //   height: 102px !important;
  //   width: 202px !important;
  // }
  // .content {
  //   width: 300px;
  //   height: 100px;
  //   border: 1px solid skyblue;
  // }
  // .content {
  //   img {
  //     width: 202px;
  //     height: 102px;
  //     border-radius: 10px;
  //   }
  // }
  .card {
    width: 200px;
    height: 100px;
    border: 1px solid skyblue;
    border-radius: 10px;
    background-color: #ccc;
    margin-bottom: 10px;
    div {
      display: flex;
      justify-content: space-between;
      padding: 5px 20px;
    }
  }
</style>
