<template>
  <div class="app_content">
    <div class="apply-first">
      <zs-input-underline labelName="价格" :dataName="rowData.dealPrice" tonName="元/吨"></zs-input-underline>
      <zs-input-underline labelName="数量" :dataName="rowData.dealNumber" tonName="吨"></zs-input-underline>
      <zs-input-underline labelName="支付方式" :dataName="rowData.payMethodName">
        <span slot="text"><van-icon name="arrow" /></span>
      </zs-input-underline>
    </div>
    <div class="apply-second">
      <zs-input-underline labelName="时效" :dataName="rowData.second">
        <span slot="text"><van-icon name="arrow" /></span>
      </zs-input-underline>
      <zs-input-underline :haveLine = "false" labelName="备注"  :dataName="rowData.remark">
        <span slot="input"><input type="text" placeholder="可不填"></span>
      </zs-input-underline>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isTrue: false,
        color: 'border-color',
        rowData: {
          dealPrice: '18898',
          dealNumber: '2000',
          payMethodName: '承兑汇票',
          second: '00:25:00',
          remark: ''
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
    .apply-first{
      margin-bottom: 10px;
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
