<template>
  <div class="home">
    <full-page :options="options">
      <div class="section">
        <home-top></home-top>
      </div>
      <div class="section">
        <home-bottom></home-bottom>
      </div>
      <div class="section fp-auto-height footer" >
        <Footer></Footer>
      </div>
    </full-page>
  </div>
</template>

<script>
import Footer from '@/components/footer.vue';
import HomeTop from '../../components/homeTop.vue';
import HomeBottom from '../../components/homeBottom.vue';

export default {
  name: 'Home',
  components: {
    HomeTop,
    HomeBottom,
    Footer,
  },
  data() {
    return {
      options: {
        licenseKey: 'YOUR_KEY_HEERE',
        scrollOverflow: true,
        scrollBar: false,
      },
    };
  },
};
</script>

<style lang="less">
.footer{
  height: 29.63vh !important;
}
</style>
