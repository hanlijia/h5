<template>
  <div>
    <gold-nav></gold-nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
  import goldNav from './nav'
  export default {
    components: {
      goldNav
    },
    metaInfo() {
      return {
        title: '出/入金'
      }
    },
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>
<style scoped lang="scss">
</style>
