<template>
  <div class="excel">
    <el-upload
      class="upload-demo"
      action=""
      :on-change="handleChange"
      :show-file-list="false"
      :auto-upload="false">
      <el-button size="small" type="primary" style="margin-bottom:15px;">读取excel文件</el-button>
    </el-upload>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column prop="ip" label="序号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <a @click="handleDelete(scope)">删除</a> |
          <a @click="handelEdit(scope)">修改</a>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'excel',
  data () {
    return {
      tableData: [],
      fileContent: '',
      file: '',
      // newadd
      data: ''
    }
  },
  methods: {
    handleDelete (item) {
      console.log('handleDelete', item)
    },
    handelEdit (item) {
      console.log('handleDelete', item)
    },
    handleChange (file, fileList) {
      this.fileContent = file.raw
      const fileName = file.name
      const fileType = fileName.substring(fileName.lastIndexOf('.') + 1)
      if (this.fileContent) {
        if (fileType === 'xlsx' || fileType === 'xls') {
          this.importfxx(this.fileContent)
        } else {
          this.$message({
            type: 'warning',
            message: '附件格式错误，请重新上传！'
          })
        }
      } else {
        this.$message({
          type: 'warning',
          message: '请上传附件！'
        })
      }
    },
    importfxx (obj) {
      const reader = new FileReader()
      const _this = this
      reader.readAsArrayBuffer(obj)
      reader.onload = function () {
        const buffer = reader.result
        const bytes = new Uint8Array(buffer)
        const length = bytes.byteLength
        let binary = ''
        for (let i = 0; i < length; i++) {
          binary += String.fromCharCode(bytes[i])
        }
        const XLSX = require('xlsx')
        const wb = XLSX.read(binary, {
          type: 'binary'
        })
        const outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
        this.data = [...outdata]
        const arr = []
        this.data.map(v => {
          const obj = {}
          obj.ip = v.IP
          obj.name = v.NAME
          arr.push(obj)
        })
        _this.tableData = _this.tableData.concat(arr)
      }
    },
    // importfxx (obj) {
    //   const _this = this
    //   // 通过DOM取文件数据
    //   this.file = obj
    //   var rABS = false // 是否将文件读取为二进制字符串
    //   var f = this.file
    //   var reader = new FileReader()
    //   FileReader.prototype.readAsBinaryString = function (f) {
    //     var binary = ''
    //     var rABS = false // 是否将文件读取为二进制字符串
    //     // var pt = this
    //     var wb // 读取完成的数据
    //     var outdata
    //     var reader = new FileReader()
    //     reader.onload = function (e) {
    //       console.log('reader.result', reader.result)
    //       var bytes = new Uint8Array(reader.result)
    //       console.log('bytes', bytes)
    //       var length = bytes.byteLength
    //       for (var i = 0; i < length; i++) {
    //         binary += String.fromCharCode(bytes[i])
    //       }
    //       console.log('binary', binary)
    //       var XLSX = require('xlsx')
    //       if (rABS) {
    //         wb = XLSX.read(btoa(this.fixdata(binary)), { // 手动转化
    //           type: 'base64'
    //         })
    //       } else {
    //         wb = XLSX.read(binary, {
    //           type: 'binary'
    //         })
    //       }
    //       console.log('wb', wb)
    //       outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])// outdata就是读取excel内容之后输出的东西
    //       this.da = [...outdata]
    //       const arr = []
    //       this.da.map(v => {
    //         const obj = {}
    //         obj.IP = v.IP // ip是表的标题
    //         obj.NAME = v.NAME
    //         arr.push(obj)
    //       })
    //       // return arr
    //       // 把读取的excel表格中的内容放进tableData2中(这里要改成自己的表的名字)
    //       _this.tableData2 = _this.tableData2.concat(arr)
    //     }
    //     reader.readAsArrayBuffer(f)
    //   }
    //   if (rABS) {
    //     reader.readAsArrayBuffer(f)
    //   } else {
    //     reader.readAsBinaryString(f)
    //   }
    // },
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
  a {
    cursor: pointer;
    :hover {
      color: blue;
    }
  }
</style>
