// aipHost 用于用到的websocket，初始化为测试用的地址，当生产环境时为当前host
//let apiIP = '172.100.102.111'
let apiIP = '172.100.102.100'
let apiHost = 'http://' + apiIP
//let port = '8080'
let port = '9090'
if(process.env.NODE_ENV === 'production') {
  apiIP = location.host
  if(apiIP.split(':').length > 1) {
    apiIP = apiIP.split(':')[0]
  }
  apiHost = location.protocol + '//' + apiIP
  port = ''
}
apiHost = apiHost + ':' + port
if(['productaws', 'producthk'].indexOf(process.env.NODE_ENV)>-1) {
  apiIP = location.host
  apiHost = location.protocol + '//' + apiIP
  port = ''
}
// 部署相关api
const deployApi = {
	query: '/v1/deploy/query',     // 获取列表
  query_status: '/v1/deploy/query_status',    // 获取部署状态
  add: '/v1/deploy/add',         // 添加部署
  // update: '/v1/deploy/update',
  action: '/v1/deploy/action/',  // + deploy: 部署 roll: 回滚 start: 启动 restart: 重启 off: 下线 stop: 停止
  status: '/v1/deploy/status',   // 获取部署状态
  pack: '/v1/deploy/makepack',   // 服务打包
  push: '/v1/deploy/pushpack',   // 服务推送
  fly:  '/v1/deploy/fly',        // 代码上线
  ppg: '/v1/deploy/ppg',         // PPG上线
  packlist: '/v1/deploy/packlist',  // 获取打包服务器上的包列表
  codelist: '/v1/deploy/codelist',  // 获取服务器上已经存送完毕的包文件夹列表
  roll: '/v1/deploy/roll',          // 回滚
  off: '/v1/deploy/off',          // 下线
}
// git相关数据api
const gitApi = {
  tags: '/v1/service/tags',                      // 获取服务的tag 用户部署上线
  pathSearch: '/v1/service/repos', // 根据服务名称搜索git地址 供添加服务时选取
  checkTag: '/v1/service/check_tag',  // 验证tag是否存在
}
// 服务
const serviceApi = {
  query: '/v1/service/query',    // 服务列表
  search: '/v1/service/search',    // 具体服务信息
  add: '/v1/service/add',        // 添加服务
  update: '/v1/service/update',  // 更新服务信息
  delete: '/v1/service/delete',  // 删除服务
}
// 设备
const deviceApi = {
  query: '/v1/device/query',     // 设备列表
  add: '/v1/device/add',         // 添加设备
  update: '/v1/device/update',   // 更新设备信息
  delete: '/v1/device/delete',   // 删除设备
  sync: '/v1/deploy/sync',       // 导入服务
}
// 用户登入登出
const loginApi = {
  login: '/v1/user/login',        // 登入
  ifbind: '/v1/user/ifbind',      // 是否绑定微信
  sendcode: '/v1/user/sendcode',  // 发送验证码
  bindcode: '/v1/user/bindcode',  // 绑定客户端
  authSight: '/v1/user/auth_sight', // 验证从老平台过来的用户
}
const logoutApi = '/v1/user/logout'  // 登出
// 配置文件相关
const configApi = {
  headers: '/v1/conf/headers',     // 根据选择的设备获取设备中配置文件相关信息
  code: '/v1/conf/query',          // 获取配置文件内容
  conflist: '/v1/conf/conflist',          // 获取配置文件内容
  // load: '/v1/conf/initload',       // load 配置文件 post详细参数：load 单个 post无参数： load 全部
  load: '/v1/conf/config_load',
  roll: '/v1/conf/roll/conf',      // 回滚
  delete: '/v1/conf/delete/conf',  // 删除
  create: '/v1/conf/create/conf',  // 添加
  update: '/v1/conf/update/conf',  // 更新修改
  search: '/v1/conf/search/',      // 全局所搜
}
// 用户权限
const privsApi = {
  query: '/v1/deploy/privs',    // 获取用户权限 params：type（device设备||service服务）
  bind: '/v1/perm/bind_priv',   // 绑定权限，选取绑定 取消选取 删除权限
  sshQuery: '/v1/user/device_ssh_priv/query',  // 获取用户设备ssh权限 params: user_id
  sshUpdate: '/v1/user/device_ssh_priv/update',  // 操作ssh权限
  checkSSHPriv: '/v1/wssh/check_priv',  // 验证用户是否有ssh权限
}
// 用户管理
const userApi = {
  bindWx: '/v1/user/bind_wx',    // 绑定微信
  wxQuery: '/v1/user/wx_users',  // 获取企业微信用户
  update: '/v1/user/update',     // 更新用户信息
  query: '/v1/user/query',       // 获取用户列表
  roles: '/v1/user/roles',       // 获取角色列表
  add: '/v1/user/add',           // 用户添加
  roleUsers: '/v1/user/role_users', // 根据角色查询用户
  inactive: '/v1/user/inactive',  // 用户离职
}
// 工单
// query: params query_type == process_list 获取列表
// query: params query_type == process_detail 获取详情
const workOrderApi = {
  add: '/v1/workorder/order_add',         // 添加工单
  query: '/v1/workorder/query',           // 获取工单 创建人／处理人
  update: '/v1/workorder/process_update', // 更新工单 状态／操作
  remark: '/v1/workorder/remark',         // 回复工单, 处理人和申请人的交流
}
// 工作流
// 工作流步骤
const flowSetp = {
  query: '/v1/workflow/steps',           // 获取列表
  add: '/v1/workflow/step_add',          // 添加步骤
  update: '/v1/workflow/step_update',    // 更新步骤
  delete: '/v1/workflow/step_delete',    // 删除步骤
}
// 工作流模版
const flowTemplate = {
  query: '/v1/workflow/templates',         // 获取模版列表
  add: '/v1/workflow/template_add',        // 添加模版
  delete: '/v1/workflow/template_delete',  // 删除模版
  update: '/v1/workflow/template_update',  // 更新模版
}
// 工作流
const workFlowApi = {
  flowAdd: '/v1/workflow/workflow_add',      // 添加工作流基本信息
  query: '/v1/workflow/workflow_list',       // 获取工作流列表
  history: '/v1/workflow/flow_history',      // 根据process获取处理历史
  update: '/v1/workflow/flow_update',        // 未提交 | 提回的流修改接口
  delete: '/v1/workflow/flow_delete',        // 放弃流，同步删除order
  doAction: '/v1/workflow/do_action',        // 工作流审核
}
// 工作流产品 api
const fwProductApi = {
  query: '/v1/workflow/product',            // 获取列表
  add: '/v1/workflow/product_add',          // 添加产品
  update: '/v1/workflow/product_update',     // 更新产品
  lanuchQuery: '/v1/workflow/product/launch_query', // 获取上线发起历史
  lanuchAdd: '/v1/workflow/product/launch_add', // 发起上线
  lanuchServeices: '/v1/workflow/product/lanuched_service',
  productService: '/v1/workflow/product/service_query',
  finish: '/v1/workflow/product/finish',
  lanuchIng: '/v1/workflow/product/launching',
  checkFinish: '/v1/workflow/product/check_finish',
  lanuchDetail: '/v1/workflow/product/lanuch_detail',
  flows: '/v1/workflow/product/flows',
  delete: '/v1/workflow/product_delete',      // 产品删除接口，只可删除可以删除的product
  export: '/v1/workflow/product/export',      // 导出excel 按照当前过滤条件
}
// 工作流产品区域管理
const fwProductZoneApi = {
  query: '/v1/workflow/product/zone/list',
  update: '/v1/workflow/product/zone/update',
  add: '/v1/workflow/product/zone/add'
}

