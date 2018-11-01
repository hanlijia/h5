<template>
  <div class="model">
      <div class="input-outer">
        <textarea type="text" placeholder="请输入个人介绍" maxlength="40" v-model="value"></textarea>
        <span>40</span>
      </div>
      <span class="save-button">保存</span>
 </div>
</template>
<script>
  export default {
    metaInfo() {
      return {
        title: '基本信息'
      }
    },
    data() {
      return {
        value: ''
      }
    },
    methods: {
    }
  }
</script>
<style scoped lang="scss">
  .model{
    height: 100vh;
    padding: 15px 15px 0;
    textarea::-webkit-input-placeholder {
      color: #ddd;
    }
    textarea:-moz-placeholder {
      color: #ddd;
    }
    textarea::-moz-placeholder {
      color: #ddd;
    }
    textarea:-ms-input-placeholder {
      color: #ddd;
    }
      div.input-outer {
        height: 150px;
        line-height: 0;
        position: relative;
        font-size: 13px;
        color: #333;
        padding-bottom: 15px;
        textarea{
          width: 100%;
          height: 150px;
          border: 1px solid #ddd;
          border-radius: 3px;
          text-indent: 10px;
          padding: 0;
          margin: 0;
          line-height: 25px;
        }
        span{
          position: absolute;
          right: 10px;
          bottom: 28px;
        }
      }
      span.save-button{
        width: 100%;
        height: 33px;
        display: block;
        background-color: #4a77d9;
        border-radius: 44px;
        border: solid 1px #4a77d9;
        font-size: 14px;
        color: #fff;
        line-height: 33px;
        text-align: center;
      }
    }
</style>
