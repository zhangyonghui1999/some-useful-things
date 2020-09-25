<template>
  <div class="excel">
    <!-- 已实现基本功能，此版本为初级版本，后续升级版本均为在本版本基础上升级改造 -->
    <el-upload
      class="upload-demo"
      action=""
      :on-change="handleChange"
      :show-file-list="false"
      :on-remove="handleRemove"
      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
      :auto-upload="false">
      <el-button size="small" type="primary" >批量上传</el-button>
      <div slot="tip" class="el-upload__tip">注：只 能 上 传 xlsx / xls 文 件</div>
    </el-upload>
    <el-table
      :data="tableData2"
      style="width: 100%">
      <el-table-column prop="IP" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="NAME" label="姓名" width="180">
      </el-table-column>
      <el-table-column label="操作">
      </el-table-column>
    </el-table>
    <!-- :file-list="fileListUpload" -->
    <!-- :limit="limitUpload" -->
  </div>
</template>

<script>
export default {
  name: 'excel',
  data () {
    return {
      tableData2: []
    }
  },
  methods: {
    handelUpload (file) {
      console.log('file-123123213', file)
    },
    // excel表上传
    handleChange (file, fileList) {
      this.fileTemp = file.raw
      console.log('file', file)
      console.log('fileList', fileList)
      // 判断上传文件格式
      if (this.fileTemp) {
        console.log('this.fileTemp.type', this.fileTemp)
        // if ((this.fileTemp.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') || (this.fileTemp.type === 'application/vnd.ms-excel')) {
        this.importfxx(this.fileTemp)
        // } else {
        //   this.$message({
        //     type: 'warning',
        //     message: '附件格式错误，请删除后重新上传！'
        //   })
        // }
      } else {
        this.$message({
          type: 'warning',
          message: '请上传附件！'
        })
      }
    },
    // 移除excel表
    handleRemove (file, fileList) {
      this.fileTemp = null
    },
    importfxx (obj) {
      const _this = this
      // 通过DOM取文件数据
      this.file = obj
      var rABS = false // 是否将文件读取为二进制字符串
      var f = this.file
      var reader = new FileReader()
      console.log('reader', reader)
      FileReader.prototype.readAsBinaryString = function (f) {
        var binary = ''
        var rABS = false // 是否将文件读取为二进制字符串
        // var pt = this
        var wb // 读取完成的数据
        var outdata
        var reader = new FileReader()
        console.log('reader-1', reader)
        reader.onload = function (e) {
          var bytes = new Uint8Array(reader.result)
          console.log(reader.result)
          var length = bytes.byteLength
          for (var i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i])
          }
          console.log('binary', binary)
          var XLSX = require('xlsx')
          if (rABS) {
            wb = XLSX.read(btoa(this.fixdata(binary)), { // 手动转化
              type: 'base64'
            })
          } else {
            wb = XLSX.read(binary, {
              type: 'binary'
            })
          }
          outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])// outdata就是读取excel内容之后输出的东西
          this.da = [...outdata]
          const arr = []
          this.da.map(v => {
            const obj = {}
            obj.IP = v.IP // ip是表的标题
            obj.NAME = v.NAME
            arr.push(obj)
          })
          // return arr
          console.log('arr', arr)
          // 把读取的excel表格中的内容放进tableData2中(这里要改成自己的表的名字)
          _this.tableData2 = _this.tableData2.concat(arr)
        }
        reader.readAsArrayBuffer(f)
      }
      if (rABS) {
        reader.readAsArrayBuffer(f)
      } else {
        reader.readAsBinaryString(f)
      }
    },
    fixdata (data) { // 文件流转BinaryString
      var o = ''
      let l = 0
      const w = 10240
      for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)))
      o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)))
      return o
    }
  }
}
</script>

<style lang="scss">
  .excel {

  }
</style>
