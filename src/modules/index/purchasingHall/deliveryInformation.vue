<template>
  <div class="app_content">
    <zs-input-underline labelName="交收方式" :dataName="rowData.productAttr">
      <span slot="text"><label class="please">请选择</label><van-icon name="arrow" /></span>
    </zs-input-underline>
    <zs-input-underline labelName="交货时间" :dataName="rowData.deliveryDate">
      <span slot="text"><label class="please">请选择</label><van-icon name="arrow" /></span>
    </zs-input-underline>
    <zs-input-underline labelName="交货地" :dataName="rowData.deliveryPlaceName">
      <span slot="text"><label class="please">请选择</label><van-icon name="arrow" /></span>
    </zs-input-underline>
    <zs-input-underline labelName="交货方式" :dataName="rowData.deliveryTypeName">
      <span slot="text"><label class="please">请选择</label><van-icon name="arrow" /></span>
    </zs-input-underline>
    <zs-input-underline :haveLine = "false" labelName="运输规格" tonName="吨/托"  :dataName="rowData.deliverySpec">
      <span slot="input"><input type="text" placeholder="可不填"></span>
    </zs-input-underline>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isTrue: false,
        color: 'border-color',
        rowData: {
          productAttr: "周期交付",
          deliveryDate: '2018-06-17',
          deliveryPlaceName: '伊春金山屯区',
          deliveryTypeName: '自提',
          deliverySpec: ''
        }
      }
    }
  }
</script>
<style lang="scss">
  .app_content{
    width: 100%;
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
    .font-new {
      i {
        font-size: 14px;
        color: #d8d8d8;
        position: relative;
        top: 2px;
        margin-left: 4px;
      }
    }

  }
</style>
