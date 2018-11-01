<template>
  <div class="model">
    <p class="title">基本配置</p>
    <new-input-list :have-line="true" label-name="付款方式" :data-name="rowData.payMethod" :have_true="true">
      <span slot="text"><van-icon name="arrow" /></span>
    </new-input-list>
    <new-input-list :have-line="false" label-name="订单成交是否需要审批" :data-name="rowData.whether" :have_true="true">
      <span slot="text"><van-icon name="arrow" /></span>
    </new-input-list>
    <p class="title">企业属性</p>
      <ul>
        <li class="cf">
          <label>企业性质</label>
          <p>央企、国企控股的一级子公司<br/><span>(央企、国企为第一大股东)</span></p>
        </li>
        <li class="li-two-height cf">
          <label>注册资本</label>
          <p>5000万(含)以上</p>
        </li>
        <li class="cf">
          <label>企业信誉</label>
          <p>公司设立并营业5年(含)以上且无不良诚信记录</p>
        </li>
      </ul>
  </div>
</template>
<script>
  export default {
    metaInfo() {
      return {
        title: '我的配置'
      }
    },
    data() {
      return {
        rowData: {
          payMethod: '先开票后付款',
          whether: '是',
          one: '11',
          two: '22'
        }
      }
    },
    methods: {
    }
  }
</script>
<style scoped lang="scss">
  .model {
    width: 100%;
    height: 100vh;
    p.title{
      font-size: 13px;
      color: #333;
      padding: 10px 0 5px 15px;
    }
    ul{
      background-color: #fff;
      padding: 0 15px;
      color: #333;
      li.li-two-height{
        height: 18px;
       label,p{
         line-height: 18px;
         height: 18px;
       }
      }
      li{
        border-bottom: 1px solid #e5e5e5;
        font-size: 13px;
        height: 37px;
        padding: 10px 0;
        label{
          color: #999;
          line-height: 37px;
        }
        p{
          width: 170px;
          height: 37px;
          display: inline-block;
          text-align: right;
          float: right;
          line-height: 20px;
          span{
            font-size: 12px;
            color: #666;
          }
        }
        &:last-child{
          border: none;
        }
      }
    }
  }
</style>
