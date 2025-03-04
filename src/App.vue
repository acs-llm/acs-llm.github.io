<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import useLoading from '@/hooks/useLoading'

useLoading()
</script>

<template>
  <div class="common-layout">
    <TheHeader />
    <el-scrollbar>
      <RouterView />
    </el-scrollbar>
  </div>
</template>

<style lang="less" scoped>
.common-layout {
  height: 100%;

  .el-scrollbar {
    height: calc(100% - 60px);
  }
}
</style>
