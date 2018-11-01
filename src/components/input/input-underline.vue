<template>
  <div class="input-first" v-if="true">
    <div :class="{'underline-div': haveLine}">
      <span class="font-style-title">{{labelName}}:</span>
      <span class=font-style>{{dataName}}</span>
      <slot name="input"></slot>
      <p class="font-new">
        <slot name="text"></slot>
      </p>
      <span class="font-ton">{{tonName}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'zs-input-underline',
    props: {
      labelName: String,
      dataName: String,
      tonName: String,
      haveLine: {
        type: Boolean,
        default: true
      },
      okay: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
<style scoped lang="scss">
  .input-first{
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    padding-left: 15px;
    background-color: #fff;
    color: #999;
    border-bottom: 1px solid transparent;
    .underline-div{
      border-bottom: 1px solid #eee;
    }
    .font-style-title{
      width: 65px;
      display: inline-block;
      margin-right: 10px;
    }
    .font-style{
      color: #333;
      /*display: block;*/
    }
    .font-new{
      font-size: 13px;
      color: #ddd;
      float: right;
      padding-right: 15px;
      margin: 0;
    }
    .font-ton {
      /*display: inline-block;*/
      float: right;
      padding-right: 15px;
    }
  }
</style>
