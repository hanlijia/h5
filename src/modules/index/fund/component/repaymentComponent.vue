<template>
  <div class="m-center">
    <p class="this-date">6月17日</p>
    <repayment-list labelName="授信支付全款" :dataName="'-'+ rowData.dataOne" yuanName="元" :productName="rowData.dataTwo" orderName="订单号:"
                    :answerName="rowData.dataThree" stateName="未还款" :haveLine = false></repayment-list>
    <p class="this-newData">6月16日</p>
    <repayment-list labelName="偿还授信" :dataName="'+'+ rowData.dataOne" yuanName="元" :productName="rowData.dataTwo" orderName="订单号:"
                    :answerName="rowData.dataThree" stateName=""></repayment-list>
    <repayment-list labelName="授信支付全款" :dataName="'-'+ rowData.dataOne" yuanName="元" :productName="rowData.dataTwo" orderName="订单号:"
                    :answerName="rowData.dataThree" stateName="已还款" :haveLine = false :haveColor = false></repayment-list>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        rowData: {
          dataOne: '100, 000',
          dataTwo: 'LLDPB',
          dataThree: '2MA18040900001D0001'
        }
      }
    }
  }
</script>
<style lang="scss">
  .m-center{
    width: 100%;
    /*box-sizing: border-box;*/
    .this-date{
      font-size: 13px;
      color: #333;
      padding: 5px 0 10px 15px;
      margin: 0;
    }
    .this-newData{
      font-size: 13px;
      color: #333;
      padding: 15px 0 10px 15px;
      margin: 0;
    }
  }
</style>
