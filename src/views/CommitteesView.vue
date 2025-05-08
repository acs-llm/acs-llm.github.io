<template>
  <div class="committees">
    <div class="container">
      <div class="title1 font-merri">Organizing Committee</div>
      <div class="title2 section-title">Program Co-Chairs</div>
      <div class="text-content">
        <img src="../assets/image/photos/sun_jun.jpg" style="width:200px" alt="">
        <p class="pa-header p">
          <a target="_blank" href="https://faculty.smu.edu.sg/profile/sun-jun-6816" class="link">Prof. SUN Jun</a>,
          Professor of Computer Science at Singapore Management University. His research
          interests span AI safety, software engineering, formal methods, and more. Professor Sun has published over
          300 journal articles and conference papers. His work has been recognized with ACM Distinguished Paper Awards
          multiple times and he has successfully organized multiple international conferences and symposiums.
        </p>
      </div>

      <div class="text-content">
        <img src="../assets/image/photos/Hironori_Washizaki.jpg" style="width:200px" alt="">
        <p class="pa-header p">
          <a target="_blank" href="http://www.washi.cs.waseda.ac.jp/washizaki/" class="link">Prof. Hironori
            Washizaki</a>, is a Professor and the Associate Dean at Waseda University in Tokyo. He has been
          elected IEEE CS 2025 President. He has served as Associate Editor of IEEE Transactions on Emerging Topics in
          Computing, and Steering Committee Member of multiple conferences. He has served as the program chair of
          multiple IEEE conferences, including ICST, CSEE&T, and SIoT/SISA of COMPSAC. He has published more than 200
          research papers in refereed international journals and conferences.
        </p>
      </div>
    </div>
  </div>

</template>

<style lang="less" scoped>
.committees {
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    max-width: 100rem;
    margin-top: 8rem;

    .text-content {
      display: flex;
      margin: 0 0 5rem 0;
    }

    .pa-header {
      line-height: 1.8;
      padding: 0 2rem;
    }

    .pa-content {
      line-height: 1.6;
      margin-top: 1.4rem;
    }

    .section-title {
      margin: 2rem 0;
    }
  }
}
</style>
<script setup lang="ts">
</script>