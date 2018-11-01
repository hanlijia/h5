<template>
  <div class="model">
    <order-top key="order-component" :is-color="true">
      <li class="item-right height" slot="liList"  v-show="false">请在<span class="color-time">12分28秒</span>内完成审核</li> <!--页面2.2-->
      <li class="item-right height grey" slot="liList" v-show="false">失效</li>  <!--页面2.3-->
      <li class="item-right height blue" slot="liList" v-show="true">待收货</li>   <!--页面2.4-->
      <li class="item-right height" slot="liList"  v-show="false">倒计时<span class="color-time">12分28秒</span>&nbsp;&nbsp;<span class="blue">待审批</span></li>   <!--页面2.4-->
    </order-top>
    <order-bottom>
      <div>预成交时间:<i class="i-last">2018/08/11  12:23:33</i></div> <!--v-show=false 控制页面2.5出现-->
      <div>成交时间:<i>2018/08/11 12:23:33</i></div>
      <div>收款时间:<i>2018/08/12 12:23:33</i></div>
      <div>发货时间:<i>2018/08/21 12:23:33</i></div>
      <div>支付时间:<i>2018/08/12 12:23:33</i></div>
      <div>收货时间:<i>2018/08/21 12:23:33</i></div>
      <div>开票时间:<i>2018/08/22 12:23:33</i></div>
      <div>收票时间:<i>2018/08/22 12:23:33</i></div>
      <span class="look-contract" v-show="true">查看合同</span> <!--v-show=false 控制页面2.6出现-->
      <!--<div class="button-list" v-show="true">-->
        <!--<span class="span-left">查看合同</span>-->
        <!--<span class="span-right" v-show="false" @click.stop = "confirmReceipt">确认收货</span>    &lt;!&ndash;此处涵盖所有情况...请自动调试 哈哈&ndash;&gt;-->
        <!--<span class="span-right" v-show="true" @click.stop = "confirmDelivery">确认发货</span>-->
        <!--<span class="span-right" v-show="false" @click.stop = "confirmTicket">确认收票</span>-->
        <!--<span class="span-right" v-show="false">确认开票</span>-->
      <!--</div>-->
    </order-bottom>
  </div>
</template>
<script>
  import orderTop from './components/orderTop'
  import orderBottom from './components/orderBottom'
  export default {
    metaInfo() {
      return {
        title: '合同详情'
      }
    },
    components: {
       orderTop,
       orderBottom
    },
    data() {
      return {
      }
    },
    methods: {
      // confirmReceipt() {
      //   let msg = '已收到货物且确认无误'
      //   // let msg = '确认收货后，系统将在还款到期日自动扣除货款，在此之前保证信托账户资金余额足够支付合同货款。'
      //   this.$dialog.confirm({
      //     title: '确认收货',
      //     message: msg,
      //     cancelButtonText: '返回'
      //   })
      // }
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
    }
     span.look-contract{
      width: 300px;
      border-radius: 16px;
      color: #4a77d9;
      font-size: 14px;
      border: 1px solid #4a77d9;
      margin-left: 25px;
    }
     div.button-list{
       font-size: 0;
       margin-left: 25px;
      span{
        width: 142px;
        border-radius: 22px;
        font-size: 14px;
        border: 1px solid #4a77d9;
      }
       .span-left{
         color: #4a77d9;
         margin-right: 14px;
       }
       .span-right{
         background-color: #4a77d9;
         color: #fff;
       }
    }
  }
</style>
