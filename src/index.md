---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "习码坊+"
#   text: "个人技术记录"
#   tagline: １、记录一些自己的技术点；２、记录一些自己的学习笔记。
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

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

<el-carousel height="auto">
  <el-carousel-item height="auto" v-for="item in 4" :key="item">
    
  </el-carousel-item>
</el-carousel>

<div class="bg_top">
  <div class="inner_bog_top"></div>
</div>

<style> 
.bg_top {
      height: 480px;
    background-image: url(https://promotion-static.tuyacn.com/static/472597792922259456.png);
    background-position-x: 50%;
    background-position-y: 50%;
    background-size: cover;
    font-family: Lato;
    background-repeat: no-repeat;
}
.inner_bg_top {
      padding: 0px 72px;
    max-width: 1440px;
    margin: 0px auto;
    height: 100%;
}
/* .el-carousel__item h3 {
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
} */
</style>
