<template>
  <div class="login">
    <div class="m_content">
      <header class="header">some-useful-things</header>
      <section class="content">
        <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
          <el-tab-pane label="用户管理" name="first"></el-tab-pane>
          <el-tab-pane label="配置管理" name="second"></el-tab-pane>
        </el-tabs>

        <el-form :model="loginForm" :rules="loginRules" ref="loginForm" v-show="tabStatus">
          <el-form-item prop="userName" class="user-name">
            <el-input v-model.trim="loginForm.userName" placeholder="请输入您的用户名称"></el-input>
          </el-form-item>
          <el-form-item prop="password" class="user-password">
            <el-input v-model.trim="loginForm.password" placeholder="请输入您的用户密码"></el-input>
          </el-form-item>
          <el-button type="primary" @click="login" class="btn">登录</el-button>
          <!-- <div @click="add">{{ count }}</div> -->
          <!-- <div @click="EVERY_MUTATION(payload)">{{ dollar }}</div> -->
        </el-form>
      </section>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
// import config from '@/utils/host'
// import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      activeName: 'first',
      tabStatus: true,
      loginForm: {
        userName: '',
        password: ''
      },
      payload: {
        count: 1,
        dollar: 2
      },
      count: 10,
      loginRules: {
        userName: [
          { required: true, message: '请输入用户姓名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入用户密码', trigger: 'blur' }
        ]
      }
    }
  },
  // created () {
  //   console.log('VUE_APP_BASE_API', process.env.VUE_APP_BASE_API)
  // },
  // computed: {
  //   count () {
  //     console.log(this.$store)
  //   }
  // },
  // computed: mapState({
  //   count: state => {
  //     console.log('state', state)
  //     console.log('state.count', state.count)
  //   },
  //   countAlias: 'count',
  //   dollar: state => {
  //     console.log(state.count + state.dollar)
  //   }
  // }),
  // computed: mapState([
  //   'count',
  //   'dollar'
  // ]),
  methods: {
    // add () {
    //   console.log('this.$store.state.a', this.$store.state.a)
    //   console.log('123', this.$store)
    // },
    // ...mapMutations([
    //   'SOME_MUTATION',
    //   'EVERY_MUTATION'
    // ]),
    handleClick (tab, event) {
      if (event.target.innerText === '用户管理') {
        this.tabStatus = true
      } else {
        this.tabStatus = false
      }
    },
    login () {
      document.cookie = 'session_id=CgAAAAuic_52NUnsVtD1TUp0wi8h_WF4EpWv2EcOyHY5ouLz;Domain=.qfapi.com;path=/;Secure=false'
      // // 通过全局变量形式获取
      // axios.get(`${process.env.VUE_APP_BASE_API}/org/list`).then(res => {
      //   console.log(res)
      //   return false
      // })
      // axios.get(`${config.host}/index.html`).then(res => {
      //   console.log(res)
      //   return false
      // })
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          if (this.loginForm.userName === 'admin' && this.loginForm.password === 'admin') {
            this.$router.replace({ path: '/main' })
          } else {
            this.$message.error('用户名或密码错误，请重新输入')
          }
        }
      })
      // window.location.href = `https://test.bitstore360.com/bitStore-frontend/bitstore/index.html#/buyWaiting?orderNo=BUY1365149602763902976`
    }
  }
}
</script>

<style lang="scss">
  .login {
    background-color: #2a2a2a;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .m_content {
      width: 500px;
      padding-bottom: 50px;
      background-color: #fff;
      .header {
        height: 80px;
        line-height: 80px;
        font-size: 24px;
        color: black;
        font-weight: 500;
        background-color: #f7f7f7;
        text-align: center;
      }
      .content {
        padding: 0 80px;
        .el-tabs {
          margin-bottom: 20px;
          .el-tabs__header {
            .el-tabs__nav-wrap {
              &::after {
                display: none;
              }
              .el-tabs__nav-scroll {
                .el-tabs__nav {
                  height: 55px;
                  line-height: 55px;
                  .el-tabs__item {
                    height: 55px;
                    line-height: 55px;
                    font-size: 20px;
                  }
                }
              }
            }
          }
        }
      }
      .el-form {
        .el-form-item {
          .el-form-item__content {
            .el-input {
              .el-input__inner {
                padding-left: 25px;
                border: none;
                border-bottom: 1px solid #ccc;
              }
            }
          }
        }
        .user-name {
          .el-form-item__content {
            .el-input {
              .el-input__inner {
                background: url('../../assets/img/phone.png') no-repeat left center;
                background-size: 20px 20px;
              }
            }
          }
        }
        .user-password {
          .el-form-item__content {
            .el-input {
              .el-input__inner {
                background: url('../../assets/img/password.png') no-repeat left center;
                background-size: 20px 20px;
              }
            }
          }
        }
        .btn {
          width: 100%;
          margin-top: 10px;
        }
      }
    }
  }
</style>
