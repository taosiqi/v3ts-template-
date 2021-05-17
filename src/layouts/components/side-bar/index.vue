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
      <template v-for="(item, index) in menu" :key="index">
        <el-submenu v-if="item.sub" :index="item.title">
          <template #title>
            <i :class="item.icon"></i>
            <span class="menu-title">{{ item.title }}</span>
          </template>
          <template v-for="(item, index) in item.sub" :key="index">
            <el-submenu v-if="item.sub" :index="item.title">
              <template #title>
                <i :class="item.icon"></i>
                <span class="menu-title">{{ item.title }}</span>
              </template>
              <el-menu-item
                v-for="item in item.sub"
                :key="item.index"
                :index="item.index"
                class="menu-item-sub"
                >{{ item.title }}</el-menu-item
              >
            </el-submenu>
            <el-menu-item :index="item.index" v-else class="menu-item">{{
              item.title
            }}</el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item v-else :index="item.index">
          <i :class="item.icon"></i>
          <template #title>
            <span class="menu-title">{{ item.title }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
    <i
      :class="['check-menu-icon', isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold']"
      @click="isCollapse = !isCollapse"
    ></i>
  </div>
</template>

<script lang="ts">
  /* eslint-disable no-undef */
  import { computed, defineComponent, ref, reactive } from 'vue'
  import { useRoute } from 'vue-router'
  import { useStore } from 'vuex'
  export default defineComponent({
    components: {},
    setup() {
      const store = useStore()
      const route = useRoute()
      let isCollapse = ref(false)
      let treeId = ref<any>([])
      let menu = computed(() => store.state.app.menu)
      const activePath = computed(() => {
        const { meta, path } = route
        let id = selectMenu(path, menu.value)
        formTree(menu.value, id)
        if (meta.activeMenu) {
          return meta.activeMenu
        }
        return route.path
      })
      function selectMenu(e: string, menu: menuData[]) {
        let id: number | string = ''
        for (const value of menu) {
          if (value.sub) {
            selectMenu(e, value.sub)
          } else {
            debugger
            if (value.index === e) {
              id = value.pid
              break
            }
          }
        }
        console.log(id)

        return id
      }
      // 反递归查找
      function formTree(list: menuData[], id: string | number) {
        list.forEach((item) => {
          if (item.sub && item.sub.length) {
            if (item.sub.some((row) => row.id === id)) {
              treeId.value.push(item) // 接收符合的数据id
              formTree(list, item.pid) // 从头递归
            } else {
              // 继续递归
              formTree(item.sub, id)
            }
          } else {
            return
          }
        })
      }
      return {
        menu,
        treeId,
        selectMenu,
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
    .iconfont {
      font-size: 16px;
    }
    .menu-item {
      padding-left: 59px !important;
    }
    .menu-title {
      display: inline-block;
      padding-left: 18px;
    }
    .menu-item-sub {
      padding-left: 69px !important;
    }
    ::v-deep .el-icon-arrow-down {
      color: #ffffff !important;
    }
  }
</style>
