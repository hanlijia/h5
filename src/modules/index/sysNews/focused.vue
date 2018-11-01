<template>
  <div class="sys-focused-page">
    <common-list :contain = "content"></common-list>
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
              robotName: '报价',
              dateName: '今天',
              timeName: '17:48:12',
              dataName: '产品  牌号：也7用后跟他过不顾个包袱 v 发布'
            }, {
              haveDot: false,
              robotName: '报价',
              dateName: '昨天',
              timeName: '17:48:12',
              dataName: '产品  牌号：也7用后跟他过不顾个包袱 v 发布'
            }, {
                haveDot: false,
                robotName: '机器人销售',
                dateName: '2018/02/21',
                timeName: '17:48:12',
                dataName: '产品  牌号：也7用后跟他过不顾个包袱 v 发布'
              }]
         }
        }
      }
</script>

<style scoped lang="scss">
  .sys-focused-page{
    margin-top: 55px;
    box-sizing: border-box;
    width:  100%;
    padding: 0 15px;
  }
</style>
