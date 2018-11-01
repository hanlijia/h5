<template>
  <div>
    <div class="list-one" v-for="(item, index) of contain" :key="index">
      <div class="list-content">
        <i></i>
        <ul>
          <li>
            <label class="send">发</label>
            <span>{{item.sendPlace}}</span>
          </li>
          <li class="float-right">
            <label>车型</label>
            <span>{{item.carType}}</span>
          </li>
          <li>
            <label class="have">收</label>
            <span>{{item.havePlace}}</span>
          </li>
          <li class="float-right">
            <label>单价</label>
            <span>{{item.unitPrice}}</span>
          </li>
        </ul>
      </div>
      <span class="editor">编辑</span>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      contain: [Array, Object],
      sendPlace: String,
      carType: String,
      havePlace: String,
      unitPrice: String
    },
    methods: {
    }
  }
</script>
<style scoped lang="scss">
    .list-one{
      /*border: 1px solid red;   //外层边框线*/
      background-color: #fff;
      position: relative;
      margin-top: 10px;
      .list-content {
        height: 65px;
        padding: 0 15px;
        background-color: #fff;
        /*border: 1px solid hotpink;   //内层边框线*/
        position: relative;
        right: 75px;        //此时li块级是根据按钮editor向左滑动后，同时向左滑动出现的间距75px，看页面请改成0px
        i {
          height: 15px;
          width: 15px;
          display: inline-block;
          background: url("../images/unselect.png") no-repeat;
          background-size: 15px 15px;
          position: absolute;
          top: 25px;
        }
        ul {
          li {
            float: left;
            padding-left: 35px;
            padding-top: 10px;
            clear: left;
            font-size: 14px;
            color: #333;
            font-weight: normal;
            label {
              color: #999;
            }
            label.send {
              color: #4ec17f;
            }
            label.have {
              color: #f54c51;
            }
          }
          li.float-right {
            width: 68px;
            float: right;
            clear: right;
            font-size: 12px;
            color: #333;
            text-align: right;
          }
        }
      }
        span.editor {
          width: 50px;
          height: 50px;
          font-size: 14px;
          display: inline-block;
          text-align: center;
          line-height: 50px;
          color: #fff;
          background-color: #6a99f7;
          border-radius: 3px;
          font-weight: normal;
          position: absolute;
          right: 15px;        //此时是按钮向左滑动15px
          top: 7px;
        }
    }
</style>
