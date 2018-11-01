<template>
  <div class="all-content">
      <ul class="state-list">
        <li :class="{'li-color-change': isChange}" v-for="(item, index) of state" :key="index" @click="handleChange">
          <span>{{item}}</span>
          <i class="i-default" :class="{'i-change': isOn}"></i>
        </li>
      </ul>
      <order-kard :orderKardData="orderKardData" v-for="item in 3" :key="item"> </order-kard>
    </div>
</template>
<script>
  import orderKard from './components/orderKard'
  export default {
    components: {
      orderKard
    },
    data() {
      return {
        state: ['品名', '状态'],
        isChange: false,
        isOn: false,
        orderKardData: [{
          contractNo: 'CTN201808100002',
          time: '12:42',
          state: '待审批',
          productName: 'LDPE',
          numberName: 'HXM50100CA',
          dealPrice: '1130',
          dealNumber: '8',
          brandNumber: '青岛黄岛',
          deliveryDateName: '2018/08/08',
          productAttr: 'F',
          deliveryName: '上海宝山',
          yuanName: '9040',
          contractTimeName: '2018/08/14 12:30:23'
        }]
      }
    },
    methods: {
      handleChange() {
        this.isChange = !this.isChange
        this.isOn = !this.isOn
      }
    }
  }
</script>
<style scoped lang="scss">
  .all-content {
    width: 100%;
    margin-top: 83px;
      ul.state-list {
        position: fixed;
        top: 40px;
        left: 0;
        right: 0;
        height: 33px;
        background-color: #f5f8ff;
        .li-color-change {
          color: #4a77d9;
           float: left;
        }
        li {
          float: left;
          color: #666;
        }
        li, .li-color-change{
          width: 49%;
          height: 13px;
          font-size: 13px;
          display: inline-block;
          text-align: center;
          border-left: 1px solid #ddd;
          margin-top: 10px;
          &:first-child{
            border-left: none;
          }
          .i-default, .i-change {
            width: 12px;
            height: 10px;
            background-size: 12px 10px;
            position: relative;
            bottom: 4px;
          }
          .i-default {
            background: url("../img/arrow.png") no-repeat;
          }
          .i-change {
            background: url("../img/arrow-on.png") no-repeat
          }
        }
      }
    }
</style>
