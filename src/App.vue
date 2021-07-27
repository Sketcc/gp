<template>
  <div id="app">
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>
<style lang="less">
#app {
  -webkit-user-select: none;

  -moz-user-select: none;

  -ms-user-select: none;

  user-select: none;
}
</style>
