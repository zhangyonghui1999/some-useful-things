// importf(obj) {
//   let _this = this;
//   let inputDOM = this.$refs.inputer;   // 通过DOM取文件数据
//   this.file = event.currentTarget.files[0];  
//   var rABS = false; //是否将文件读取为二进制字符串
//   var f = this.file;
//   var reader = new FileReader();
//   //if (!FileReader.prototype.readAsBinaryString) {
//   FileReader.prototype.readAsBinaryString = function(f) {
//   var binary = "";
//   var rABS = false; //是否将文件读取为二进制字符串
//   var pt = this;
//   var wb; //读取完成的数据
//   var outdata;
//   var reader = new FileReader();
//   reader.onload = function(e) {
//     var bytes = new Uint8Array(reader.result);
//     var length = bytes.byteLength;
//     for(var i = 0; i < length; i++) {
//       binary += String.fromCharCode(bytes[i]);
//     }
//     var XLSX = require('xlsx');
//     if(rABS) {
//       wb = XLSX.read(btoa(fixdata(binary)), { //手动转化
//         type: 'base64'
//       });
//     } else {
//       wb = XLSX.read(binary, {
//         type: 'binary'
//       });
//     }
//     // outdata就是你想要的东西 excel导入的数据
//     outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]); 
//     // excel 数据再处理
//     let arr = []
//     outdata.map(v => {
//       let obj = {}
//       obj.account = v.登录账号
//       obj.name = v.姓名
//       obj.department = v.部门
//       obj.secondDepartment = v.二级部门
//       obj.status = v.状态
//       obj.id = v.id
//       arr.push(obj)
//     })
//     _this.accountList = [...arr];
//     console.log( _this.accountList)
//     _this.reload();
//     }
//     reader.readAsArrayBuffer(f);
//   }
//   if(rABS) {
//     reader.readAsArrayBuffer(f);
//   } else {
//     reader.readAsBinaryString(f);
//   }
// }