<template>
  <div class="top-content"
         id="topContent">
      <Header :showBg="showBg"></Header>
      <img src="../assets/image/content/background 1-home.png"
           alt="背景图">
      <div class="top-wrap">
        <img class="top-here"
             src="../assets/image/content/here.png"
             alt="">
        <div class="top-font">
          <span>查看队友战斗风格</span>
          <span>玩家战绩查询</span>
          <span>队友助攻及击杀数</span>
          <span>开局内击杀最多人</span>
          <span>标记航线路径</span>
          <span>换号无需重设按键</span>
        </div>
        <div class="onload-btn">
          <span class="load">下载客户端</span>
        </div>
        <div class="top-mouse">
          <img src="../assets/image/content/down-home.png"
               alt="">
        </div>
        <div class="top-pubg">
          <span class="pubg-font">专注于 : </span>
          <img class="pubg-img"
               src="../assets/image/content/pubg.png"
               alt="">
        </div>
      </div>
    </div>
</template>

<script>
import Header from '@/components/header.vue';

export default {
  components: {
    Header,
  },
  data() {
    return {
      showBg: true,
    };
  },
};
</script>

<style lang="less">
@import url('~@/assets/css/homeTop.less');

</style>
