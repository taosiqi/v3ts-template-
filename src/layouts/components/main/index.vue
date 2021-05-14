<template>
  <div class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="el-fade-in-linear">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
    <el-backtop target=".app-main"></el-backtop>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    setup() {
      return {}
    }
  })
</script>

<style lang="scss" scoped>
  .app-main {
    height: calc(100% - 80px);
    overflow-y: auto;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
