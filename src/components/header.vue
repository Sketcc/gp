<template>
  <header :class="{'header':true,'headerActive':showBg}">
    <div class="nav-left">
      <img class="nav-png"
           src="../assets/image/content/logo3.png"
           alt="">
      <div>
        <h1>GP玩家助手</h1>
        <span>GP Player Assistant</span>
      </div>
    </div>
    <div class="nav-right">
      <router-link to="/"
                   tag="div"
                   :class="{'active':collapsed}">首页</router-link>
      <router-link to="/contact"
                   tag="div"
                   :class="{'active':collapsed}">联系我们</router-link>
      <router-link to="/about"
                   tag="div"
                   :class="{'active':collapsed}">关于我们</router-link>
      <span :class="{'iconfont':true,'iconfontAct':collapsed}"
            @click="toggleCollapsed()">&#xe647;</span>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    showBg: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style lang="less">
@import url('~@/assets/css/header.less');
</style>
