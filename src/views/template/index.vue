<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="el-fade-in-linear">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