const fwProductVerifier = {
  query: '/v1/workflow/product/verifier/list',
  add: '/v1/workflow/product/verifier/add',
  update: '/v1/workflow/product/verifier/update',
  delete: '/v1/workflow/product/verifier/delete'
}

// salt计划任务
const saltCronApi = {
  // hostQeury: '/v1/cron/list_hosts',            // 获取主机
  // roleQeury: '/v1/cron/list_cron_user',        // 获取主机用户
  // catQuery: '/v1/cron/list_category',          // 获取脚本类型
  // query: '/v1/cron/init',                      // 获取计划任务列表 有参数<role><host><category><cid>获取详情
  // add: '/v1/cron/add',                         // 添加计划任务
  // edit: '/v1/cron/edit',                       // 编辑计划任务
  // delete: '/v1/cron/delete',                   // 删除计划任务
  // effect: '/v1/cron/effect',                   // 生效／失效
  // run: '/v1/cron/run',                         // 立即执行
  // scriptQuery: '/v1/cron/list_name',           // 获取主机脚本 参数<host><category>
  // deployQuery: '/v1/cron/list_service_cron',   // 获取主机上的服务
  // updateScript: '/v1/cron/update_system_cron', // 更新主机脚本 仅限系统脚本
  catQuery: '/v1/crontab/categories',          // 获取脚本类型
  hostQeury: '/v1/crontab/hosts',              // 获取主机
  roleQeury: '/v1/crontab/users',              // 获取主机用户
  query: '/v1/crontab/',                       // 获取计划任务列表 有参数<role><host><category><cid>获取详情
  add: '/v1/crontab/',                         // 添加计划任务
  edit: '/v1/crontab/',                        // 编辑计划任务
  delete: '/v1/crontab/',                      // 删除计划任务
  effect: '/v1/crontab/effect',                // 生效／失效
  run: '/v1/crontab/run',                      // 立即执行
  scriptQuery: '/v1/crontab/names',            // 获取主机脚本 参数<host><category>
  deployQuery: '/v1/crontab/scripts',          // 获取主机上的服务
  updateScript: '/v1/crontab/update_system_cron', // 更新主机脚本 仅限系统脚本
}
// 系统计划任务的列表
const systemCronApi = {
  query: '/v1/system_cron/init',             //获取系统计划任务的列表
  delete: '/v1/system_cron/delete',          //删除指定的系统计划任务
  effect: '/v1/system_cron/effect',             //使计划任务生效或者失效

}

