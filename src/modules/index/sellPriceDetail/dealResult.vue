<template>
  <div class="all-content">
    <div class="order-close"><i></i><span>订单已成交</span></div>
      <p><span>LDPE</span>&nbsp;&nbsp;<span>1100</span>元/吨&nbsp;&nbsp;<span>10</span>吨</p>
      <p class="money">
        <label>金额：</label>
        <span>11000</span>元
      </p>
    <div class="button-div">
      <span>查看合同</span>
      <span>订单详情</span>
    </div>
  </div>
</template>
<script>
  export default {
    metaInfo() {
      return {
        title: '成交结果'
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
  .all-content {
    width: 100%;
    height: 100%;
    background-color: #fff;
    .order-close {
      height: 25px;
      font-size: 18px;
      position: relative;
      padding-left: 126px;
      margin: 70px 0 30px 0;
      i {
        width: 25px;
        height: 25px;
        display: inline-block;
        background-image: url("./images/order.png");
        background-size: 25px 25px;
        margin-right: 7px;
      }
      span{;
        color: #6acd94;
        font-weight: normal;
        position: absolute;
      }
    }
    p{
      margin: 0;
      font-size: 14px;
      color: #333;
      text-align: center;
    }
    p.money{
      padding-top: 5px;
    }
    .button-div{
      margin-top: 52px;
      font-weight: normal;
      color: #4a77d9;
      font-size: 0;
      overflow: auto;
      zoom: 1;
      span{
        width: 100px;
        height: 30px;
        font-size: 14px;
        display: inline-block;
        border-radius: 20px;
        border: 1px solid  #4a77d9;
        text-align: center;
        line-height: 30px;
        &:first-child{
          margin-left: 80px;
          margin-right: 15px;
        }
      }
    }
  }
</style>
