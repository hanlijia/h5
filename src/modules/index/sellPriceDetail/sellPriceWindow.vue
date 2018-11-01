<template>
  <div class="all-content">
    <div class="shadow">
      <div class="window-clue">
        <p class="title">成交信息</p>
        <p><span>LDPE</span>&nbsp;&nbsp;<span>1100</span>元/吨&nbsp;&nbsp;<span>10</span>吨</p>
        <p class="money">
          <label>金额：</label>
          <span>11000</span>元
        </p>
        <div class="button-div">
          <span class="button-left">返回</span>
          <span class="button-right">确认</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>
<style scoped lang="scss">
.all-content{
  width: 100%;
  height: 100%;
  background-color: #fff;
  .shadow{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    .window-clue{
      width: 260px;
      height: 165px;
      background-color: #fff;
      border-radius: 12px;
      font-size: 12px;
      margin: 176px auto 0;
      font-weight: normal;
      position: relative;
      p{
        margin: 0;
        font-size: 14px;
        color: #333;
        text-align: center;
      }
      p.title{
        font-size: 16px;
        text-align: center;
        padding: 19px 0 10px 0;
      }
      p.money{
        padding-top: 5px;
      }
      .button-div{
        width: 100%;
        height: 49px;
        border-top: 1px solid rgba(77,77,77,1);
        position: absolute;
        bottom: 0;
        border-bottom-right-radius: 12px;
        border-bottom-left-radius: 12px;
        overflow: auto;
        zoom: 1;
        span{
          display: inline-block;
          width: 128px;
          height: 49px;
          font-size: 18px;
          text-align: center;
          line-height: 49px;
        }
        .button-left{
          color: #666;
          border-right: 1px solid rgba(77,77,77,0.78);
          opacity: 0.41;
        }
        .button-right{
          float: right;
          color: #4a77d9;
        }
      }
    }
  }
}
</style>
