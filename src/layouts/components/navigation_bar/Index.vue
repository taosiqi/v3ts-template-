<template>
  <div class="navbar"> 导航栏</div>
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

<style lang="scss" scoped></style>
