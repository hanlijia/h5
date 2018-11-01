<template>
  <div class="m-center">
    <div class="user-list">
      <i></i>
      <div class="text-left">
        <span class="user-name">用户名称</span>
        <span class="company-name">浙塑专区中小型贸易公司名称</span>
      </div>
    </div>
    <div class="available-list">
      <span class="yuan">可用余额（元）</span>
      <span class="usable">200, 000</span>
      <div class="used-left">
        <label class="yuan-style">已用额度（元）</label>
        <span class="used">200, 000</span>
      </div>
      <div class="used-right">
        <label class="yuan-style">授信额度（元）</label>
        <span class="credit">200, 000</span>
      </div>
    </div>
    <p class="payable">应付账款</p>
    <fund-list-new StatusName="待还款"  dayName="还款日:" :dataName="rowData.one" :numName="rowData.two" yuanName="元" titleName="账期:" :answerName="rowData.three + '天'"></fund-list-new>
    <fund-list-new :haveLine="false" :haveColor="false" StatusName="已逾期"  dayName="还款日:" :dataName="rowData.one" :numName="rowData.two" yuanName="元" titleName="账期:" :answerName="rowData.three + '天'"></fund-list-new>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        rowData: {
          one: '2018/06/09  17:00',
          two: '100, 000',
          three: '7'
        }
      }
    }
  }
</script>
<style lang="scss">
  .m-center{
    width: 100%;
    box-sizing: border-box;
    .user-list{
      height: 80px;
      background-color: #fff;
      margin-bottom: 10px;
      i{
        width: 50px;
        height: 50px;
        display: inline-block;
        background: url("./user.png") no-repeat;
        background-size: 50px 50px;
        margin: 15px;
        float: left;
      }
      .text-left{
        box-sizing: border-box;
        float: left;
        margin-top: 15px;
        .user-name {
          font-size: 16px;
          color: #333;
          display: block;
          padding-bottom: 8px;
        }
        .company-name {
          font-size: 14px;
          color: #666;
          display: block;
        }
      }
    }
    .available-list{
      height: 170px;
      background-color: #fff;
      content: "";
      clear: both;
      display: block;
      .yuan{
        font-size: 16px;
        color: #333;
        text-align: center;
        padding-top: 15px;
        display: block;
      }
      .usable{
        font-size: 24px;
        color: #6acd94;
        display: block;
        text-align: center;
        padding: 5px 18px 0 0;
      }
      .used-left,.used-right{
        width: 110px;
        height: 44px;
        margin-top: 34px;
        .yuan-style{
          font-size: 14px;
          color: #999;
          float: left;
        }
        .used,.credit{
          color: #666;
          font-size: 16px;
          float: left;
          padding-left: 6px;
          padding-top: 4px;
        }
      }
      .used-left{
        float: left;
        margin-left: 49px;
      }
      .used-right{
        float: right;
        margin-right: 49px;
      }

    }
    .payable{
      font-size: 14px;
      color: #333;
      padding:  15px 0 10px 15px;
      margin: 0;
    }
  }
</style>
