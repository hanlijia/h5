<template>
  <nav class="sysNews-nav nav-position">
    <ul class="m-header">
      <li class="text-color-change" @click="handleClick('a')">
        <router-link to="/mobile/saleIndex/saleDetailAll">
          <span :class="{'span-bottom-change': isColor}">全部</span>
        </router-link>
      </li>
      <li @click="handleClick('b')">
        <router-link to="">
          <span :class="{'span-bottom-change': isTwo}">部分还款</span>
        </router-link>
      </li>
      <li @click="handleClick('c')">
        <router-link to="">
          <span :class="{'span-bottom-change': isThree}">待还款</span>
        </router-link>
      </li>
      <li @click="handleClick('d')">
        <router-link to="">
          <span :class="{'span-bottom-change': isFour}">已逾期</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
  export default {
    data() {
      return {
        isColor: true,
        isTwo: false,
        isThree: false,
        isFour: false
      }
    },
    methods: {
      handleClick(bool) {
        this.isColor = false
        this.isTwo = false
        this.isThree = false
        this.isFour = false
        switch (bool) {
          case 'a': this.isColor = true
            break
          case 'b': this.isTwo = true
            break
          case 'c': this.isThree = true
            break
          case 'd': this.isFour = true
            break
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  .sysNews-nav {              //需要抽离与management nav样式一致  除了下面span的width不一样
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    ul.m-header {
      height: 40px;
      background-color: #fff;
      /*border: 1px solid red;*/
      li {
        width: 25%;
        float: left;
        font-size: 15px;
        display: inline-block;
        text-align: center;
        line-height: 40px;
        border-bottom: 1px solid #e5e5e5;    //抽离时 此处也不一样
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
          width: 65px;                      //抽离时 此处宽度不一样
          line-height: 34px;
        }
      }
    }
  }
</style>
