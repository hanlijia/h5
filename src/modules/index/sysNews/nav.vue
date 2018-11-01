<template>
  <nav class="sysNews-nav nav-position">
    <ul class="in-block">
      <li>
        <router-link to="/mobile/sysNews/sysFocused">关注</router-link>
      </li>
      <li>
        <router-link to="/mobile/sysNews/sysBank">资金</router-link>
      </li>
      <li>
        <router-link to="/mobile/sysNews/sysBusiness">交易</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
    export default {}
</script>

<style scoped lang="scss">
  .sysNews-nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    line-height: 40px;
    background: #fff;
    z-index: 999;
    border-bottom: 1px solid #eee;
    ul{
      height: 40px;
    }
    li{
      display: inline-block;
      width: 33.33%;
      text-align: center;
      font-size: 16px;
      color: #666;
      > a {
        display: inline-block;
        height: 100%;
        outline: 16px;
        padding-left: 8px;
        padding-right: 8px;
      }
    }
    .router-link-active{
      text-decoration: none;
      color: #4977d9;
      border-bottom: 2px solid #4977d9;
    }
  }
</style>
