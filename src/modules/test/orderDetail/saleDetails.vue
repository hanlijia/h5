<template>
  <div class="model">
    <order-top>
      <li class="item-right height blue" slot="liList" v-show="true">待付款</li>   <!--页面3.6-->
    </order-top>
    <order-bottom>
      <div>成交时间:<i>2018/08/11 12:23:33</i></div>
      <span class="look-contract" v-show="true">查看合同</span> <!--v-show=false 控制页面2.6出现-->
    </order-bottom>
    <div class="outer-model-bottom">
      <div class="model-bottom">
        <div>金额:<i class="i-pd-left">9,040.00元</i></div>
        <div>账期:<i class="i-pd-left">7天</i></div>
        <div>赊销时间:<i>2018/08/20 16:00</i></div>
        <div>还款时间:<i>2018/08/22 16:00</i></div>
        <div>状态:<i class="i-pd-left">待还款</i></div>
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
        title: '赊销使用详情'
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
