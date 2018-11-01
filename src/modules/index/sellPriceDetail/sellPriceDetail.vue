<template>
   <div class="all-content">
    <div class="sell-title">
     <label class="title">LDPE</label>
     <label><span>1100</span>元/吨</label>
     <label><span>10</span>吨</label>
   </div>
     <div class="ul-margin-left">
       <div :class="{haveLine: is_bottom_line}">
         <ul>
           <li v-for="(item, index) of content" :key="index">
             <label>{{item.brandNumber}}：</label>
             <span>{{item.answerName}}</span>
           </li>
         </ul>
       </div>
       <ul>
         <li  v-for="(item, index) of contentTwo" :key="index">
           <label>{{item.brandNumber}}：</label>
           <span>{{item.answerName}}</span>
         </li>
       </ul>
     </div>
  </div>
</template>
<script>
  export default {
    metaInfo() {
      return {
          title: '卖方报价详情'
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
          }],
        is_bottom_line: true
      }
    }
  }
</script>
<style scoped lang="scss">
  .all-content {
    width: 100%;
    height: 100%;
    background-color: #fff;
    .sell-title {
      margin: 0 15px;
      height: 42px;
      border-bottom: 1px dashed #979797;
      font-weight: normal;
      line-height: 42px;
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
        ul {
          font-size: 13px;
          list-style: none;
          height: 96px;
          margin-left: 15px;
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
      .haveLine{
        border-bottom: 10px solid #f2f2f2;
      }
    }
  }
</style>
