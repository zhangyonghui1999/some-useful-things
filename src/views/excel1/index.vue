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
          this.importfile(this.fileContent)
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
    importfile (obj) {
      this.tableData = []
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
