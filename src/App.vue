<template>
  <router-view />
</template>
<script>
  import { defineComponent } from 'vue'
  import Watermark from '@/utils/watermark'
  import { formatTime } from '@/utils/utils'
  export default defineComponent({
    name: 'apps',
    components: {},
    mounted() {},
    setup() {
      new Watermark().setWatermark('嘻哈后台管理系统-' + formatTime())
      return {}
    }
  })
</script>
<style lang="scss"></style>
