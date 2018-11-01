<template>
  <div id="page">
    <bottom-list></bottom-list>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import bottomList from './nav'
  export default {
    name: 'page',
    components: {
      'bottom-list': bottomList
    }
  }
</script>

<style lang="scss">
  @import "../../assets/scss/base";
  @import "../../assets/scss/common";
  @import "../../assets/scss/var";
  #page{
    height: 100%;
    background-color: #f8f8f8;
  }
</style>
