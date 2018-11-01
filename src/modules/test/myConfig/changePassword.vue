<template>
  <div class="model">
    <div class="input-list">
      <input type="text" placeholder="请输入原密码" maxlength="20">
      <input type="text" placeholder="请输入新密码" maxlength="20">
      <input type="text" placeholder="请再次输入新密码" maxlength="20">
    </div>
    <div class="div-button cf">
      <span class="span-left">取消</span>
      <span class="spn-right">提交</span>
    </div>
  </div>
</template>
<script>
  export default {
    metaInfo() {
      return {
        title: '修改密码'
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
  .model {
    padding: 0 15px;
    background-color: #fff;
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
    div.input-list{
      padding-bottom: 15px;
      input{
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #e5e5e5;
        font-size: 13px;
        text-align: center;
        color: #333;
      }
    }
    .div-button{
      font-size: 0;
      span{
        width: 142px;
        height: 33px;
        display: inline-block;
        border-radius: 22px;
        line-height: 33px;
        text-align: center;
        font-size: 14px;
      }
      span.span-left{
        color: #4a77d9;
        border: solid 1px #4a77d9;
        margin-right: 14px;
        margin-left: 23px;
      }
      span.spn-right{
        background-color: #4a77d9;
        color: #fff;
      }
    }
  }
</style>
