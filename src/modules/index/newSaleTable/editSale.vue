<template>
  <div class="component-content">
    <div class="sale-first">
      <zs-list-underline :haveLine = "false" labelName="交收方式" :dataName="rowData.productAttr" :have_padding="true">
      </zs-list-underline>
    </div>
    <div class="sale-second">
      <zs-list-underline  labelName="品名" :dataName="rowData.productName" :have_padding="true">
      </zs-list-underline>
      <zs-list-underline  labelName="牌号" :dataName="rowData.brandNumber" :have_padding="true">
      </zs-list-underline>
      <zs-list-underline  labelName="用途" :dataName="rowData.useTypeName" :have_padding="true">
      </zs-list-underline>
      <zs-list-underline  labelName="厂商" :dataName="rowData.factoryName" :have_padding="true">
      </zs-list-underline>
      <zs-list-underline  labelName="质量标准" :dataName="rowData.productQualityName" :have_padding="true">
      </zs-list-underline>
      <zs-list-underline :haveLine = "false" labelName="包装规格" :dataName="rowData.packageSpec + '千克/包'" :have_padding="true">
      </zs-list-underline>
    </div>
    <div class="sale-three">
      <zs-list-underline  labelName="交收期" :dataName="rowData.deliveryDate + '左右'">
        <span slot="text"><van-icon name="arrow" /></span>
      </zs-list-underline>
      <zs-list-underline  labelName="交货地" :dataName="rowData.deliveryPlaceName">
        <span slot="text"><van-icon name="arrow" /></span>
      </zs-list-underline>
      <zs-list-underline  labelName="交货方式" :dataName="rowData.deliveryTypeName">
        <span slot="text"><van-icon name="arrow" /></span>
      </zs-list-underline>
      <zs-list-underline  :haveLine = "false" labelName="车型" :dataName="rowData.deliverySpec">
        <span slot="text"><van-icon name="arrow" /></span>
      </zs-list-underline>
    </div>
    <div class="sale-four">
      <zs-list-underline  labelName="价格" tonName="元 / 吨">
        <span slot="input"><input type="text" placeholder="请输入单价：4000-9000, 2位小数"></span>
      </zs-list-underline>
      <zs-list-underline  :haveLine = "false" labelName="数量" tonName="吨">
        <span slot="input"><input type="text" placeholder="请输入数量：1-2000, 3位小数"></span>
      </zs-list-underline>
    </div>
    <div class="sale-five">
      <zs-list-underline  labelName="订单时效" :dataName="rowData.second">
        <span slot="text"><van-icon name="arrow" /></span>
      </zs-list-underline>
    </div>
  </div>
</template>
<script>
  export default {
    metaInfo() {
      return {
        title: '编辑卖单'
      }
    },
    data() {
      return {
        rowData: {
          productAttr: "立即交付",
          productName: 'LDPE',
          brandNumber: '2426H',
          useTypeName: '薄膜级',
          factoryName: '大庆石化',
          productQualityName: '原厂原包',
          packageSpec: '25',
          deliveryDate: '2018-06-17',
          deliveryPlaceName: '上海宝山',
          deliveryTypeName: '配送',
          deliverySpec: '平板',
          dealPrice: '1110',
          dealNumber: '9',
          second: '0小时5分钟'
        }
      }
    },
    methods: {
    }
  }
</script>
<style scoped lang="scss">
  .component-content {
    width: 100%;
    input::-webkit-input-placeholder {
      color: #ddd;
    }
    input:-moz-placeholder {
      color: #ddd;
    }
    input::-moz-placeholder {
      color: #ddd;
    }
    input:-ms-input-placeholder {
      color: #ddd;
    }
    input {
      width: 224px;
      height: 20px;
      line-height: 20px;
      border: 0;
      padding: 0;
      margin: 0;
      color: #333;
      text-align: right;
    }
    .sale-first{
      margin-bottom: 10px;
      .font-new {
        i{
          font-size: 14px;
          color: #d8d8d8;
          position: relative;
          top: 2px;
          margin-left: 4px;
        }
      }
    }
    .sale-second,.sale-three,.sale-four{
      margin-bottom: 10px;
    }
  }
</style>
