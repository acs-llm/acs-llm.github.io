<template>
  <div class="common-layout" ref="layout">
    <TheHeader />

    <el-scrollbar>
      <TheBanners v-if="path !== '/'" />
      <RouterView />
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import useLoading from '@/hooks/useLoading'
import TheBanners from '@/components/TheBanners.vue'
import { ref, watch } from 'vue'

useLoading()

const route = useRoute()
const path = ref(route.path)

watch(
  () => route.path,
  (newPath) => {
    path.value = newPath
  }
)
</script>

<style lang="less" scoped>
.common-layout {
  height: 100%;

  .el-scrollbar {
    height: calc(100% - 60px);
  }
}
</style>
