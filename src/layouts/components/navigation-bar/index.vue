<template>
  <div class="navbar">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb" trigger="click">
      <el-breadcrumb-item :to="{ path: item.index }" v-for="item in bread" :key="item.title">{{
        item.title
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown class="dropdown" @command="handleCommand">
      <span class="el-dropdown-link">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
        超级管理员
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="user">用户中心</el-dropdown-item>
          <el-dropdown-item command="password">修改密码</el-dropdown-item>
          <el-dropdown-item command="git">项目地址</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
  import { ElMessage } from 'element-plus'
  import { computed, reactive, toRefs } from 'vue'
  import { useStore } from 'vuex'
  export default {
    setup() {
      const store = useStore()
      const bread = computed(() => store.state.app.bread)
      const state = reactive({
        handleCommand: (command) => {
          ElMessage.info(command)
        }
      })
      return {
        ...toRefs(state),
        bread
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navbar {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    z-index: 2;
    background: #fff;
    box-shadow: 0px 2px 8px 4px rgb(0 0 0 / 4%);
    padding: 0 38px;
    .breadcrumb {
      line-height: 80px;
    }
    .el-dropdown-link {
      cursor: pointer;
      line-height: 80px;
      .el-avatar {
        position: relative;
        top: 10px;
        right: 5px;
      }
    }
  }
</style>
