<template>
  <div class="model">
    <p class="special-tips">
      <i></i>
      <span>特别提示：为保证交易顺利，建议在网银中选择实时到账模式，该模式转账预计入金到账时间5分钟</span>
    </p>
    <p class="payee">收款方</p>
    <new-input-list :have-line="true" label-name="户名" :data-name="rowData.companyName" :have_padding="true"></new-input-list>
    <new-input-list :have-line="true" label-name="开户行" :data-name="rowData.bankName" :have_padding="true"></new-input-list>
    <new-input-list :have-line="false" label-name="账号" :data-name="rowData.userName" :have_padding="true"></new-input-list>
    <div class="m-bottom">
      <p>7月9日，二季度利息20,999元已到账</p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        rowData: {
          companyName: '中信信托有限责任公司',
          bankName: '光大银行河北沧州分行',
          userName: '5392  8737 7878 7823 0'
        }
      }
    },
    methods: {
    }
  }
</script>
<style scoped lang="scss">
  .model{
    width: 100%;
    margin-top: 43px;
    p.special-tips{
      height: 53px;
      padding-left: 15px;
      background-color: #f5f8ff;
      font-size: 12px;
      color: #4a77d9;
      position: relative;
      i{
        width: 15px;
        height: 15px;
        display: inline-block;
        background: url("../img/laba.png") no-repeat;
        background-size: 15px 15px;
        position: absolute;
        top: 10px;
      }
      span{
        width: 340px;
        height: 40px;
        display: inline-block;
        position: relative;
        left: 21px;
        top: 8px;
        line-height: 20px;
      }
    }
    p.payee{
      font-size: 13px;
      color: #333;
      padding: 10px 0 5px 15px;
    }
    div.m-bottom{
      margin-top: 10px;
      padding-left: 15px;
      background-color: #fff;
      box-sizing: border-box;
      p{
        color: #999;
        font-size: 13px;
        padding-top: 10px;
      }
    }
  }
</style>
