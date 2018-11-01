<template>
  <div class="all-content">
    <div class="shadow">
      <div class="window-clue">
        <p>确认撤单</p>
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
        height: 134px;
        background-color: #fff;
        border-radius: 12px;
        font-size: 12px;
        margin: 202px auto 0;
        font-weight: normal;
        position: relative;
        p{
          font-size: 16px;
          text-align: center;
          padding-top: 31px;
          color: #333;
          font-weight: normal;
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
            color: #999;
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
