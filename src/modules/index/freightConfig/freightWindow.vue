<template>
  <div class="all-content">
    <div class="shadow">
      <div class="window-clue">
        <p>调价</p>
        <input type="radio" name="性别" value="男">
        <div class="button-div">
          <span class="button-left">取消</span>
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
        height: 179px;
        background-color: #fff;
        border-radius: 12px;
        font-size: 12px;
        margin: 170px auto 0;
        font-weight: normal;
        position: relative;
        p{
          margin: 0;
          font-size: 16px;
          text-align: center;
          padding-top: 19px;
          color: #333;
          font-weight: normal;
        }
        .button-div{
          width: 100%;
          height: 48px;
          border-top: 1px solid rgba(77,77,77,0.41);
          position: absolute;
          bottom: 0;
          border-bottom-right-radius: 12px;
          border-bottom-left-radius: 12px;
          overflow: auto;
          zoom: 1;
          span{
            display: inline-block;
            width: 128px;
            height: 48px;
            font-size: 18px;
            text-align: center;
            line-height: 48px;
          }
          .button-left{
            color: #333;
            border-right: 1px solid rgba(77,77,77,0.41);
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
