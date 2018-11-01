<template>
   <div class="all-content">
     <p class="seller">
       <label>销售方：</label>
       <span>浙江网塑电子商务有限公司</span>
     </p>
     <div>
       <div class="sell-title">
         <label class="title">LDPE</label>
         <label><span>1100</span>元/吨</label>
         <label><span>10</span>吨</label>
       </div>
       <div class="ul-margin-left">
           <ul>
             <li v-for="(item, index) of content" :key="index">
               <label>{{item.brandNumber}}：</label>
               <span>{{item.answerName}}</span>
             </li>
           </ul>
         <ul>
           <li  v-for="(item, index) of  contentTwo" :key="index">
             <label>{{item.brandNumber}}：</label>
             <span>{{item.answerName}}</span>
           </li>
         </ul>
       </div>
     </div>
     <p class="order-money">
       <label>订单金额：</label>
       <label class="yuan"><span>11000</span>元</label>
     </p>
     <div class="order-information">
         <p class="order-first">订单详情</p>
         <p class="p-same">
           <label>订单编号：</label>
           <span>1223344444132323</span>
           <span class="copy">复制</span>
         </p>
         <p class="p-same">
           <label>创建时间：</label>
           <span>2018/06/01 00:23:33</span>
         </p>
         <p class="p-same">
           <label>成交时间：</label>
           <span>2018/06/01 00:38:33</span>
         </p>
     </div>
   </div>
</template>
<script>
  export default {
    metaInfo() {
      return {
        title: '订单详情'
      }
    },
    data() {
      return {
        content: [{
          brandNumber: '牌号',
          answerName: '2426H'
        }, {
          brandNumber: '用途',
          answerName: '薄膜级'
        }, {
          brandNumber: '厂商',
          answerName: '大庆石化'
        }, {
          brandNumber: '质量标准',
          answerName: '原产原包'
        }, {
          brandNumber: '包装规格',
          answerName: '25千克/包'
        }],
        contentTwo: [{
          brandNumber: '发货地',
          answerName: '上海宝山'
        },
          {
            brandNumber: '交货方式',
            answerName: '配送'
          },
          {
            brandNumber: '交货期',
            answerName: '2018/08/01左右'
          }, {
            brandNumber: '收货地',
            answerName: '苏州虎丘'
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
    height: 100%;
    /*background-color: #fff;*/
    .seller{
      margin: 0 15px;
      height: 40px;
      font-size: 14px;
      color: #666;
      font-weight: normal;
      line-height: 40px;
      border-bottom: 1px solid #eee;
    }
    .sell-title {
      margin: 0 15px;
      height: 40px;
      font-weight: normal;
      line-height: 47px;
      font-size: 0;
      label{
        font-size: 14px;
        color: #666;
        &:last-child{
          padding-left: 63px;
        }
        span{
          padding-right: 5px;
        }
      }
      label.title{
        font-size: 15px;
        color: #000;
        padding-right: 137px;
      }
    }
    .ul-margin-left {
      border-bottom: 10px solid #F8F8F8;
      ul {
        font-size: 13px;
        list-style: none;
        height: 96px;
        margin: 0 15px;
        &:first-child{
          border-bottom: 1px solid #eee;
        }
        &:last-child{
          height: 66px;
        }
        li {
          float: left;
          width: 172px;
          height: 18px;
          padding-top: 10px;
          label {
            color: #999;
          }
          span {
            color: #666;
          }
        }
      }
    }
    .order-money{
      margin: 0;
      height: 40px;
      font-size: 14px;
      color: #666;
      font-weight: normal;
      line-height: 40px;
      border-bottom: 10px solid #F8F8F8;
      padding-left: 15px;
      label.yuan{
        float: right;
        padding-right: 15px;
        span{
          font-size: 15px;
          color: #4a77d9;
          padding-right: 5px;
        }
      }
    }
    .order-information{
      margin: 0 15px;
      p{
        margin: 0;
        font-weight: normal;
      }
      p.order-first{
        height: 40px;
        border-bottom: 1px solid #eee;
        font-size: 14px;
        color: #666;
        line-height: 40px;
      }
      p.p-same{
        font-size: 13px;
        color: #999;
        padding-top: 12px;
        position: relative;
        span.copy{
          width: 40px;
          height: 20px;
          display: inline-block;
          border-radius: 11px;
          border: 1px solid #999;
          text-align: center;
          line-height: 20px;
          position: absolute;
          top: 9px;
          right: 0;
        }
      }
    }
  }
</style>
