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
          <p><span class="bold">Speech:</span> <span class="bolder">{{ speaker.title }}</span></p>
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
    name: 'Bingsheng He, National University of Singapore',
    photo: 'Bingsheng He.jpg',
    title: 'Towards Large Reasoning Models as Judge',
    keynote: '',
    abstract: 'The rise of Large Language Models (LLMs) as judges offers a scalable alternative to human evaluation and many other tasks in agentic AI systems. This talk explores Large Reasoning Models (LRMs) as a new direction for judgment tasks, like DeepSeek-R1 and OpenAI-o1. We present JudgeLRM, a family of LLM judges trained via reinforcement learning with outcome-driven rewards, which significantly outperforms SFT and state-of-the-art models, especially on tasks requiring deep reasoning. We also examine judgment biases in LRMs, uncovering issues like position and authority bias, as well as a novel “superficial reflection bias.” Despite strong reasoning ability, LRMs remain vulnerable to such biases. This talk outlines key insights and challenges in building more robust and trustworthy LRM-based evaluation systems as well as its applications.',
    bio: 'Dr. Bingsheng He is currently a Professor and Vice-Dean (Research) at School of Computing, National University of Singapore. Before that, he was a faculty member in Nanyang Technological University, Singapore (2010-2016), and held a research position in the System Research group of Microsoft Research Asia (2008-2010), where his major research was building high performance cloud computing systems for Microsoft. He got the Bachelor degree in Shanghai Jiao Tong University (1999-2003), and the Ph.D. degree in Hong Kong University of Science & Technology (2003-2008). His current research interests include cloud computing, database systems and high performance computing. He has been a winner for industry faculty awards from Microsoft, NVIDIA, Xilinx, Alibaba, Webank, SenseTime and AMD. His work also won multiple recognitions as “Best papers” collection or awards in top forums such as SIGMOD 2008, VLDB 2013 (demo), IEEE/ACM ICCAD 2017, PACT 2018, IEEE TPDS 2019, FPGA 2021, and VLDB 2023 (industry)/2024. Since 2010, he has (co-)chaired a number of international conferences and workshops, including IEEE CloudCom 2014/2015, BigData Congress 2018, ICDCS 2020 and ICDE 2024. He has served in editor board of international journals, including IEEE Transactions on Cloud Computing (IEEE TCC), IEEE Transactions on Parallel and Distributed Systems (IEEE TPDS), IEEE Transactions on Knowledge and Data Engineering (TKDE), Springer Journal of Distributed and Parallel Databases (DAPD) and ACM Computing Surveys (CSUR). He is an ACM Distinguished member and an IEEE Fellow.',
    personalPage: 'https://www.comp.nus.edu.sg/~hebs/',
    academicPage: 'https://scholar.google.com/citations?user=_S92MLYAAAAJ&hl=zh-CN'
  },
  {
    name: 'Heming Cui, The University of Hong Kong',
    photo: 'Heming Cui.jpg',
    title: 'Building Four-dimensional Parallel Training Systems for Large AI Models',
    keynote: '',
    abstract: 'The increasing modeling capacities of large DNNs (e.g., Transformer and GPT) have achieved unprecedented successes in various AI areas, including understanding vision and natural languages. The high modeling power a large DNN mainly stems from its increasing complexity (having more neuron layers and more neuron operators in each layer) and dynamicity (frequently activating/deactivating neuron operators in each layer during training, such as Neural Architecture Search, or NAS). Such complexity and dynamicity can easily make a large DNN exceed the computing and memory capacities of a modern GPU, so training a large DNN often often needs to split the DNN into many GPUs via multiple dimensions, including data parallelism, tensor parallelism, and pipeline parallelism. Dr. Cui’s talk will present his recent papers (e.g., [PipeMesh, in revision of a journal], [Fold3D TPDS 2023], [NASPipe ASPLOS 2022], and [vPipe TPDS 2021]), which address major limitations in existing multi-dimensional parallel training systems, including GPipe, Pipedream, and Megatron. For instance, vPipe focuses on addressing the severe load imbalance and low GPU computing utilization; NASPipe will present Supernet parallelism, a new parallel training dimension for highly dynamic large DNNs designed in the Supernet manners (e.g., Evolved Transformer and Neural Architecture Search). Fold3D is now the major thousands-GPU parallel training system on the world-renowned MindSpore AI framework.',
    bio: 'Dr. Heming Cui (cs.hku.hk/people/academic-staff/heming) is an Associate Professor in HKU CS. Dr. Cui is interested in building software infrastructures and tools to greatly improve the reliability, security and performance of real-world software. After gaining his PhD degree in the Columbia University in 2015, he joined HKU and independently built a parallel and distributed system group with about 20 ongoing, full-time PhD students. His recent research has led to a series of open source projects and publications in international top conferences and journals of broad areas, including SOSP, IEEE S&P, VLDB, TPDS, MICRO, NSDI, ASPLOS, ATC, ICSE, EuroSys. In recent three years, Dr. Cui serves on the program committees for at least once of international top systems/networking conferences, including OSDI, SIGCOMM, ASPLOS, NSDI, ATC, and EuroSys. Dr. Cui received the ACM ICSE 2025 best paper award and the ACM ACSAC 2017 best paper award. He serves as the general chair of ACM APSys 2016 and 2021, and the program chair of ACM ChinaSys 2023. As a research project leader, his research projects have received a total fundings of about HKD $150 million, including the major fundings from Mainland China\'s National Key R&D Program (CNY $110 million), HK\'s Research Grants Council (e.g., the RGC Research Impact Fund in 2023), HK\'s Innovation & Technology Commission, and the Croucher Foundation. Dr. Cui\'s recent secure system papers (e.g., [Uranus AsiaCCS 2020] and [Cronus MICRO 2022]), and their resultant Ubiquitous Trusted Execution Environments (UTEE) project, have become the core commercial system of Huawei\'s Trusted and Intelligent Cloud Services (https://www.huaweicloud.com/product/tics.html) in 2021. Dr Cui’s parallel big AI model training systems (e.g., [Fold3D TPDS 2023], [NASPipe ASPLOS 2022], and [vPipe TPDS 2021]) are implemented on the PyTorch library and Nvidia’s GPUs with the support of general big AI models (e.g., Transformer, GPT, CPM, and Pan-Gu); Dr Cui’s Fold3D work is now the major thousands-GPU parallel training system on the world-renowned MindSpore AI framework. Dr Cui received his bachelor and master degrees from Tsinghua University, and PhD from Columbia University, all in Computer Science.',
    personalPage: 'https://i.cs.hku.hk/~heming/',
    academicPage: 'https://scholar.google.com/citations?user=lW9bpFIAAAAJ&hl=zh-CN'
  },
  {
    name: 'Marco Canini, King Abdullah University of Science and Technology',
    photo: 'Marco Canini.jpg',
    title: 'Programmable Networks for Distributed Deep Learning: Advances and Perspectives',
    keynote: '',
    abstract: '',
    bio: 'Marco does not know what the next big thing will be. He asked ChatGPT, though the answer was underwhelming. But he\'s sure that our future next-gen computing and networking infrastructure must be a viable platform for it. Marco\'s research spans a number of areas in computer systems, including distributed systems, large-scale/cloud computing and computer networking with emphasis on programmable networks. His current focus is on designing better systems support for AI/ML and providing practical implementations deployable in the real world. Marco is a Professor of Computer Science at KAUST. Marco obtained his Ph.D. in computer science and engineering from the University of Genoa in 2009 after spending the last year as a visiting student at the University of Cambridge. He was a postdoctoral researcher at EPFL and a senior research scientist at Deutsche Telekom Innovation Labs & TU Berlin. Before joining KAUST, he was an assistant professor at UCLouvain. He also held positions at Intel, Microsoft and Google.',
    personalPage: 'https://mcanini.github.io/',
    academicPage: 'https://scholar.google.com/citations?user=c-rwMUkAAAAJ&hl=zh-CN'
  },
  {
    name: 'Mohamed WAHIB, RIKEN',
    photo: 'Mohamed WAHIB.jpg',
    title: 'Parallelism in LLMs: Beyond Data, Tensor, and Pipeline Parallelism',
    keynote: '',
    abstract: 'Large Language Models (LLMs) require enormous computational resources to train and deploy effectively. While techniques like data, tensor, and pipeline parallelism have become standard approaches to distribute this workload, the next frontier in parallelism promises to push the boundaries of model scalability and efficiency even further. This talk explores emerging methods and strategies for parallelism beyond the current paradigms, focusing on optimizing memory utilization, improving inter-node communication, and leveraging hardware advancements. We will also discuss the challenges of scaling LLMs and how future innovations in parallelism can unlock unprecedented performance gains.',
    bio: 'Mohamed Wahib is a team leader of the “High Performance Artificial Intelligence Systems Research Team” at RIKEN Center for Computational Science (R-CCS), Kobe, Japan. Prior to that he worked as is a senior scientist at AIST/TokyoTech Open Innovation Laboratory, Tokyo, Japan. He received his Ph.D. in Computer Science from Hokkaido University, Japan. His research interests revolve around the central topic of high-performance programming systems, in the context of HPC and AI. He is actively working on several projects including AI-based science, as well as high-level frameworks for programming traditional scientific applications.',
    personalPage: 'https://www.r-ccs.riken.jp/en/research/labs/hpaisrt/',
    academicPage: 'https://scholar.google.com/citations?user=C3fmEegAAAAJ&hl=en'
  },
  {
    name: 'Luo Mai, University of Edinburgh',
    photo: 'Luo Mai.jpg',
    title: 'WaferLLM: Large Language Models at Wafer Scale and Beyond',
    keynote: '',
    abstract: 'Emerging wafer-scale AI accelerators integrate hundreds of thousands of cores with massive on-chip memory and ultra-high bandwidth, yet existing LLM inference systems—designed for GPUs—fail to leverage their full potential. In this talk, I’ll present WaferLLM, the first LLM inference system tailored for wafer-scale architectures. Guided by our new PLMRmodel, which captures key hardware characteristics, WaferLLM introduces wafer-scale parallelism and efficient LLM kernels—MeshGEMM and MeshGEMV—to optimize accelerator utilization. On real hardware (Cerebras WSE), WaferLLM achieves up to 200× better utilization, 606× faster and 22× more energy-efficient GEMV than advanced GPUs, enabling up to 2700 toks/sec/req and 39× faster decoding for widely used LLMs. In the end, if time permits, I will discuss our ongoing work on scaling AI systems beyond a single wafer.',
    bio: 'Prof. Luo Mai is an Associate Professor in the School of Informatics at the University of Edinburgh, where he leads the Large-Scale Machine Learning Systems Group. He co-leads the UK EPSRC CDT in Machine Learning Systems and the ARIA project on Scaling AI Compute by 1000X.\n' +
      '\n' +
      'His research combines computer systems, machine learning, and data management, with work published at OSDI, SOSP, NSDI, VLDB, JMLR, ICML, NeurIPS, and ECCV. He has received awards from Google, Microsoft, Alibaba, and Tencent. He authored the open-source textbook Machine Learning Systems and co-founded projects such as TensorLayer, TorchOpt, and ServerlessLLM, together receiving more than 20K GitHub stars.\n' +
      '\n' +
      'He previously worked at Imperial College London and Microsoft Research, and earned his PhD with support from a Google Fellowship in Cloud Computing.',
    personalPage: 'https://luomai.github.io/',
    academicPage: 'https://scholar.google.com/citations?user=I6GYccIAAAAJ&hl=en'
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
  max-width: 120rem;
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