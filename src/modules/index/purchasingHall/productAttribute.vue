<template>
  <div class="app_content">
    <zs-input-underline labelName="产品名称" :dataName="rowData.productName">
      <span slot="text"><label class="please">请选择品名</label><van-icon name="arrow" /></span>
    </zs-input-underline>
    <zs-input-underline labelName="牌号" :dataName="rowData.brandNumber">
      <span slot="text"><label class="please">请选择车牌号</label><van-icon name="arrow" /></span>
    </zs-input-underline>
    <zs-input-underline labelName="用途" :dataName="rowData.useTypeName">
      <span slot="text"><label class="please">请选择</label><van-icon name="arrow" /></span>
    </zs-input-underline>
    <zs-input-underline labelName="厂商" :dataName="rowData.factoryName">
      <span slot="text"><label class="please">请选择</label><van-icon name="arrow" /></span>
    </zs-input-underline>
    <zs-input-underline labelName="质量标准" :dataName="rowData.productQualityName"></zs-input-underline>
    <zs-input-underline :haveLine="false" labelName="包装规格" :dataName="rowData.packageSpec + 'kg/包'"></zs-input-underline>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        rowData: {
          productName: 'LLDPB',
          brandNumber: 'AC5502',
          useTypeName: '吸塑级',
          factoryName: '台塑美国',
          productQualityName: '原厂原包',
          packageSpec: '25'
        }
      }
    }
  }
</script>
<style lang="scss">
  .app_content{
    width: 100%;
      .font-new {
        i {
          font-size: 14px;
          color: #d8d8d8;
          position: relative;
          top: 2px;
          margin-left: 4px;
        }
      }
  }
</style>
