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
        <el-submenu v-if="item.sub.length" :index="item.title">
          <template #title>
            <i :class="item.icon"></i>
            <span class="menu-title">{{ item.title }}</span>
          </template>
          <template v-for="(item, index) in item.sub" :key="index">
            <el-submenu v-if="item.sub.length" :index="item.title">
              <template #title>
                <i :class="item.icon"></i>
                <span class="menu-title">{{ item.title }}</span>
              </template>
              <el-menu-item
                v-for="item in item.sub"
                :key="item.index"
                :index="item.index"
                class="menu-item-sub"
                >{{ item.title }}
              </el-menu-item>
            </el-submenu>
            <el-menu-item :index="item.index" v-else class="menu-item"
              >{{ item.title }}
            </el-menu-item>
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
    name: 'appSideBar',
    components: {},
    setup() {
      const store = useStore()
      const route = useRoute()
      let isCollapse = ref(false)
      let menu = computed(() => store.state.app.menu)
      let dfsBreadData = computed(() => dfsMenu(menu.value)) //扁平化后的菜单，用于面包屑
      const activePath = computed(() => {
        const { meta, path } = route
        console.log('path', path)
        dfsBreadData.value[path] && store.commit('app/coverBread', dfsBreadData.value[path])
        if (meta.activeMenu) {
          return meta.activeMenu
        }
        return path
      })
      function dfsMenu(menu: menuData[]): any {
        let result: any = {}
        // 深度优先遍历
        menu.forEach((item: menuData) => dfs(item, []))
        return result
        function dfs(menu: menuData, path: string[]) {
          if (!menu.sub.length) {
            // 用路径做key，方便查找 path是title组成的数组.
            result[menu.index] = [...path, menu.title]
          } else {
            path.push(menu.title)
            menu.sub.forEach((menu: menuData) => dfs(menu, path))
            path.pop()
          }
        }
      }
      return {
        menu,
        dfsBreadData,
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
