<template>
  <div class="contact">
    <Header></Header>
    <div class="contact-wrap">
      <img class="contact-bg1"
           src="../../assets/image/content/contactBg.png"
           alt="">
      <img class="contact-bg2"
           src="../../assets/image/content/contactFont.png"
           alt="">
      <div class="contact-content">
        <img class="contact-title"
             src="../../assets/image/content/contact.png"
             alt="">
        <div class="contact-describe">
          如您对GP玩家助手有任何问题，或想了解更多，欢迎通过 <a>hr@qize.work</a> 联系我们。
        </div>
        <div class="contact-form">
          <div class="form-font">
            请填写下列表单
          </div>
          <div class="select">
            <div>{{gameMode}}</div>
            <div :class="{'iconfont':true,'iconActive':listActive}"
                 @click="changeListActive()">&#xe62e;</div>
            <ul :class="{'list':true,'listActive':listActive}">
              <li @click="chooseGame('PUBG游戏模块')"
                  :class="{'liActive':listActive}">PUBG游戏模块</li>
            </ul>
          </div>
          <input type="name"
                 v-model="name"
                 placeholder="姓名">
          <input type="email"
                 v-model="email"
                 placeholder="邮箱">
          <textarea v-model="message"
                    placeholder="留言"></textarea>
          <button class="contact-button"
                  @click="submit">确认提交</button>
        </div>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';

export default {
  data() {
    return {
      listActive: false,
      gameMode: 'PUBG游戏模块',
      name: '',
      email: '',
      message: '',
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    changeListActive() {
      this.listActive = !this.listActive;
    },
    chooseGame(font) {
      this.formData.gameMode = font;
      this.listActive = !this.listActive;
    },
    submit() {
      this.message = '';
    },
  },
};
</script>

<style lang="less">
@import url('~@/assets/css/contact.less');
</style>
