<template>
  <div class="program">
    <div class="date center">Saturday, June 21st, 2025</div>
    <table>
      <thead>
      <tr>
        <th style="width:120px">Time</th>
        <th>Topics</th>
        <th>Speaker</th>
        <th>Moderator</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="center">9:00 - 9:05</td>
        <td>Opening Address</td>
        <td>Jun Sun<br>Singapore Management University</td>
        <td class="center" rowspan="5">TBD</td>
      </tr>
      <tr>
        <td class="center">9:05 - 9:35</td>
        <td>Talk 1: Towards Large Reasoning Models as Judge</td>
        <td>Bingsheng He<br>National University of Singapore</td>
      </tr>
      <tr>
        <td class="center">9:35 - 10:05</td>
        <td>Talk 2: Programmable Networks for Distributed Deep Learning: Advances and Perspectives</td>
        <td>Marco Canini<br>King Abdullah University of Science and Technology</td>
      </tr>
      <tr>
        <td class="center">10:05 - 10:35</td>
        <td>Talk 3: WaferLLM: Large Language Models at Wafer Scale and Beyond</td>
        <td>Luo Mai<br>University of Edinburgh</td>
      </tr>
      <tr>
        <td class="center">10:35 - 11:05</td>
        <td>Talk 4: Situational AI Safety</td>
        <td>Jun Sun<br>Singapore Management University</td>
      </tr>
      <tr>
        <td class="center">11:05 - 11:30</td>
        <td class="center" colspan="2">Taking Photo & Coffee Break</td>
      </tr>
      <tr>
        <td class="center">11:30 - 12:00</td>
        <td>Talk 5: Building Four-dimensional Parallel Training Systems for Large AI Models</td>
        <td>Heming Cui<br>The University of Hong Kong</td>
        <td class="center" rowspan="4">Jun Sun</td>
      </tr>
      <tr>
        <td class="center">12:00 - 12:30</td>
        <td>Talk 6: Parallelism in LLMs: Beyond Data, Tensor, and Pipeline Parallelism</td>
        <td>Mohamed WAHIB<br>RIKEN</td>
      </tr>
      <tr>
        <td class="center">12:30 - 13:00</td>
        <td>Panel：Performance, Accuracy, and Reliability Evaluation and Assurance for Large-scale AI Cluster Systems</td>
        <td>All speakers</td>
      </tr>
      <tr>
        <td class="center">13:00 – 13:05</td>
        <td>Closing Speech</td>
        <td>Hironori Washizaki<br>Waseda University</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less" scoped>
table {
  border-collapse: collapse;
  border: 1px solid #ccc; /* 设置表格边框样式和颜色 */
  width: 100%;

  th,
  td {
    border: 1px solid #ccc; /* 设置表格边框样式和颜色 */
    padding: 10px;
  }

  th {
    font-weight: bolder;
  }
}

.program {
  max-width: 120rem;
  margin: 0 auto;
  padding: 20px 0;

  .date {
    font-weight: bold;
    line-height: 4.5rem;
    background-color: #1A2C78; // 更改为深蓝色
    color: #ffffff; // 添加白色文字以提高可读性
    padding: 0 1rem;
    margin-top: 2rem;
  }

  .center {
    text-align: center;
  }

  :deep(.header) {
    color: #333;

    > div {
      font-weight: bold;
      font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
  }

  :deep(.rest) {;
  }

  :deep(.multiple-events) {
    background-color: #f0f0f0;
  }

  .keynote {
    color: #000;
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }

  .speaker {
    color: #333;
    display: block;
    margin-bottom: 1rem;
  }

  .tip {
    text-align: center;
    font-size: 1.6rem;
    color: #333;
    line-height: 1.8;
  }
}
</style>