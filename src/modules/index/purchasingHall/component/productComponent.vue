<template>
<div class="component-content">
  <div class="apply-first">
    <zs-input-underline :haveLine="false" labelName="交收方式" :dataName="rowData.productAttr"></zs-input-underline>
  </div>
  <div class="apply-second">
    <zs-input-underline labelName="产品名称" :dataName="rowData.productName"></zs-input-underline>
    <zs-input-underline labelName="牌号" :dataName="rowData.brandNumber"></zs-input-underline>
    <zs-input-underline labelName="用途" :dataName="rowData.useTypeName"></zs-input-underline>
    <zs-input-underline labelName="厂商" :dataName="rowData.factoryName"></zs-input-underline>
    <zs-input-underline labelName="质量标准" :dataName="rowData.productQualityName"></zs-input-underline>
    <zs-input-underline :haveLine="false" labelName="包装规格" :dataName="rowData.packageSpec + 'kg/包'"></zs-input-underline>
  </div>
  <div class="apply-three">
    <zs-input-underline labelName="交货时间" :dataName="rowData.deliveryDate"></zs-input-underline>
    <zs-input-underline labelName="交货地" :dataName="rowData.deliveryPlaceName"></zs-input-underline>
    <zs-input-underline labelName="交货方式" :dataName="rowData.deliveryTypeName"></zs-input-underline>
    <zs-input-underline :haveLine="false" labelName="运输规格" :dataName="rowData.deliverySpec" tonName="吨/托">
      <span slot="input"><input type="text" placeholder=""></span>
    </zs-input-underline>
  </div>
  <div class="apply-four">
    <zs-input-underline labelName="成交价格" :dataName="rowData.dealPrice" tonName="元/吨"></zs-input-underline>
    <zs-input-underline labelName="成交数量" :dataName="rowData.dealNumber"  tonName="吨"></zs-input-underline>
    <zs-input-underline :haveLine="false" labelName="支付方式" :dataName="rowData.payMethodName"></zs-input-underline>
  </div>
  <div class="apply-five">
    <zs-input-underline labelName="时效" :dataName="rowData.second" v-if="false"></zs-input-underline>
    <zs-input-underline :haveLine="false" labelName="备注" :dataName="rowData.remark">
      <span slot="input"><input type="text" placeholder=""></span>
    </zs-input-underline>
  </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        rowData: {
          productAttr: "周期交付",
          productName: 'LLDPB',
          brandNumber: 'AC5502',
          useTypeName: '吸塑级',
          factoryName: '台塑美国',
          productQualityName: '原厂原包',
          packageSpec: '25',
          deliveryDate: '2018-06-17',
          deliveryPlaceName: '伊春金山屯区',
          deliveryTypeName: '自提',
          deliverySpec: '',
          dealPrice: '18898',
          dealNumber: '2000',
          payMethodName: '承兑汇票',
          second: '00:25:00',
          remark: ''
        }
      }
    },
    metaInfo: {
      title: "产品详情"
    },
    methods: {
    }
  }
</script>
<style lang="scss">
  .component-content {
    width: 100%;
    padding-top: 10px;
    input::-webkit-input-placeholder {
      color: #999;
    }
    input:-moz-placeholder {
      color: #999;
    }
    input::-moz-placeholder {
      color: #999;
    }
    input:-ms-input-placeholder {
      color: #999;
    }
    input{
      height: 20px;
      line-height: 20px;
      border: 0;
      padding: 0;
      margin: 0;
      color: #333;
    }
    .apply-first {
      margin-bottom: 10px;
    }
    .apply-second {
      margin-bottom: 10px;
    }
    .apply-three, .apply-four, .apply-five {
      margin-bottom: 10px;
    }
    .release-plan {
      height: 55px;
      background-color: #fff;
      box-shadow: 0px -3px 4px 0px rgba(155, 155, 155, 0.1);
      padding-top: 7px;
      padding-left: 15px;
    }
  }
</style>
