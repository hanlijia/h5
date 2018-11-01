<template>
  <div class="all-content">
    <manage-component :contain="content"></manage-component>
    <div class="add-sale-div">
      <i></i>
      <span>新建卖单</span>
    </div>
    <div class="red"></div>
  </div>
</template>
<script>
  import manageComponent from './component/manageComponent'
  export default {
    components: {
      'manage-component': manageComponent
    },
    metaInfo() {
      return {
        title: '挂单管理'
      }
    },
    data() {
      return {
        content: [{
          numberName: '5526144',
          timeName: '00:14',
          brandName: 'LDPE',
          tradeName: 'HXM50100CA',
          yuanName: '1130',
          tonName: '8',
          placeName: '青岛黄岛',
          dataName: '2018/08/10',
          is_show: true,
          haveColor: true
        }, {
          numberName: '5526144',
          timeName: '00:14',
          brandName: 'LDPE',
          tradeName: 'HXM50100CA',
          yuanName: '1130',
          tonName: '8',
          placeName: '苏州虎丘',
          dataName: '2018/08/10',
          is_show: true,
          haveColor: true
        }, {
          numberName: '5526144',
          timeName: '已失效',
          brandName: 'LDPE',
          tradeName: 'HXM50100CA',
          yuanName: '1130',
          tonName: '8',
          placeName: '深圳宝安',
          dataName: '2018/08/10',
          is_show: false,
          haveColor: false
        }]
      }
    }
  }
</script>
<style scoped lang="scss">
  .all-content{
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    margin-top: 0;
    position: relative;
    .add-sale-div{
      width: 75px;
      height: 20px;
      line-height: 20px;
      font-size: 12px;
      color: #999;
      font-weight: normal;
      position: absolute;
      bottom: 62px;
      left: 45%;
        i{
          width: 20px;
          height: 20px;
          display: inline-block;
          background-image: url("./images/new.png");
          background-size: 20px 20px;
        }
        span{
          float: right;
        }
    }
  }
</style>
