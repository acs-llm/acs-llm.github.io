<template>
  <div class="keynote-speakers">
    speakers
  </div>
</template>

<script>

</script>

<style lang="less" scoped>
// 响应式布局：在小屏幕上调整布局
@media (max-width: 768px) {
  .keynote-speakers {
    .speaker-content {
      flex-direction: column;
    }

    .speaker-photo {
      margin-bottom: 1rem;
    }
  }
}
</style>