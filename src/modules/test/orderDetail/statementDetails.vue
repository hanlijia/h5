<template>
  <div class="model">
    <order-top>
      <li class="item-right height blue" slot="liList" v-show="true">待付款</li>   <!--页面3.6-->
    </order-top>
    <order-bottom>
      <div>成交时间:<i>2018/08/11 12:23:33</i></div>
      <div>支付时间:<i>2018/08/12 12:23:33</i></div>
      <div>收货时间:<i>2018/08/21 12:23:33</i></div>
      <div>收票时间:<i>2018/08/22 12:23:33</i></div>
      <span class="look-contract" v-show="true">查看合同</span> <!--v-show=false 控制页面2.6出现-->
    </order-bottom>
    <div class="outer-model-bottom">
      <div class="model-bottom">
        <div>时间:<i class="i-pd-left">2018/08/11 12:23:33</i></div>
        <div>公司名称:<i>浙江网塑电子商务有限公司</i></div>
        <div>支出:<i class="i-pd-left">9,040.00元</i></div>
        <div>交易类型:<i>支付全额贷款</i></div>
      </div>
    </div>
  </div>
</template>
<script>
  import orderTop from './components/orderTop'
  import orderBottom from './components/orderBottom'
  export default {
    components: {
      orderTop,
      orderBottom
    },
    metaInfo() {
      return {
        title: '对账单详情'
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
  .model{
    width: 100%;
    height: 100vh;
    background-color: #fff;
    span{
      height: 33px;
      line-height: 33px;
      text-align: center;
      display: inline-block;
      margin-top: 7px;
      margin-bottom: 10px;
    }
    span.look-contract{
      width: 300px;
      border-radius: 16px;
      color: #4a77d9;
      font-size: 14px;
      border: 1px solid #4a77d9;
      margin-left: 25px;
    }
    .outer-model-bottom{
      padding-left: 15px;
      padding-right: 15px;
      .model-bottom{
        border-top: 1px dashed #eee;
        color: #666;
        font-size: 14px;
        line-height: 30px;
        height: initial;
        i{
          color: #333;
          padding-left: 10px;
        }
        i.i-pd-left{
          padding-left: 38px;
        }
      }
    }
  }
</style>
