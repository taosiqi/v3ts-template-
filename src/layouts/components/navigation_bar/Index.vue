<template>
  <div class="navbar">导航栏</div>
</template>

<script>
  import { computed, reactive, toRefs } from 'vue'
  export default {
    setup() {
      const state = reactive({
        toggleSideBar: () => {},
        logout: () => {}
      })
      return {
        ...toRefs(state)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navbar {
    position: fixed;
    width: 100%;
    height: 80px;
    z-index: 2;
    top: 0px;
    background-color: #b3c0d1;
  }
</style>
