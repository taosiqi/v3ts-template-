<template>
  <div class="app-wrapper">
    <Sidebar />
    <Navbar />
    <Settings />
    <AppMain />
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
      Settings,
      Sidebar
    },
    setup() {
      return {}
    }
  })
</script>

<style lang="scss" scoped></style>
