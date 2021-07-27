<template>
   <div class="bottom-content"
         id="bottomContent">
      <img src="../assets/image/content/background 3-home.png"
           alt="背景图">
      <div class="bottom-wrap">
        <img class="bottom-title"
             src="../assets/image/content/introduction.png"
             alt="">

        <!-- 轮播图 -->
        <div class="banner-box">
          <ul class="banner-list">
            <li :class="{'banner':true,
            'first-left':i===leftOne || (-i === leftOne),
            'second-left':i===leftTwo || (-i === leftTwo),
            'center':i === center || (-i === center),
            'second-right':i === rightTwo || (-i === rightTwo),
            'first-right':i===rightOne || (-i === rightOne), }"
                v-for="(banner,i) in bannerList"
                :key="i"
                @click="whitchCard(i)"
                @mouseenter="enter()"
                @mouseleave="autoMove()">
              <img class="poster"
                   :src="banner.poster"
                   :alt="banner.title" >
              <div :class="{'title':true,'titleActive':i !== center}">{{banner.title}}</div>
              <div :class="{'description':true,
              'descriptionActive':i !== center}">
                {{banner.descrition}}</div>
              <img :src="banner.top" :class="{'banner-topNone':true,'banner-top':i=== center}" />
              <div :class="{'top-fontNone':true,'top-font':i === center}">
                <img class="top-pic"
                     src="../assets/image/content/logo3.png"
                     alt="">
                <div class="top-font">GP玩家助手</div>
              </div>
              <img
              :src="banner.bottom"
              :class="{'banner-bottomNone':true,'banner-bottom':i=== center}" />
              <div
              :class="{'bottom-fontNone':true,'bottom-font': i === center}">
                <div>{{banner.font}}</div>
                <div>{{banner.des}}</div>
              </div>
              <div :class="{'modalActive':i !== center}"></div>
            </li>
          </ul>
          <div class="changeActive">
            <span class="iconfont"
                  @click="changeIndex(-1)"
                  @mouseenter="enter()"
                  @mouseleave="autoMove()">&#xe501;</span>
            <div class="changeCenter"><span>{{indexActive}}</span>/{{bannerList.length}}</div>
            <span class="iconfont"
                  @click="changeIndex(1)"
                  @mouseenter="enter()"
                  @mouseleave="autoMove()">&#xe603;</span>
          </div>
        </div>
        <!-- 轮播图结束 -->
        <img class="floatImg"
             src="../assets/image/content/sidefload.png"
             alt="">
      </div>
    </div>
</template>

<script>
import carousel1 from '../assets/image/carousel/carousel-1.png';
import carousel2 from '../assets/image/carousel/carousel-2.png';
import carousel3 from '../assets/image/carousel/carousel-3.png';
import carousel4 from '../assets/image/carousel/carousel-4.png';
import carousel5 from '../assets/image/carousel/carousel-5.png';
import carousel6 from '../assets/image/carousel/carousel-6.png';
import carousel7 from '../assets/image/carousel/carousel-7.png';
import carousel8 from '../assets/image/carousel/carousel-8.png';
import top1 from '../assets/image/carousel/1.1.png';
import top2 from '../assets/image/carousel/1.2.png';
import top3 from '../assets/image/carousel/2.1.png';
import top4 from '../assets/image/carousel/2.2.png';
import top5 from '../assets/image/carousel/3.1.png';
import top6 from '../assets/image/carousel/3.2.png';
import top7 from '../assets/image/carousel/4.1.png';
import top8 from '../assets/image/carousel/4.2.png';
import top9 from '../assets/image/carousel/5.1.png';
import top10 from '../assets/image/carousel/5.2.png';
import top11 from '../assets/image/carousel/6.1.png';
import top12 from '../assets/image/carousel/6.2.png';
import top13 from '../assets/image/carousel/7.1.png';
import top14 from '../assets/image/carousel/7.2.png';
import top15 from '../assets/image/carousel/8.1.png';
import top16 from '../assets/image/carousel/8.2.png';

