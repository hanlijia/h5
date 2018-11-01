<template>
  <div class="component-content">
    <div class="list-one">
      <zs-list-underline labelName="公司名称">
        <span slot="input"><input type="text" placeholder="请输入公司名称"></span>
      </zs-list-underline>
      <zs-list-underline labelName="仓库名称">
        <span slot="input"><input type="text" placeholder="请输入仓库名称"></span>
      </zs-list-underline>
      <zs-list-underline labelName="仓库地址" :have-line="false">
        <span slot="input"><input type="text" placeholder="请输入仓库地址"></span>
      </zs-list-underline>
    </div>
    <div class="list-two">
      <zs-list-underline labelName="联系人">
        <span slot="input"><input type="text" placeholder="请输入联系人姓名"></span>
      </zs-list-underline>
      <zs-list-underline labelName="联系电话">
        <span slot="input"><input type="text" placeholder="请输入联系电话"></span>
      </zs-list-underline>
      <zs-list-underline labelName="传真" :have-line="false">
        <span slot="input"><input type="text" placeholder="请输入传真号码"></span>
      </zs-list-underline>
    </div>
  </div>
</template>
<script>
  export default {
    metaInfo() {
      return {
        title: '新增仓库'
      }
    },
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>
<style scoped lang="scss">
  .component-content{
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
      width: 270px;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      font-weight: normal;
      border: 0;
      padding: 0;
      margin: 0;
      color: #333;
    }
    .list-one{
      margin-bottom: 10px ;
      border-top: 15px solid #f8f8f8;
    }
  }
</style>
