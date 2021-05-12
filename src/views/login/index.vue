<template>
  <div class="login-container">
    <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="16" :xl="16">
        <div style="color: transparent">占位符</div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <el-form :model="loginForm" class="login-form" autocomplete="on" label-position="left">
          <div class="title">后台管理系統</div>
          <el-form-item style="margin-top: 40px" prop="username">
            <span class="svg-container">
              <icon-user theme="outline" size="20" fill="#928787" />
            </span>
            <el-input v-model="loginForm.username" placeholder="请输入用户名" type="text" />
          </el-form-item>
          <el-form-item prop="password">
            <span class="svg-container">
              <icon-lock theme="outline" size="20" fill="#928787" />
            </span>
            <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" />
          </el-form-item>
          <el-button :loading="loading" class="login-btn" type="primary" @click="login">
            登录
          </el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { defineComponent, reactive, ref, toRefs } from 'vue'

  export default defineComponent({
    name: 'login',
    components: {},
    setup() {
      const state = reactive({
        loginForm: {
          username: ' admin',
          password: ' 123456'
        },
        loading: false
      })
      const methods = reactive({
        login: () => {
          state.loading = true
        },
        validatePassword: () => {}
      })
      return {
        ...toRefs(state),
        ...toRefs(methods)
      }
    }
  })
</script>

<style lang="scss" scoped>
  .login-container {
    height: 100vh;
    background: url('~@/assets/images/background.jpg') center center fixed no-repeat;
    background-size: cover;

    .title {
      font-size: 54px;
      font-weight: 500;
      color: rgba(14, 18, 26, 1);
    }

    .login-btn {
      display: inherit;
      width: 220px;
      height: 60px;
      margin-top: 5px;
      border: 0;
      &:hover {
        opacity: 0.9;
      }
    }

    .login-form {
      position: relative;
      max-width: 100%;
      margin: calc((100vh - 425px) / 2) 10% 10%;
      overflow: hidden;
    }
    .svg-container {
      position: absolute;
      top: 17px;
      left: 15px;
      z-index: 999;
      font-size: 16px;
      color: #d7dee3;
      cursor: pointer;
      user-select: none;
    }

    ::v-deep(.el-form-item) {
      padding-right: 0;
      margin: 20px 0;
      color: #454545;
      background: transparent;
      border: 1px solid transparent;
      border-radius: 2px;

      ::v-deep(&__content) {
        min-height: 32px;
        line-height: 32px;
      }

      ::v-deep(&__error) {
        position: absolute;
        top: 100%;
        left: 18px;
        font-size: 12px;
        line-height: 18px;
        color: red;
      }

      .el-input {
        box-sizing: border-box;
        input {
          height: 58px;
          padding-left: 45px;
          font-size: 14px;
          line-height: 58px;
          color: #606266;
          background: #f6f4fc;
          border: 0;
          caret-color: #606266;
        }
      }
    }
  }
</style>
