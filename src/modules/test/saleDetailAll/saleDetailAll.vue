<template>
  <div class="model">
    <list-component :content="contain"></list-component>
  </div>
</template>
<script>
  import listComponent from './components/listComponent'
  export default {
    components: {
      listComponent
    },
    data() {
      return {
        contain: [{
          stateName: '部分还款',
          moneyName: '5,000.00',
          dateName: '2018/8/21 15:00',
          dayName: 7
        }, {
          stateName: '待还款',
          moneyName: '5,000.00',
          dateName: '2018/8/21 15:00',
          dayName: 7
        }, {
          stateName: '已逾期',
          moneyName: '5,000.00',
          dateName: '2018/8/21 15:00',
          dayName: 7
      }]
      }
    },
    methods: {
    }
  }
</script>
<style scoped lang="scss">
  .model{
    padding-left: 15px;
    padding-right: 15px;
    background-color: #fff;
    color: #333;
    margin-top: 43px;
  }
</style>
