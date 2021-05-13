<template>
  <div>home</div>
  <button @click="$router.push({ name: 'Leven2' })">ho,e</button>
</template>

<script setup lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import { getList } from '@/api/test'
  import { guid } from '@/utils/utils'
  import to from 'await-to-js'
  // ref:num = 100
  onMounted(async () => {
    const [err, data] = await to(getList({ path: '123', content: '123' }))
    console.log(data)
    console.log(err)
    console.log(guid())
  })
</script>
