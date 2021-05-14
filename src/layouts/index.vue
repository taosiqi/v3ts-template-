<template>
  <div class="container">
    <Sidebar />
    <div class="main">
      <Navbar />
      <AppMain />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'

  import { AppMain, Navbar, Settings, Sidebar } from './components/index'
  export default defineComponent({
    name: 'Layout',
    components: {
      AppMain,
      Navbar,
      Sidebar
    },
    setup() {
      return {}
    }
  })
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    height: 100vh;
    overflow: hidden;
    .main {
      flex: 1;
      min-height: 100%;
    }
  }
</style>
