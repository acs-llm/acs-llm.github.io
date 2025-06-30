<template>
  <div class="home">
    <div class="head">
      <div class="banner">
        <div class="text">
          <h1 class="title font-lato">The 1st Workshop on AI Cluster Systems for LLMs (ACS-LLM)</h1>
          <h3 class="subtitle">Joint Workshop Co-located with ISCA 2025</h3>
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
        <div class="scroll-buttons">
          <!--          <el-button @click="scrollToTarget('#papers')" class="btn">Call for Papers</el-button>-->
          <el-button @click="scrollToTarget('#registration')" class="btn">Registration</el-button>
        </div>
      </div>
    </div>
    <div ref="scrollTarget" class="scroll-container pa pa-header p">
      <div class="workshop">
        <h3 class="paragraph-title">About the Workshop</h3>
        <p class="p">
          The emergence of large language and multimodal models (LLMs) has unlocked unprecedented opportunities in
          artificial intelligence but also introduced significant challenges for AI cluster systems. Supporting the
          training and inference of these models requires the development of efficient, reliable, and scalable AI
          infrastructure. This necessitates a deep understanding of how operators, model architectures, and parallel
          algorithms impact key AI cluster resources, including computing power, memory, and networking. Additionally,
          with models now reaching hundreds of billions or even trillions of parameters and clusters expanding to tens
          or hundreds of thousands of GPUs, ensuring the core quality attributes of AI cluster systems (such as
          accuracy, performance, and reliability) has become an urgent and complex challenge.
        </p>
      </div>
      <div class="papers-content">
        <h3 class="paragraph-title">GROUP PHOTO</h3>
        <div>
          <img src="../assets/image/GroupPhoto.jpg" alt="合照" />
        </div>
      </div>
      <div class="papers-content">
        <h3 class="paragraph-title">Important Dates</h3>
        <div>
          <ul>
            <li>Workshop Date: June 21st, 2025</li>
          </ul>
        </div>
      </div>
      <div id="registration" class="registration-content">
        <h3 class="paragraph-title">Registration</h3>
        <p class="p">
          The 1st ACS-LLM is co-hosted with ISCA 2025. Information on registration for the workshops can be found
          <a target="_blank" href="https://iscaconf.org/isca2025/" class="link">here</a>.
          <br> For more information, please contact us at
          <a target="_blank" href="mailto:junsun@smu.edu.sg" class="link">junsun@smu.edu.sg</a>
        </p>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { Location } from '@element-plus/icons-vue'

const scrollTarget = ref()

const scrollToTarget = async (id: string) => {
  await nextTick()
  if (scrollTarget.value) {
    scrollTarget.value.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<style lang="less" scoped>
.home {
  .head {
    min-height: calc(100vh - 60px);
    background: url(@/assets/image/home.jpg) no-repeat center center/cover;
    width: 100%;
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    .banner {
      position: relative;
      top: 50%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      :deep(.el-icon) {
        vertical-align: middle;
        margin-right: 5px;
      }

      .text {
        width: 100%;
        max-width: 150rem;
        padding: 0 3rem;
        color: #fff;

        .title {
          font-size: 6rem;
          font-weight: bold;
          line-height: 1.5;
          text-align: center;
        }

        .subtitle {
          text-align: center;
          margin-top: 3rem;
          font-size: 2.8rem;
          color: #f3f3f3;
          font-style: italic;
          font-weight: 400;

          a {
            color: #fff;
            text-decoration: underline;
          }
        }

        .tip {
          margin-top: 5rem;
          text-align: center;
          font-size: 2rem;
        }
      }

      .scroll-buttons {
        margin: 10rem 0;
        width: 100%;

        .btn {
          padding: 6px 28px;
          color: #000;
          background-color: #fff;
          margin: 0 1rem;
          width: 150px;
          border-radius: 0;
        }
      }
    }
  }

  .head::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .scroll-container {
    max-width: 100rem;
    padding: 10rem 2rem;
    margin: auto;

    h3 {
      font-weight: 700;
      font-size: 24px;
    }

    .paragraph-title {
      color: #b22222;
      letter-spacing: 1px;
      margin: 0 0 30px;
      text-transform: uppercase;
      text-align: left;
    }

    .workshop {

    }

    .papers-content {
      margin: 10rem 0;

      .mark-red {
        color: #ff0000;
        font-weight: bold;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .registration-content {
      margin: 10rem 0;
    }
  }

  .pa {
    margin-top: 1.4rem;

    &.pa-header {
      line-height: 2.0;
    }

    &.pa-content {
      line-height: 1.8;
    }
  }

}
</style>