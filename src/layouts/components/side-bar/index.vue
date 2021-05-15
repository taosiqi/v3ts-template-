<template>
  <div class="aside">
    <div :class="['logo', isCollapse ? 'collapse-logo' : '']">
      <img src="@/assets/images/logo.png" />
    </div>
    <el-menu
      @select="selectMenu"
      class="el-menu-vertical"
      :collapse="isCollapse"
      background-color="#303133"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
      unique-opened
      :default-active="activePath"
    >
      <template v-for="item in menu" :key="item.index">
        <template v-if="!item.sub">
          <el-menu-item :index="item.index">
            <i :class="item.icon"></i>
            <template #title>
              <span class="menu-title">{{ item.title }}</span>
            </template>
          </el-menu-item>
        </template>
        <template v-else>
          <el-submenu index="1">
            <template #title>
              <i :class="item.icon"></i>
              <span class="menu-title">{{ item.title }}</span>
            </template>
            <el-menu-item
              :index="item.index"
              class="menu-item"
              v-for="item in item.sub"
              :key="item.index"
              >{{ item.title }}</el-menu-item
            >
          </el-submenu>
        </template>
      </template>
    </el-menu>
    <i
      :class="['check-menu-icon', isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold']"
      @click="isCollapse = !isCollapse"
    ></i>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, ref, reactive } from 'vue'
  import { useRoute } from 'vue-router'
  import { useStore } from 'vuex'
  export default defineComponent({
    components: {},
    setup() {
      const store = useStore()
      const route = useRoute()
      let isCollapse = ref(false)
      let menu = reactive<any>([
        {
          icon: 'iconfont icon-yibiao',
          index: '/dashboard',
          title: '仪表盘'
        },
        {
          icon: 'iconfont icon-moban',
          index: '',
          title: '模板',
          sub: [
            {
              index: '/template/leven1',
              title: '子页面'
            }
          ]
        }
      ])
      const activePath = computed(() => {
        const { meta } = route
        if (meta.activeMenu) {
          return meta.activeMenu
        }
        return route.path
      })
      function selectMenu(e: string, { menus = menu }) {
        for (const value of menus) {
          if (value.sub) {
            selectMenu(e, { menus: value.sub })
          }
          if (value.index === e) {
            store.commit('app/increment', [value])
            break
          }
        }
      }
      return {
        menu,
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
      //padding-left: 29px !important;
    }
  }
</style>
