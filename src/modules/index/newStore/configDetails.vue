<template>
  <div class="all-content">
      <div class="list-one-outer">
        <div class="list-one">
          <p class="p-first">
            <label>运价编号：</label>
            <span>{{rowData.priceNumber}}</span>
          </p>
          <p class="p-second">
            <label>更新时间：</label>
            <span>{{rowData.updateTime}}</span>
          </p>
        </div>
        <ul>
          <li>
            <span>发货地：</span>
            <span>{{rowData.place}}</span>
          </li>
          <li>
            <span>终端工厂：</span>
            <span>{{rowData.factory}}</span>
          </li>
          <li>
            <span>收货地址：</span>
            <span>{{rowData.receipt}}</span>
          </li>
        </ul>
    </div>
     <newrate-component></newrate-component>
  </div>
</template>
<script>
  import newrateComponent from './component/newrateComponent'
  export default {
    metaInfo() {
      return {
        title: '配置详情'
      }
    },
    components: {
      'newrate-component': newrateComponent
    },
    data() {
      return {
        rowData: {
          priceNumber: 'WN2018082400001',
          updateTime: '2018-08-24 13:00',
          place: '上海宝山',
          factory: '光明塑化',
          receipt: '天津滨海'
        }
      }
    },
    methods: {
    }
  }
</script>
<style scoped lang="scss">
  .all-content {
    width: 100%;
    height: 100vh;
    input::-webkit-input-placeholder {
      color: #ddd;
    }
    input:-moz-placeholder {
      color: #ddd;
    }
    input::-moz-placeholder {
      color: #ddd;
    }
    input:-ms-input-placeholder {
      color: #ddd;
    }
    input {
      width: 200px;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      font-weight: normal;
      border: 0;
      padding: 0;
      margin: 0;
      color: #333;
    }
    .list-one-outer {
      height: 160px;
      background-color: #fff;
      .list-one {
        height: 61px;
        margin: 0 15px;
        border-bottom: 1px solid #eee;
        p {
          margin: 0;
          font-weight: normal;
        }
        p.p-first {
          font-size: 14px;
          color: #666;
          padding-top: 10px;
        }
        p.p-second {
          font-size: 12px;
          color: #999;
          padding-top: 5px;
        }
      }
      ul {
        height: 98px;
        background-color: #fff;
        li {
          font-weight: normal;
          font-size: 0;
          padding-left: 15px;
          span {
            display: inline-block;
            color: #666;
            font-size: 13px;
            padding-top: 11px;
            &:first-child {
              color: #999;
              padding-right: 5px;
            }
          }
        }
      }
    }
    .list-two{
      margin-top: 10px;
      input{
        width: 200px;
      }
    }
  }
</style>
