<template>
  <div class="model">
    <p class="special-tips">
      <i></i>
      <span>特别提示：请到浙塑零售SaaS产品WEB端进行办理</span>
    </p>
    <p class="p-money">35,264.23</p>
    <p class="p-outGold">可出资金（元）</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>
<style scoped lang="scss">
.model{
  width: 100%;
  margin-top: 43px;
  p.special-tips{
    padding: 0 15px;
    height: 33px;
    line-height: 33px;
    background-color: #f5f8ff;
    font-size: 12px;
    color: #4a77d9;
    i{
      width: 15px;
      height: 15px;
      display: inline-block;
      background: url("../img/laba.png") no-repeat;
      background-size: 15px 15px;
      position: relative;
      top: 3px;
    }
    span{
      padding-left: 3px;
    }
  }
  .p-money,.p-outGold{
    background-color: #fff;
    font-size: 16px;
    text-align: center;
  }
  .p-money{
    color: #333;
    padding-top: 30px;
  }
  .p-outGold{
    color: #999;
    padding-top: 10px;
  }
}
</style>
