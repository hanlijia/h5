<template>
  <div>
    <div class="sell-title">
      <label><i></i>LDPE</label>
      <span class="fz-color">HXM50100CA</span>
      <span>配送</span>
      <span>苏州虎丘库</span>
    </div>
    <sell-component :contain="content"></sell-component>
  </div>
</template>
<script>
  import sellComponent from './component/sellComponent'
  export default {
    components: {
     'sell-component': sellComponent
    },
    metaInfo() {
     return {
       title: '更多报价'
     }
    },
    data() {
      return {
        content: [{
            firstTon: '1100',
            secondTon: '10',
            date: '2018/08/01',
            place: '上海宝山'
          },
          {
            firstTon: '1100',
            secondTon: '10',
            date: '2018/08/01',
            place: '上海宝山'
          },
          {
            firstTon: '1100',
            secondTon: '10',
            date: '2018/08/01',
            place: '上海宝山'
          },
          {
            firstTon: '1100',
            secondTon: '10',
            date: '2018/08/01',
            place: '上海宝山'
          },
          {
            firstTon: '1100',
            secondTon: '10',
            date: '2018/08/01',
            place: '上海宝山'
          }
        ]
      }
    },
    methods: {
    }
  }
</script>
<style scoped lang="scss">
    .sell-title {
      width: 100%;
      height: 41px;
      background-color: #fff;
      line-height: 41px;
      font-size: 0;
      margin-bottom: 10px;
      font-weight: normal;
      label {
        i {
          width: 13px;
          height: 13px;
          display: inline-block;
          background-image: url("./images/sell.png");
          background-size: 13px 13px;
          margin: 0 4px 0 15px;
        }
        font-size: 15px;
        color: #000;
      }
      span {
        font-size: 12px;
        color: #999;
        &:last-child {
          padding-left: 15px;
        }
      }
      span.fz-color {
        color: #666;
        padding: 0 15px 0 20px;
      }
    }
</style>
