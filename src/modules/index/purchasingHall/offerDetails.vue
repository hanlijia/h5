<template>
  <div class="app_content">
    <plan-component></plan-component>
    <div slot="add-list" class="add">
      <span class="price-this">报价:</span>
      <span class="text"><label class="text-color">{{rowData.dealPrice}}</label>元&nbsp;/&nbsp;吨</span>
      <span class="okay">成交</span>
    </div>
  </div>
</template>
<script>
  import planComponent from './component/planComponent.vue'
  export default {
    components: {
      'plan-component': planComponent
    },
    data() {
      return {
        rowData: {
          dealPrice: "16050"
        }
      }
    }
  }
</script>
<style lang="scss">
  .app_content{
    width: 100%;
   .add{
     width: 100%;
     height: 40px;
     background-color: #fff;
     line-height: 25px;
     .price-this{
       color: #666;
       font-size: 12px;
       padding-left: 15px;
     }
     .text{
       color: #666;
       font-size: 12px;
     }
     .text-color{
       font-size: 12px;
       color: #00ad4a;
     }
     .okay{
       width: 80px;
       height: 30px;
       display: inline-block;
       background: linear-gradient(90deg,#729fe9, #4977d9);
       background-color: #4977d9;
       border-radius: 40px;
       color: #fff;
       font-size: 14px;
       line-height: 30px;
       text-align: center;
       float: right;
       margin: 5px 15px 0 0;
     }
   }
  }
</style>
