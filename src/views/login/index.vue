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
        </el-form>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first',
      tabStatus: true,
      loginForm: {
        userName: '',
        password: ''
      },
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
  methods: {
    handleClick (tab, event) {
      if (event.target.innerText === '用户管理') {
        this.tabStatus = true
      } else {
        this.tabStatus = false
      }
    },
    login () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          if (this.loginForm.userName === 'admin' && this.loginForm.password === 'admin') {
            this.$router.replace({ name: 'home' })
          } else {
            this.$message.error('用户名或密码错误，请重新输入')
          }
        }
      })
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
