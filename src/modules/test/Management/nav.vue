<template>
  <nav class="sysNews-nav nav-position">
    <ul class="m-header">
      <li class="text-color-change" @click="handleClick(true)">
        <router-link to="/mobile/orderM/noDeal">
          <span :class="{'span-bottom-change': isColor}">预成交合同</span>
        </router-link>
      </li>
      <li @click="handleClick(false)">
        <router-link to="/mobile/orderM/yesDeal">
          <span :class="{'span-bottom-change': !isColor}">已成交合同</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
  export default {
    data() {
      return {
        isColor: true
      }
    },
    methods: {
      handleClick(bool) {
        this.isColor = bool
      }
    }
  }
</script>
<style scoped lang="scss">
  .sysNews-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    ul.m-header {
      height: 40px;
      background-color: #fff;
      /*border: 1px solid red;*/
      li {
        width: 50%;
        float: left;
        font-size: 15px;
        display: inline-block;
        text-align: center;
        line-height: 40px;
        .span-bottom-change {
          border-bottom: 4px solid #fff;
        }
        .span-bottom-change {
          border-bottom: 4px solid #4a77d9;
          color: #4a77d9;
        }
        span {
          border-bottom: 4px solid #fff;
          color: #666;
        }
        span, .span-bottom-change {
          display: inline-block;
          width: 85px;
          line-height: 34px;
        }
      }
    }
  }
</style>
