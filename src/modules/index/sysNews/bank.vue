<template>
  <div class="sys-bank-page">
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
          robotName: '赊销额度',
          dateName: '今天',
          timeName: '17:48:12',
          dataName: '您已获得288,838元的赊销额度'
        }, {
          haveDot: false,
          robotName: '应付账款',
          dateName: '昨天',
          timeName: '17:48:12',
          dataName: '您有一笔金额23,234元的应付账款3天即将到期...'
        }, {
          haveDot: false,
          robotName: '应付账款',
          dateName: '昨天',
          timeName: '17:48:12',
          dataName: '您有一笔金额23,234元的应付账款3天即将到期...'
        }]
      }
    }
  }
</script>

<style scoped lang="scss">
  .sys-bank-page{
    margin-top: 55px;
    box-sizing: border-box;
    width:  100%;
    padding: 0 15px;
  }
</style>
