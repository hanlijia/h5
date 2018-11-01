<template>
  <div class="all-content">
    <div class="all-search">
      <i></i>
      <input type="text" placeholder="请输入地址名称">
    </div>
    <freight-component :contain="content"></freight-component>
    <div class="ul-outer-button">
      <ul class="all-select">
          <li>
            <i class="all-select"></i>
            <span>全选</span>
          </li>
          <li>
            <i class="new-add"></i>
            <span class="new-add">新增</span>
          </li>
          <li class="float-right">
            <span class="check">审核</span>
            <span class="adjust-price">调价</span> <!--按钮颜色改变类名为color-change-->
          </li>
      </ul>
    </div>
  </div>
</template>
<script>
import freightComponent from './component/freightComponent'
  export default {
  components: {
    'freight-component': freightComponent
  },
  metaInfo() {
    return {
      title: '运价配置'
    }
  },
  data() {
    return {
      content: [{
        sendPlace: '上海 宝山',
        carType: '高栏',
        havePlace: '上海 徐汇',
        unitPrice: '15'
      },
        {
          sendPlace: '厦门 龙池',
          carType: '集装箱',
          havePlace: '上海 徐汇',
          unitPrice: '33'
        },
        {
          sendPlace: '大连 保税区',
          carType: '高栏',
          havePlace: '上海 徐汇',
          unitPrice: '59'
        },
        {
          sendPlace: '上海 宝山',
          carType: '高栏',
          havePlace: '宁波 余姚',
          unitPrice: '38'
        }]
    }
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
  .all-content{
    width: 100%;
    height: 100vh;
    overflow: hidden;
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
    .all-search{
        height: 30px;
        background-color: #fff;
        border-radius: 15px;
        margin: 10px 15px 0 15px;
        position: relative;
        i{
          width: 15px;
          height: 15px;
          display: inline-block;
          background: url("./images/search.png") no-repeat;
          background-size: 15px 15px;
          position: absolute;
          top: 7px;
          left: 15px;
        }
        input {
          width: 200px;
          height: 18px;
          display: inline-block;
          line-height: 20px;
          font-size: 13px;
          font-weight: normal;
          border: 0;
          padding: 0;
          margin-left: 40px;
          color: #333;
          position: absolute;
          top: 6px;
        }
      }
    .ul-outer-button {
      width: 100%;
      height: 40px;
      line-height: 40px;
      /*border: 1px solid red;*/
      background-color: #fff;
      position: fixed;
      bottom: 30px;
      ul.all-select{
        height: 100%;
        margin: 0 15px;
        li {
          float: left;
          font-size: 12px;
          i {
            width: 15px;
            height: 15px;
            display: inline-block;
            /*border: 1px solid red;*/
            position: relative;
            top: 3px;
          }
          i.all-select {
            background: url("./images/unselect.png") no-repeat;
            background-size: 15px 15px;
          }
          i.new-add {
            background: url("./images/add.png") no-repeat;
            background-size: 15px 15px;
            margin-left: 10px;
          }
          span.new-add {
            color: #4a77d9;
          }
        }
        li.float-right {
          float: right;
          font-size: 0;
          span.check, span.adjust-price,span.color-change{
            width: 80px;
            height: 30px;
            border-radius: 20px;
            font-size: 14px;
            line-height: 30px;
            text-align: center;
            color: #fff;
            margin-top: 6px;
            display: inline-block;
            &:first-child{
              margin-right: 10px;
            }
          }
          span.check, span.adjust-price{
            background-color: #ddd;
          }
          span.color-change{
            background: linear-gradient(to right, #6E9BE7, #4D7ADA );//按钮颜色改变类名
            background-color: #4D7ADA;      //老版本的浏览器兼容问题
          }
        }
      }
    }
  }
</style>
