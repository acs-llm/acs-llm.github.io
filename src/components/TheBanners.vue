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
             href="https://maps.app.goo.gl/FLsUH4XaxZJoXt5s5"
             class="location">Okuma Auditorium (Main)</a>, Waseda University
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
    position: relative;

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

  .text::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    height: 300px;
  }
}
</style>