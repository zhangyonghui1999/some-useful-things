import Vue from 'vue'
import { Button, Input, Form, FormItem, Tabs, TabPane, Message } from 'element-ui'

Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.component(Message)

Vue.prototype.$message = Message
