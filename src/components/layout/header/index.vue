<template>
  <header class="header">
    <div class="head wow fadeInDown">
      <div class="layout">
        <img alt="" src="~@/static/images/logo.png" class="logo">
        <div class="nav">
          <ul>
            <li class="nav-item cur"><a href="default.html">网站首页</a></li>
            <li class="nav-item"><a href="service.html">医学测评</a></li>
            <li class="nav-item"><a href="feature.html">核心优势</a></li>
            <li class="nav-item"><a href="news.html">新闻资讯</a></li>
            <li class="nav-item"><a href="about.html">关于我们</a></li>
          </ul>
          <div class="move-bg"></div>
        </div>
        <div class="topicon">
          <a href="#">
            <i class="iconfont">&#xe66c;</i>
          </a>
        </div>
      </div>
    </div>
  </header>

</template>

<script>
  export default {
    props: [],
    components: {}
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/style/layout/header.scss";
</style>