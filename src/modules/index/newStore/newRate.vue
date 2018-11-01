<template>
  <div class="all-content">
    <div class="list-one">
      <zs-list-underline labelName="发货地" :show_width="false">
        <span slot="input"><input type="text" placeholder="请输入发货地"></span>
      </zs-list-underline>
      <zs-list-underline labelName="收货地" :have-line="false" :show_width="false">
        <span slot="input"><input type="text" placeholder="请输入收货地"></span>
      </zs-list-underline>
    </div>
    <newrate-component></newrate-component>
  </div>
</template>
<script>
  import newrateComponent from './component/newrateComponent'
  export default {
    metaInfo() {
      return {
        title: '新增运价'
      }
    },
    components: {
     'newrate-component': newrateComponent
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
  .all-content{
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
    .list-one{
      border-top: 15px solid #f8f8f8;
    }
  }
</style>
