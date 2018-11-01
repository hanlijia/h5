<template>
  <div class="min-height">
    <div v-for="(val, index) of orderKardData" :key="index" class="com-order-li">
      <label>订单编号:<i>{{val.contractNo}}</i><span class="state">{{val.state}}</span><span class="time">{{val.time}}</span></label>
      <div class="order-top">
        <span class="p-name">{{val.productName}}</span>
        <span class="p-serial">{{val.numberName}}</span>
        <span class="p-price">{{val.dealPrice}}<i>元/吨</i></span>
        <span class="p-num">{{val.dealNumber}}<i>吨</i></span>
      </div>
      <div class="order-middle">
        <span class="ship-address">{{val.brandNumber}}</span>
        <span class="p-date"><i>{{val.deliveryDateName}}</i><i v-if="val.productAttr === 'F'"></i></span>
        <span class="deli-address">{{val.deliveryName}}</span>
        <span class="money">{{'¥' + val.yuanName}}</span>
      </div>
      <div class="order-btm" v-show="isDiff">
        <span>成交时间:<i>{{val.contractTimeName}}</i></span>
        <button class="btm-del" @click.stop="lookContract(index)">查看合同</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props: {
      orderKardData: [Array, Object],
      isDiff: {
        default: Boolean,
        type: false
      }
    },
    data() {
      return {
      }
    }
  }
</script>
<style scoped lang="scss">
    .com-order-li {
      margin-bottom: 10px;
      padding-left: 15px;
      padding-right: 15px;
      color: #999;
      background: #fff;
      &:first-child {
        margin-top: 10px;
      }
      > div {
        padding-top: 10px;
        font-size: 0;
        -webkit-text-size-adjust: none;
        > span {
          display: inline-block;
          font-size: 14px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      i {
        margin-left: 5px;
        font-size: 14px;
      }
      label {
        display: block;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 13px;
        color: #999;
        border-bottom: 1px solid #eee;
        clear: both;
        span {
          color: #4a77d9;
          font-size: 13px;
        }
        span.time {
          float: right;
          padding-right: 5px;
        }
        span.state {
          float: right;
        }
      }
      .order-top {
        color: #333;
        padding-top: 7px;
        i {
          color: #999;
        }
        > span {
          font-size: 13px;
        }
      }
      .order-middle {
        padding-bottom: 9px;
        span {
          font-size: 12px;
        }
        span.money {
          width: 84px;
          text-align: right;
          font-size: 13px;
          color: #333;
        }
      }
      .p-name, .ship-address {
        width: 80px;
        box-sizing: border-box;
        padding-right: 10px;
      }
      .ship-address {
        width: 75px;
      }
      .p-serial {
        color: #999;
        width: 125px;
      }
      .icon-qi, .icon-xian {
        position: relative;
        top: 1px;
        display: inline-block;
        width: 13px;
        height: 13px;
      }
      .p-price {
        width: 85px;
        text-align: center;
      }
      .p-num {
        width: 54px;
        text-align: right;
      }
      .p-date {
        width: 125px;
      }
      .deli-address {
        width: 60px;
        text-align: right;
        /*border: 1px solid red;*/
      }
      .order-btm {
        height: 34px;
        line-height: 34px;
        border-top: 1px solid #eee;
      }
      .btm-del {
        float: right;
        width: 80px;
        height: 20px;
        text-align: center;
        border-radius: 10px;
        font-size: 12px;
        color: #4a77d9;
        border: solid 1px #4a77d9;
        background: #fff;
        margin-top: 6px;
      }
    }
</style>
