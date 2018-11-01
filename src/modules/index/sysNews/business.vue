<template>
  <div class="sys-business-page">
    <common-list :contain="content"></common-list>
  </div>
</template>

<script>
  import commonList from './components/common-list'
  export default {
    components: {
      'common-list': commonList
    },
    data() {
      return {
        content: [{
          haveDot: true,
          robotName: '采购计划',
          dateName: '今天',
          timeName: '17:48:12',
          dataName: '您购买的货物甲醇已发货，交收期：2018/11/21左右'
        }, {
          haveDot: false,
          robotName: '机器人订单',
          dateName: '昨天',
          timeName: '17:48:12',
          dataName: '您有一笔成交的订单，单价多少，重量多少，价值....'
        }, {
          haveDot: false,
          robotName: '采购计划',
          dateName: '昨天',
          timeName: '17:48:12',
          dataName: '您购买的货物甲醇已发货，交收期：2018/11/21左右'
        }]
      }
    }
  }
</script>

<style scoped lang="scss">
  .sys-business-page{
    margin-top: 55px;
    box-sizing: border-box;
    width:  100%;
    padding: 0 15px;
  }
</style>
