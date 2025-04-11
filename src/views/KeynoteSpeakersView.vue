<template>
  <div class="keynote-speakers">
    <!-- 主标题 -->
    <h1 class="title1 font-merri">Invited Speakers</h1>

    <!-- 遍历speakers数组，为每个演讲者创建一个部分 -->
    <div v-for="(speaker, index) in speakers" :key="index" class="speaker-section">
      <div class="speaker-content">
        <!-- 演讲者照片 -->
        <div class="speaker-photo">
          <img :src="getImageUrl(speaker.photo)" :alt="speaker.name" />
          <div class="icon">
            <a :href="speaker.personalPage" target="_blank">
              <img class="icon-item" src="../assets/image/icon/globe.svg" alt="" />
            </a>
            <a :href="speaker.academicPage" target="_blank">
              <img class="icon-item" src="../assets/image/icon/google.svg" alt="" />
            </a>
          </div>
        </div>
        <!-- 演讲者信息 -->
        <div class="speaker-info">
          <h2 class="speaker-name">{{ speaker.name }}</h2>
          <p><span class="bold">Speech:</span> <span class="bolder">{{ speaker.keynote }}</span></p>
          <p>
            <span class="bold">Abstract:</span> <span class="italic">{{ speaker.abstract }}</span>
          </p>
        </div>
      </div>
      <!-- 演讲者简历 -->
      <div class="speaker-bio">
        <p><span class="bold">Bio:</span> {{ speaker.bio }}</p>
      </div>
      <!-- 如果不是最后一个演讲者，添加分隔线 -->
      <el-divider v-if="index < speakers.length - 1" />
    </div>
  </div>
</template>

<script setup lang="ts">
const speakers = [
  {
    id: 'Stefanos_Kaxiras',
    name: 'Stefanos Kaxiras, Uppsala University',
    photo: 'Stefanos Kaxiras.jpg',
    title: '',
    keynote: '',
    abstract: '',
    bio: '',
    personalPage: 'https://www.uu.se/en/contact-and-organisation/staff?query=N9-1645',
    academicPage: 'https://scholar.google.com/citations?user=-FYgbQwAAAAJ&hl=en'
  },
  {
    id: 'Bingsheng_He',
    name: 'Bingsheng He, National University of Singapore',
    photo: 'Bingsheng He.jpg',
    title: '',
    keynote: '',
    abstract: '',
    bio: '',
    personalPage: 'https://www.comp.nus.edu.sg/~hebs/',
    academicPage: 'https://scholar.google.com/citations?user=_S92MLYAAAAJ&hl=zh-CN'
  },
  {
    id: 'Heming_Cui',
    name: 'Heming Cui, The University of Hong Kong',
    photo: 'Heming Cui.jpg',
    title: '',
    keynote: '',
    abstract: '',
    bio: '',
    personalPage: 'https://i.cs.hku.hk/~heming/',
    academicPage: 'https://scholar.google.com/citations?user=lW9bpFIAAAAJ&hl=zh-CN'
  },
  {
    id: 'Marco_Canini',
    name: 'Marco Canini, King Abdullah University of Science and Technology',
    photo: 'Marco Canini.jpg',
    title: '',
    keynote: '',
    abstract: '',
    bio: '',
    personalPage: 'https://mcanini.github.io/',
    academicPage: 'https://scholar.google.com/citations?user=c-rwMUkAAAAJ&hl=zh-CN'
  },
  {
    id: 'Mohamed_WAHIB',
    name: 'Mohamed WAHIB, RIKEN',
    photo: 'Mohamed WAHIB.jpg',
    title: '',
    keynote: '',
    abstract: '',
    bio: '',
    personalPage: 'https://www.r-ccs.riken.jp/en/research/labs/hpaisrt/',
    academicPage: 'https://scholar.google.com/citations?user=C3fmEegAAAAJ&hl=en'
  }
]

const getImageUrl = (name: string) => {
  return new URL(`../assets/image/photos/${name}`, import.meta.url).href
}
</script>

<style lang="less" scoped>
.bolder {
  font-weight: bolder;
}

.keynote-speakers {
  color: #333;
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;


  // 主标题样式
  .title1 {
    color: #1a365d;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    margin-top: 50px;
  }

  // 每个演讲者部分的样式
  .speaker-section {
    margin-bottom: 2rem;
  }

  // 演讲者内容布局
  .speaker-content {
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;
  }

  // 演讲者照片样式
  .speaker-photo {
    flex: 0 0 200px;

    img {
      width: 100%;
      height: 220px;
      object-fit: cover;
      border-radius: 5px;
    }

    .icon {
      height: 20px;
      display: flex;
      gap: 25px;
      justify-content: center;

      .icon-item {
        height: 18px;
        width: 18px;
        cursor: pointer;
        filter: brightness(0) opacity(0.5);
      }

      .icon-item:hover {
        filter: brightness(0) saturate(100%) invert(16%) sepia(100%) saturate(3000%) hue-rotate(330deg) brightness(1.1);
      }
    }
  }


  // 演讲者信息样式
  .speaker-info {
    flex: 1;

    p {
      margin-bottom: 0.5rem;
      line-height: 1.4;
    }
  }

  // 演讲者姓名样式
  .speaker-name {
    color: #2a4365;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    font-weight: bold;
    text-decoration: underline;
  }

  // 演讲者简历样式
  .speaker-bio {
    margin-top: 1rem;
    line-height: 1.4;
  }

  // 粗体文本样式
  .bold {
    font-weight: bold;
    color: #2c5282;
  }

  // 斜体文本样式
  .italic {
    font-style: italic;
  }

  // 分隔线样式
  .el-divider {
    margin: 2rem 0;
  }
}

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