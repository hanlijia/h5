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
     <zs-window>
       <div slot="change" class="change-content">
         <span class="pay-now">立即支付</span>
         <span class="delivery-cycle">周期交付</span>
       </div>
     </zs-window>
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
    .app_content {
      width: 100%;
      position: relative;
          .change-content{
            height: 101px;
            opacity: 0.96;
            .pay-now,.delivery-cycle{
              width: 90px;
              height: 30px;
              display: inline-block;
              border-radius: 20px;
              line-height: 30px;
              text-align: center;
              font-size: 14px;
              margin-top: 15px;
            }
            .pay-now{
              background-color: #fff;
              color: #999;
              margin-left: 15px;
            }
            .delivery-cycle{
              background-color: #4977d9;
              color: #fff;
              margin-left: 5px;
            }
          }
        }
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
      input {
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
</style>
