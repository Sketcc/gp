<template>
  <div class="about">
    <Header></Header>
    <div class="about-content">
      <img class="about-title"
           src="../../assets/image/content/company.png"
           alt="">
      <div class="about-describe">
        <div class="font">
          广州起泽科技有限公司成立于2020年10月，是一家面向于全国游戏直播插件和绿色游戏工具的平台，
          当前业务涵盖游戏辅助功能、游戏交易平台、租号平台等，为国内游戏界打造一站式多元化服务平台。
        </div>
        <div class="font">
          公司管理人员皆来自五湖四海，我们拥有一流的网站设计人员、顶尖的程序开发人员、
          专业的销售和服务人员，在强力的市场竞争和需求下，公司愿以玩家为核心，
          将游戏的便捷性、舒适性、健康绿色的第三方游戏辅助功能辐射至玩家，
          整合一切可利用资源帮助客户实现愿景和目标、将游戏场景更加真实化、完整化。
          公司致力于推动绿色游戏方式的观念，凭借对"绿色、安全、高效、快捷、稳定"的不断地追求，
          致力将本公司打造为一家高品质互联网单位，力争成为游戏界网络公司首选企业。
        </div>
        <div class="font">
          起泽科技的核心战略是专注“游戏全球化”和“人工智能”。
          一方面，我们坚定不移地开展游戏多元化直播的战略，增加更多优秀的绿色辅助直播插件，游戏衍生品的规划，
          使我们成为一流的游戏直播平台公司。
          另一方面，以玩家需求为导向，以人工智能及大数据技术赋能，为玩家创造更加多元化的游戏应用场景和更加愉悦的体验。
        </div>
        <img class="about-qzfont"
             src="../../assets/image/content/qzdescribe.png"
             alt="">
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';

export default {
  data() {
    return {
      options: {
        licenseKey: 'YOUR_KEY_HEERE',
        scrollOverflow: true,
        scrollBar: false,
      },
    };
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="less">
@import url('~@/assets/css/about.less');
</style>
