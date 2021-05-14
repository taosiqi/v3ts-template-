<template>
  <div class="aside">
    <div :class="['logo', isCollapse ? 'collapse-logo' : '']">
      <img src="@/assets/images/logo.png" />
    </div>
    <el-menu
      class="el-menu-vertical"
      :collapse="isCollapse"
      background-color="#303133"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
      unique-opened
      :default-active="activePath"
    >
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>模板</span>
        </template>
        <el-menu-item index="/home/leven1">模板1</el-menu-item>
      </el-submenu>
      <el-menu-item index="/dashboard">
        <i class="el-icon-setting"></i>
        <template #title>导航四</template>
      </el-menu-item>
    </el-menu>
    <i
      :class="['check-menu-icon', isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold']"
      @click="isCollapse = !isCollapse"
    ></i>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from 'vue'
  import { useRoute } from 'vue-router'

  export default defineComponent({
    components: {},
    setup() {
      const route = useRoute()
      let isCollapse = ref(false)
      const activePath = computed(() => {
        const { meta } = route
        if (meta.activeMenu) {
          return meta.activeMenu
        }
        return route.path
      })

      return {
        isCollapse,
        activePath
      }
    }
  })
</script>

<style lang="scss" scoped>
  .aside {
    position: relative;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #303133;
    .logo {
      height: 100px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: auto;
        width: 50px;
        height: 50px;
      }
    }
    .collapse-logo img {
      transform: scale(0.7);
      transition: all 0.5s;
    }
    .el-menu {
      border-right: 0;
    }
    .el-menu-vertical:not(.el-menu--collapse) {
      width: 250px;
      height: calc(100% - 100px);
    }
    .check-menu-icon {
      cursor: pointer;
      position: absolute;
      bottom: 12px;
      right: 12px;
      font-size: 26px;
      color: #ada5a5;
    }
  }
</style>
