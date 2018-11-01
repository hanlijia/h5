<template>
  <div class="order-total-price">
    <ul class="list-one">
      <li>
        <label>单价:</label>
        <span class="pd-left">1130元/吨</span>
      </li>
      <li>
        <label>数量:</label>
        <span>8吨</span>
      </li>
    </ul>
    <div class="all-div">
      <div>金额:<i class="money-color">¥9040</i></div>
      <div>合同编号:<i>201808110002</i></div>
      <slot></slot>
    </div>
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
  .order-total-price {
    border-top: 10px solid #f8f8f8;
    margin-top: 10px;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    .all-div{
        height: initial;
        font-size: 13px;
        color: #999;
        line-height: 25px;
        i {
          padding-left: 10px;
        }
        i.money-color {
          color: #333;
          padding-left: 35px;
        }
    }
    ul.list-one {
      li {
        display: inline-block;
        height: 24px;
        width: 48%;
        font-size: 13px;
        color: #999;
        line-height: 24px;
        span {
          color: #333;
        }
        span.pd-left {
          padding-left: 30px;
        }
      }
    }
  }
</style>
