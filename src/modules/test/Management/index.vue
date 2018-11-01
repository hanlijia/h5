<template>
  <div class="manage-page">
    <manage-nav></manage-nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
  import manageNav from './nav'
  export default {
    components: {
      manageNav
    },
    metaInfo() {
      return {
        title: '合同管理'
      }
    }
  }
</script>
<style lang="scss" scoped>
  .manage-page{
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    margin-top: 83px;
  }
</style>
