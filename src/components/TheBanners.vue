<template>
  <div class="banner-container">
    <div class="text">
      <div class="content">
        <h3 class="title font-lato">The 1st Workshop on AI Cluster Systems for LLMs (ACS-LLM)</h3>
        <h5 class="subtitle">Joint Workshop Co-located with ISCA 2025</h5>
        <div class="tip font-merri">
          <el-icon>
            <Location />
          </el-icon>
          <a target="_blank"
             href="https://www.google.com/maps/place/Waseda+University/@35.7087377,139.7170736,17z/data=!3m1!4b1!4m6!3m5!1s0x60188d1a4869b805:0x11e214c5de0808a8!8m2!3d35.7087334!4d139.7196485!16zL20vMDIxMnpw?hl=en&entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
             class="location">Waseda University</a>
        </div>
        <div class="tip font-merri">Tokyo, Japan, June 21st, 2025</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { Location } from '@element-plus/icons-vue'
</script>

<style scoped lang="less">
.banner-container {
  height: 300px;
  background: url(@/assets/image/banners.jpg) no-repeat center center/cover;
  width: 100%;

  .text {
    width: 100%;
    color: #fff;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;

    .content {
      position: relative;
      max-width: 150rem;

      .title {
        font-size: 4rem;
        font-weight: 700;
        line-height: 1.2;
        text-align: center;
      }

      .subtitle {
        text-align: center;
        margin-top: 1rem;
        font-size: 2.2rem;
        color: #f3f3f3;
        font-style: italic;
        font-weight: 400;

        a {
          color: #fff;
          text-decoration: underline;
        }
      }

      .tip {
        margin-top: 1.6rem;
        text-align: center;
        font-size: 2rem;
      }
    }

  }
}

.text::before {
  content: "";
  position: absolute;
  top: 60px;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  height: 300px;
}
</style>