export default {
  data() {
    return {
      scrollChange: `${100}px`,
      changeContent: true,
      showBg: true,
      bannerList: [
        {
          poster: carousel8,
          title: '局内击杀榜',
          descrition: 'The kill in the bureau',
          font: '游戏内最大淘汰王',
          des: '榜上杀手',
          top: top13,
          bottom: top14,
        },
        {
          poster: carousel3,
          title: '物资固定标记',
          descrition: 'Material fixation mark',
          font: '有固定物资刷新点',
          des: '快捷应用',
          top: top15,
          bottom: top16,
        },
        {
          poster: carousel2,
          title: '云端按键应用',
          descrition: 'cloud button application',
          font: '换号无需重新调整键位',
          des: '一键应用',
          top: top1,
          bottom: top2,
        },
        {
          poster: carousel5,
          title: '游戏开黑大厅',
          descrition: 'play with others platform',
          font: '免费开黑社交大厅',
          des: '展现实力',
          top: top3,
          bottom: top4,
        },
        {
          poster: carousel1,
          title: '航线自动标记',
          descrition: 'Automatic course marking',
          font: '航线走向如何',
          des: '把握大局',
          top: top5,
          bottom: top6,
        },
        {
          poster: carousel7,
          title: '局内队友战绩',
          descrition: "In the inning teammate's record",
          font: '游戏内队友战绩',
          des: '孰强孰弱',
          top: top7,
          bottom: top8,
        },
        {
          poster: carousel4,
          title: '交手次数标记',
          descrition: 'Number of matches marked',
          font: '多次匹配相同的人',
          des: '缘分开黑',
          top: top9,
          bottom: top10,
        },
        {
          poster: carousel6,
          title: '战友战绩查询',
          descrition: 'Comrade-in-Arms Search',
          font: '客户端战绩查询',
          des: '方便快捷',
          top: top12,
          bottom: top11,
        },
      ],
      indexActive: 1,
      leftOne: 0,
      leftTwo: 1,
      center: 2,
      rightTwo: 3,
      rightOne: 4,
      duration: 2500,
      timer: null,
      isbottom: true,
    };
  },
  beforeDestroy() {
    clearInterval(this.timer); // 清除定时器
    this.timer = null;
  },
  mounted() {
    this.autoMove();
  },
  methods: {
    changeIndex(i) {
      if (i > 0) {
        this.rightBtn();
      } else {
        this.leftBtn();
      }
    },
    enter() {
      clearInterval(this.timer); // 清除定时器
      this.timer = null;
    },
    autoMove() {
      clearInterval(this.timer); // 清除定时器
      this.timer = null;
      this.timer = setInterval(() => {
        this.rightBtn();
      }, this.duration);
    },
    rightBtn() {
      const { length } = this.bannerList;
      this.indexActive = (this.indexActive + 1) % (length + 1);
      if (this.indexActive === 0) {
        this.indexActive = 1;
      }
      this.leftOne = (this.leftOne + 1) % length;
      this.leftTwo = (this.leftTwo + 1) % length;
      this.center = (this.center + 1) % length;
      this.rightTwo = (this.rightTwo + 1) % length;
      this.rightOne = (this.rightOne + 1) % length;
    },
    leftBtn() {
      const { length } = this.bannerList;
      this.indexActive = (this.indexActive - 1) % (length + 1);
      if (this.indexActive === 0) {
        this.indexActive = length;
      }
      this.leftOne = (this.leftOne - 1) % 8 < 0 ? (length - 1) : (this.leftOne - 1) % length;
      this.leftTwo = (this.leftTwo - 1) % 8 < 0 ? (length - 1) : (this.leftTwo - 1) % length;
      this.center = (this.center - 1) % 8 < 0 ? (length - 1) : (this.center - 1) % length;
      this.rightTwo = (this.rightTwo - 1) % 8 < 0 ? (length - 1) : (this.rightTwo - 1) % length;
      this.rightOne = (this.rightOne - 1) % 8 < 0 ? (length - 1) : (this.rightOne - 1) % length;
    },
    whitchCard(i) {
      const { length } = this.bannerList;
      if (i === 0) {
        this.indexActive = length - 1;
        this.leftOne = length - 2;
        this.leftTwo = length - 1;
        this.center = i;
        this.rightTwo = (i + 1) % length;
        this.rightOne = (i + 2) % length;
      } else if (i === 1) {
        this.indexActive = length;
        this.leftOne = length - 1;
        this.leftTwo = 0;
        this.center = i;
        this.rightTwo = 2;
        this.rightOne = 3;
      } else {
        this.indexActive = i - 1;
        this.leftOne = (i - 2) % length;
        this.leftTwo = (i - 1) % length;
        this.center = i;
        this.rightTwo = (i + 1) % length;
        this.rightOne = (i + 2) % length;
      }
    },
  },
};
</script>

<style lang="less">
@import url('~@/assets/css/homeBottom.less');

</style>