//数据库
const databaseApi = {
  dbDeviceQuery: '/v1/db_device/query',
}

// 区域管理
const zoneApi = {
  query: '/v1/zone/query',
  add: '/v1/zone/add',
  update: '/v1/zone/update',
  delete: '/v1/zone/delete',
}

const alarmConfApi = {
  query: '/v1/alarm/conf/list',    // 规则列表
  add: '/v1/alarm/conf/add',       // 规则添加
  update: '/v1/alarm/conf/update',
  start: '/v1/watch/start', // 开启监控
  stop: '/v1/watch/stop',   // 关闭监控
  watchQuery: '/v1/watch/query', // 启动状态查询
}

const alarmRuleApi = {
  query: '/v1/alarm/rule/list',    // 规则列表
  add: '/v1/alarm/rule/add',       // 规则添加
  update: '/v1/alarm/rule/update',
  subscribe: '/v1/alarm/rule/subscribe', // 订阅
  unsubscribe: '/v1/alarm/rule/unsubscribe', // 取消订阅
  delete: '/v1/alarm/rule/delete',  // 删除规则
}

const atreeApi = {
  query: '/v1/atree/query',
  add: '/v1/atree/add',
  update: '/v1/atree/update',
  delete: '/v1/atree/delete',
}

const ClusterDbApi = {
  query: '/v1/database/cluster/query',
  add: '/v1/database/cluster/add',
  update: '/v1/database/cluster/update',
  delete: '/v1/database/cluster/delete',
}
const DatabaseApi = {
  query: '/v1/database/db/query',
  query_db: '/v1/database/db/query_db',
  add: '/v1/database/db/add',
  update: '/v1/database/db/update',
  delete: '/v1/database/db/delete',
}
const GrantDbApi = {
  make_list: '/v1/database/grant/make_list',
  query: '/v1/database/grant/query',
  query_func: '/v1/database/grant/query_func',
  add: '/v1/database/grant/add',
  add_func: '/v1/database/grant/add_func',
  delete: '/v1/database/grant/delete',
  delete_func: '/v1/database/grant/delete_func',
}
const TokenApi = {
  get_dbconf: '/v1/database/token/get_dbconf',
  get_token: '/v1/database/token/get_token',
  save_token: '/v1/database/token/save_token',
  rollback_token: '/v1/database/token/rollback_token',
}

// 值班表
const scheduleApi = {
  add: '/v1/schedule/add',
  query: '/v1/schedule/list',
  vacations: '/v1/schedule/vacation',
  delete: '/v1/schedule/delete',
  update: '/v1/schedule/update',
}

//SQL查询
const sqlQuery = {
  // run_sql: '/v1/database/run_sql',                  // sql查询操作
  fetch_databases: '/v1/database/fetch_database',     // 获取数据库名称
  fetch_tables: '/v1/database/fetch_table',           // 获取表名
  fetch_result: '/v1/database/fetch_result',          // 获取sql查询结果
  fetch_priv: '/v1/database/fetch_priv',              // 获取当前用户对应的数据库查询权限
  fetch_user_priv: '/v1/database/fetch_sql_priv',     // 获取用户所有数据库权限
  update_user_priv: '/v1/database/update_sql_priv',   // 修改授权
}

// 导出参数
export {
  deployApi,
  serviceApi,
  gitApi,
  deviceApi,
  apiHost,
  apiIP,
  loginApi,
  logoutApi,
  configApi,
  privsApi,
  userApi,
  workOrderApi,
  flowSetp,
  port,
  flowTemplate,
  workFlowApi,
  databaseApi,
  saltCronApi,
  systemCronApi,
  zoneApi,
  fwProductApi,
  alarmConfApi,
  alarmRuleApi,
  fwProductZoneApi,
  fwProductVerifier,
  atreeApi,
  ClusterDbApi,
  DatabaseApi,
  GrantDbApi,
  TokenApi,
  scheduleApi,
  sqlQuery,
}
