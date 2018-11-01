<template>
  <div class="com-order-li">
    <label class="sell-label">供方 <i>浙江网塑电子商务有限公司</i></label>
    <!--<label v-if="this.isSeller">采购方:<i>{{orderRowdata.buyerCompanyName || orderRowdata.buyCompanyName}}</i></label>-->
    <div class="row-data-detail">
      <ul class="in-block first-ul">
        <li class="item-label height">LDPE</li>
        <slot name="liList"></slot>
        <!--<li class="item-right height">请在<span :class="{'color-time': isColor}">12分28秒</span>内完成审核</li>-->
        <!--<li class="item-right height grey">失效</li>-->
        <!--<li class="item-right height blue">已完成</li>-->
      </ul>
      <ul class="in-block section-ul1">
        <li>
          <label>牌号: </label>
          <span class="pd-left">2426H</span>
        </li>
        <li>
          <label>用途: </label>
          <span class="pd-left">薄膜级</span>
        </li>
        <li>
          <label>厂商: </label>
          <span class="pd-left">大庆石化</span>
        </li>
        <li>
          <label>质量标准: </label>
          <span>原厂原包</span>
        </li>
        <li>
          <label>包装规格: </label>
          <span>25kg/包</span>
        </li>
        <li>
          <label>车型: </label>
          <span class="pd-left">6-15吨</span>
        </li>
      </ul>
      <ul class="in-block section-ul2">
        <li>
          <label>发货地: </label>
          <span class="pd-leftTwo">上海宝山</span>
        </li>
        <li>
          <label>交货方式: </label>
          <span>配送</span>
        </li>
        <li>
          <label>交货期: </label>
          <span class="pd-leftTwo">2018/07/05</span>
        </li>
        <li>
          <label>收货地: </label>
          <span class="pd-leftTwo">苏州虎丘</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      isColor: {
        type: Boolean,
        default: true
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

  .com-order-li {
    color: #999;
    padding-left: 15px;
    padding-right: 15px;
    background: #fff;
    label.sell-label{
      display: block;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      color: #666;
      border-bottom: 1px solid #eee;
      background: #fff;
    }
  }
  .row-data-detail {
    position: relative;
    background: #fff;
    ul.first-ul {
      li {
        height: 30px;
        line-height: 40px;
      }
    }
    ul {
      background: #fff;
    }
    li {
      display: inline-block;
      height: 30px;
      line-height: 30px;
      /*border: 1px solid red;*/
      width: 50%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #666;
      font-size: 13px;
      .color-time {
        color: #4a77d9;;
      }
      span.pd-left {
        padding-left: 26px;
      }
      span.pd-leftTwo {
        padding-left: 14px;
      }
    }
    li.height {
      height: 35px;
      line-height: 40px;
    }
    .grey{
      color: #999;
    }
    .blue{
      color: #4a77d9;
    }
    label {
      display: inline-block;
      padding-left: 0;
      padding-right: 0;
      color: #999;
    }
    .item-label {
      width: 50%;
      font-size: 15px;
      color: #000;
    }
    .item-right {
      text-align: right;
    }
  }
</style>
