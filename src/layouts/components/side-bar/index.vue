<template>
  <div class="aside">
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
        <el-menu-item index="/home/leven1">选项1</el-menu-item>
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
        const { meta, path } = route
        if (meta.activeMenu) {
          return meta.activeMenu
        }
        debugger
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
    .el-menu {
      border-right: 0;
    }
    .el-menu-vertical:not(.el-menu--collapse) {
      width: 250px;
      height: 100%;
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
