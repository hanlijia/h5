<template>
  <div class="all-list">
    <div :class="{'border-underline': haveLine}">
      <p class="payment">{{labelName}}<span class="number">{{dataName}}<label class="yuan">&nbsp;&nbsp;{{yuanName}}</label></span></p>
      <p class="order_number"><label class="product-name">{{productName}}</label>
        <span class="order-num">
          <label>{{orderName}}</label>{{answerName}}</span>
          <span class="state-change">
            <span :class="{'state': haveColor}">{{stateName}}</span>
        </span>
      </p>
      <i><van-icon name="arrow" /></i>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'repayment-list',
    props: {
      labelName: String,
      dataName: String,
      yuanName: String,
      productName: String,
      orderName: String,
      answerName: String,
      stateName: String,
      haveLine: {
        type: Boolean,
        default: true
      },
      haveColor: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
<style scoped lang="scss">
  .all-list{
    height: 76px;
    background-color: #fff;
    padding: 0 15px;
    border-bottom: 1px solid transparent;
    font-size: 12px;
    position: relative;
    .border-underline {
      border-bottom: 1px solid #ddd;
    }
    .payment{
      margin: 0;
      font-size: 14px;
      color: #333;
      padding-top: 10px;
      .number{
        font-size: 15px;
        float: right;
      }
      .yuan{
        font-size: 14px;
        color: #999;
        padding-right: 19px;
      }
    }
    .order_number{
      color: #999;
      margin: 0;
      padding-top: 10px;
      padding-bottom: 15px;
      .product-name{
        font-size: 14px;
        padding-right: 18px;
      }
      .order-num{
        font-size: 13px;
      }
      .state-change{
        color: #6acd94;
        font-size: 13px;
        float: right;
        padding-right: 19px;
        .state {
          color: #f6555a;
        }
      }
    }
    i{
      width: 16px;
      height: 16px;
      color:  #d8d8d8;
      float: right;
      position: absolute;
      right: 5px;
      top: 15px;
    }
  }
</style>
