<template>
  <el-affix>
    <el-menu class="menu" mode="horizontal" router :default-active="route.path">
      <div class="logo-content">
        <img
          src="@/assets/image/logo.png"
          alt="ACS-LLM Workshop Logo"
          class="logo-image"
        />
      </div>
      <div class="menu-right">
        <el-menu-item index="/">HOME</el-menu-item>
        <el-menu-item index="/program">PROGRAM</el-menu-item>
        <el-menu-item index="/speakers">SPEAKERS</el-menu-item>
        <el-menu-item index="/committees">COMMITTEES</el-menu-item>
      </div>
    </el-menu>
  </el-affix>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style lang="less" scoped>
.menu {
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;

  .logo-content {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 2.2rem;
  }

  .logo-image {
    height: 40px; // 调整这个值以适应您的图片和设计需求
    width: auto;
    object-fit: contain;
  }

  .logo-image-time {
    height: 30px;
    width: auto;
  }

  .menu-right {
    display: flex;

    .link:hover {
      background-color: transparent;
    }
  }

  :deep(.el-sub-menu__hide-arrow) {
    .el-tooltip__trigger {
      border-bottom: none;
      padding-right: 0;
    }
  }
}
</style>
