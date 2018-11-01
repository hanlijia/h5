<template>
  <div class="all-content">
    <div class="block-list-one">
      <p class="p-first">
        <label>仓库编号：</label>
        <span>{{rowData.storeNumber}}</span>
      </p>
      <p class="p-second">
        <label>创建时间：</label>
        <span>{{rowData.dateName}}</span>
      </p>
    </div>
    <div class="block-list-second">
      <zs-list-underline labelName="公司名称" :dataName="rowData.companyName" :have_true="false"></zs-list-underline>
      <zs-list-underline labelName="仓库名称" :dataName="rowData.wareName" :have_true="false"></zs-list-underline>
      <p>
        <label>仓库地址：</label>
        <span>{{rowData.wareHouse}}</span>
      </p>
    </div>
    <div class="block-list-three">
      <zs-list-underline labelName="联系人" :dataName="rowData.contact" :have_true="false"></zs-list-underline>
      <zs-list-underline labelName="联系电话" :dataName="rowData.phone" :have_true="false"></zs-list-underline>
      <zs-list-underline labelName="传真" :dataName="rowData.faxes" :have_true="false" :have-line="false"></zs-list-underline>
    </div>
  </div>
</template>
<script>
  export default {
    metaInfo() {
      return {
        title: '仓库详情'
      }
    },
    data() {
      return {
        rowData: {
          storeNumber: '0156855',
          dateName: '2018-08-24 13:00',
          companyName: '中国外运华东有限公司金陵分公司',
          wareName: '广州黄埔',
          wareHouse: '广州市黄浦区姬堂长庚中街十巷1-2号(黄埔汇晋仓库）',
          contact: '伟亮',
          phone: '021-55560691',
          faxes: '021-55560686'
        }
      }
    },
    methods: {
    }
  }
</script>
<style scoped lang="scss">
.all-content{
  width: 100%;
  height: 100vh;
  .block-list-one{
    height: 61px;
    background-color: #fff;
    margin-bottom: 10px;
    p{
      margin: 0;
      font-weight: normal;
      padding-left: 15px;
    }
    p.p-first{
      font-size: 14px;
      color: #666;
      padding-top: 10px;
    }
    p.p-second{
      font-size: 12px;
      color: #999;
      padding-top: 5px;
    }
  }
  .block-list-second{
    margin-bottom: 10px;
    p{
      margin: 0;
      height: 60px;
      font-weight: normal;
      padding-left: 15px;
      font-size: 14px;
      background-color: #fff;
      label{
        color: #999;
      }
      span{
        width: 240px;
        color: #333;
        display: inline-block;
        position: relative;
        top: 13px;
      }
    }
  }
}
</style>
