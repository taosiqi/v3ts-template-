<template>
  <el-main class="app-main">
    <transition name="el-fade-in-linear">
      <keep-alive>
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </el-main>
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
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
    flex: 1;
  }
</style>
