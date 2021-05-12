<template>
  <router-view />
</template>
<script>
  import { defineComponent } from 'vue'
  import Watermark from '@/utils/watermark'
  export default defineComponent({
    name: 'apps',
    components: {},
    mounted() {
      let a = new Watermark()
      a.setWatermark('123')
    },
    setup() {}
  })
</script>
<style lang="scss"></style>
