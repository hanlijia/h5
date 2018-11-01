<template>
  <div class="control-opacity">
    <div class="opacity">
    </div>
    <div class="payment">
      <div class="payment-top">
        <span class="way">交收方式</span>
        <span class="select">请选择</span>
        <i class="close"></i>
      </div>
      <slot name="change"></slot>
      <span class="confirm">确定</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'zs-window'
  }
</script>
<style lang="scss">
  .control-opacity {
    .opacity {
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
    }
    .payment {
      width: 100%;
      background-color: #f3f5f6;
      position: fixed;
      bottom: 0;
      z-index: 2;
      .payment-top{
        height: 40px;
        background-color: #fff;
        line-height: 30px;
        content: "";
        display: block;
        clear: both;
        .way{
          font-size: 14px;
          color: #666;
          padding: 0 15px;
        }
        .select{
          color: #f65459;
          font-size: 12px;
        }
        .close{
          width: 16px;
          height: 16px;
          display: inline-block;
          float: right;
          background: url("./close.png") no-repeat;
          padding-right: 15px;
          background-size: 16px;
          margin-top: 12px;
        }
      }
      .confirm{
        width: 345px;
        height: 40px;
        display: block;
        border-radius: 20px;
        background-color: #4977d9;
        font-size: 16px;
        color: #fff;
        text-align: center;
        line-height: 40px;
        margin: 0 auto 8px;
      }
    }
  }
</style>
