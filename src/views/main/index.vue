<template>
  <div class="main">
    <el-container>
      <el-header>
        <AppHeader></AppHeader>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="1"
            unique-opened
            :router="true"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="fas fa-tasks fa-lg"></i>
                <span>PROJECT PIT</span>
              </template>
              <el-menu-item index="1-1">
                <template>
                  <i class="fas fa-user fa-lg"></i>
                  <span>ELEMENT UI</span>
                </template>
              </el-menu-item>
              <el-menu-item index="1-2">
                <template>
                  <i class="fab fa-alipay fa-lg"></i>
                  <span>选项2</span>
                </template>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <!-- <i class="el-icon-menu"></i> -->
                <i class="fab fa-css3 fa-lg"></i>
                <span slot="title">样式表</span>
              </template>
              <el-menu-item index="/bfc">
                <template>
                  <i class="fab fa-alipay fa-lg"></i>
                  <span>BFC</span>
                </template>
              </el-menu-item>
            </el-submenu>
            <!-- <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item> -->
            <!-- <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item> -->
            <el-submenu index="3">
              <template slot="title">
                <i class="fab fa-js-square fa-lg"></i>
                <span slot="title">你不知道的JS</span>
              </template>
              <el-menu-item index="/main/kownJS">
                <i class="fab fa-js fa-lg"></i>
                <span>上册</span>
              </el-menu-item>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <i class="fab fa-js-square fa-lg"></i>
                <span slot="title">Vue Error</span>
              </template>
              <el-menu-item index="/main/vueerror">
                <i class="fab fa-js fa-lg"></i>
                <span>Errors</span>
              </el-menu-item>
            </el-submenu>

            <el-submenu index="5">
              <template slot="title">
                <i class="fas fa-cookie fa-lg"></i>
                <span slot="title">cookie</span>
              </template>
              <el-menu-item index="/main/cookie">
                <i class="fas fa-cookie fa-lg"></i>
                <span>cookie</span>
              </el-menu-item>
            </el-submenu>

            <el-submenu index="6">
              <template slot="title">
                <i class="fas fa-camera-retro fa-lg"></i>
                <span slot="title">queryExcelName</span>
              </template>
              <el-menu-item index="/main/queryNum">
                <i class="fas fa-camera-retro fa-lg"></i>
                <span>queryExcelName</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AppHeader from './header'
export default {
  components: {
    AppHeader
  },
  data () {
    return {
    }
  },
  methods: {
    handleOpen (key, keyPath) {
    },
    handleClose (key, keyPath) {
    }
  }
}
</script>

<style lang="scss">
  .fas, .fab {
    margin-right: 10px;
    vertical-align: middle;
    &::before {
      color: #46a0fc;
    }
  }
  .main {
    height: 100%;
    .el-container {
      height: 100%;
      .el-header {
      }
      .el-container {
        height: 100%;
        background-color: #f2f4f5;
        .el-aside {
          height: 100%;
          .el-menu {
            height: 100%;
            width: 200px;
            background-color: #000 !important;
          }
          .el-submenu__title, .el-menu-item {
            background-color: #000 !important;
          }
        }
        .el-main {
          height: 100%;
        }
      }
    }
  }
</style>
