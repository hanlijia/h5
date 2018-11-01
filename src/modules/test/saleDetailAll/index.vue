<template>
  <div>
    <sale-nav></sale-nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
  import saleNav from './nav'
  export default {
    components: {
    saleNav
    },
    metaInfo() {
      return {
        title: '赊销使用明细'
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
