const env = process.env.NODE_ENV
let host = ''
if (env === 'development') {
  host = 'api'
} else {
  const u = location.hostname
  const pro = location.protocol
  host = `${pro}//${u}`
}

export default {
  host,
  code: {
    OK: '0000', // 成功
    DBERR: '2000', // 数据库查询错误
    THIRDERR: '2001', // 第三方系统错误
    SESSIONERR: '2002', // 用户未登录
    DATAERR: '2003', // 数据错误
    IOERR: '2004', // 文件读写错误
    LOGINERR: '2100', // 用户登录失败
    PARAMERR: '2101', // 参数错误
    USERERR: '2102', // 用户不存在或未激活
    ROLEERR: '2103', // 用户身份错误
    // ROLEERR: '2103', // 密码错误
    REQERR: '2200', // 非法请求或请求次数受限
    IPERR: '2201', // IP受限
    NODATA: '2300', // 无数据
    DATAEXIST: '2301', // 数据已存在
    UNKOWNERR: '2400', // 未知错误
    VERIFYCODE: '1001', //    验证码不正确
    REGISTERERR: '1000' //    注册失败
  }
}
