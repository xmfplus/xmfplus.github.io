---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Iot Core
  actions:
    - theme: brand
      text: 社群项目
      link: /projects/community/
    - theme: alt
      text: IoT Core
      link: /projects/iot/

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
  console.log(1)
</script>

<el-carousel height="150px" style="marigin-top:12px;">
  <el-carousel-item v-for="item in 4" :key="item">
    <h3 class="small justify-center" text="2xl">{{ item }}</h3>
  </el-carousel-item>
</el-carousel>

<style> 
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
