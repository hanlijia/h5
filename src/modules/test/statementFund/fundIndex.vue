<template>
  <div class="model">
    <ul class="state-list">
      <li :class="{'li-color-change': isChange}" v-for="(item, index) of state" :key="index" @click="handleChange">
        <span>{{item}}</span>
        <i class="i-default" :class="{'i-change': isOn}"></i>
      </li>
    </ul>
    <!--下面复杂的实现方式可以剪切掉-->
    <!--<fund-list apply-name="结息" money-name="5,000.00" company-name="中信信托有限责任公司" is-blue="true">-->
     <!--<van-icon name="arrow" slot="arrow"/>-->
    <!--</fund-list>-->
    <!--<fund-list apply-name="入金" money-name="134" company-name="上海秦晖信息科技有限公司" is-blue="true"></fund-list>-->
    <!--<fund-list apply-name="出金" money-name="1,000.00" company-name="上海秦晖信息科技有限公司" is-black="true">-->
      <!--<van-icon name="arrow" slot="arrow"/>-->
    <!--</fund-list>-->
    <!--<fund-list apply-name="支付全额货款" money-name="100,000.00" company-name="上海秦晖信息科技有限公司" is-black="true">-->
      <!--<van-icon name="arrow" slot="arrow"/>-->
    <!--</fund-list>-->
    <!--<fund-list apply-name="专区账款" money-name="102,000.00" company-name="-&#45;&#45;" is-black="true">-->
      <!--<van-icon name="arrow" slot="arrow"/>-->
    <!--</fund-list>-->
    <fund-list :listData="content"></fund-list>
    <div class="ico cf">
      <i class="big-ico"></i>
    </div>
  </div>
</template>
<script>
  import fundList from './components/fundList'
  export default {
    components: {
      fundList
    },
    metaInfo() {
      return {
        title: '资金对账单'
      }
    },
    data() {
      return {
        haveColor: false,
        isChange: false,
        isOn: false,
        state: ['交易类型', '年/月'],
        content: [{
          applyName: '结息',
          moneyName: '5,000.00',
          companyName: '中信信托有限责任公司',
          isBlue: true,
          haveLine: true
        }, {
          applyName: '入金',
          moneyName: '134',
          companyName: '上海秦晖信息科技有限公司',
          isBlue: true,
          haveLine: true
        }, {
          applyName: '出金',
          moneyName: '1,000.00',
          companyName: '上海秦晖信息科技有限公司',
          isBlack: true,
          haveLine: true
        }, {
          applyName: '支付全额货款',
          moneyName: '100,000.00',
          companyName: '上海秦晖信息科技有限公司',
          isBlack: true,
          haveLine: true
        }, {
          applyName: '专区账款',
          moneyName: '102,000.00',
          companyName: '---',
          isBlack: true,
          haveLine: true
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
  .model{
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    ul.state-list {
      height: 33px;
      background-color: #fff;
      border-bottom: 1px solid #e5e5e5;
      .li-color-change {
        color: #4a77d9;
      }
      li {
        color: #666;
      }
      li, .li-color-change {
        float: left;
        width: 49%;
        height: 13px;
        font-size: 13px;
        display: inline-block;
        text-align: center;
        border-left: 1px solid #ddd;
        margin-top: 10px;
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
    .ico{
      padding: 42px 15px 0 15px;
      i.big-ico {
        width: 20px;
        height: 20px;
        background: url("../img/big.png") no-repeat;
        background-size: 20px 20px;
        float: right;
      }
    }
  }
</style>
